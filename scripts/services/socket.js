import { MODULE_ID, SOCKET_NAME } from "../core/constants.js";
import { state } from "../core/state.js";

export function primaryActiveGM() {
    return game.users
        .filter(user => user.active && user.isGM)
        .sort((a, b) => String(a.id).localeCompare(String(b.id)))[0] ?? null;
}

export async function requestGMOperation(operation, payload) {
    if (game.user.isGM) {
        return executeGMOperation(operation, payload, game.user.id);
    }

    const gm = primaryActiveGM();
    if (!gm) {
        throw new Error("Aucun MJ actif n'est disponible pour appliquer la marque.");
    }

    const requestId = foundry.utils.randomID();

    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            state.pendingSocketRequests.delete(requestId);
            reject(new Error("Le MJ n'a pas répondu à la demande Automated Marks."));
        }, 10000);

        state.pendingSocketRequests.set(requestId, { resolve, reject, timeout });
        game.socket.emit(SOCKET_NAME, {
            kind: "request",
            requestId,
            operation,
            payload,
            requesterId: game.user.id,
            gmId: gm.id
        });
    });
}

export async function handleAutomatedMarksSocket(message) {
    if (!message || typeof message !== "object") return;

    if (message.kind === "response" && message.recipientId === game.user.id) {
        const pending = state.pendingSocketRequests.get(message.requestId);
        if (!pending) return;

        clearTimeout(pending.timeout);
        state.pendingSocketRequests.delete(message.requestId);
        if (message.ok) pending.resolve(message.result);
        else pending.reject(new Error(message.error || "Opération MJ refusée."));
        return;
    }

    if (
        message.kind !== "request" ||
        !game.user.isGM ||
        message.gmId !== game.user.id ||
        primaryActiveGM()?.id !== game.user.id
    ) return;

    try {
        const result = await executeGMOperation(
            message.operation,
            message.payload,
            message.requesterId
        );
        game.socket.emit(SOCKET_NAME, {
            kind: "response",
            requestId: message.requestId,
            recipientId: message.requesterId,
            ok: true,
            result
        });
    } catch (error) {
        console.error(`${MODULE_ID} | Opération socket refusée`, error);
        game.socket.emit(SOCKET_NAME, {
            kind: "response",
            requestId: message.requestId,
            recipientId: message.requesterId,
            ok: false,
            error: error?.message ?? String(error)
        });
    }
}

async function executeGMOperation(operation, payload, requesterId) {
    const requester = game.users.get(requesterId);
    if (!requester) throw new Error("Utilisateur Automated Marks introuvable.");

    if (operation === "createTargetEffect") {
        const targetActor = await fromUuid(payload?.actorUuid);
        const effectData = foundry.utils.deepClone(payload?.effectData ?? {});
        const markFlags = effectData.flags?.[MODULE_ID] ?? {};
        const caster = await fromUuid(markFlags.casterUuid);

        if (!targetActor || !caster) throw new Error("Acteur de marque introuvable.");
        if (!caster.testUserPermission(requester, CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER)) {
            throw new Error("Le joueur ne possède pas le lanceur de la marque.");
        }
        if (
            markFlags.targetEffect !== true ||
            !["hex", "huntersMark"].includes(markFlags.markType)
        ) {
            throw new Error("Effet Automated Marks invalide.");
        }

        const [effect] = await targetActor.createEmbeddedDocuments(
            "ActiveEffect",
            [effectData]
        );
        return { effectUuid: effect?.uuid ?? null };
    }

    if (operation === "deleteTargetEffects") {
        const targetActor = await fromUuid(payload?.actorUuid);
        const effectIds = Array.from(payload?.effectIds ?? []);
        if (!targetActor || !effectIds.length) return { deleted: 0 };

        const effects = effectIds
            .map(id => targetActor.effects.get(id))
            .filter(Boolean);

        for (const effect of effects) {
            const flags = effect.flags?.[MODULE_ID] ?? {};
            const caster = await fromUuid(flags.casterUuid);
            if (
                flags.targetEffect !== true ||
                !caster?.testUserPermission(
                    requester,
                    CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER
                )
            ) {
                throw new Error("Suppression d'effet Automated Marks refusée.");
            }
        }

        await targetActor.deleteEmbeddedDocuments(
            "ActiveEffect",
            effects.map(effect => effect.id)
        );
        return { deleted: effects.length };
    }

    throw new Error(`Opération Automated Marks inconnue : ${operation}`);
}



