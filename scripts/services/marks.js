import { MODULE_ID, HEX_NAME, HUNTERS_MARK_NAME, HEX_ICON, HUNTERS_MARK_ICON } from "../core/constants.js";
import { state } from "../core/state.js";
import { requestGMOperation } from "./socket.js";

function getWorkflowActivity(workflow) {
    return (
        workflow?.activity ??
        workflow?.item?.system?.activities?.get?.(workflow?.activityId) ??
        workflow?.item?.system?.activities?.get?.(
            workflow?.activityUuid?.split?.(".")?.at?.(-1)
        ) ??
        null
    );
}

function isFavoredEnemyActivity(workflow) {
    const activity = getWorkflowActivity(workflow);
    const id = activity?.id ?? activity?._id ?? workflow?.activityId ?? "";
    const name = String(activity?.name ?? "").trim().toLowerCase();

    return id === "AMHunterFavEnemy" || name === "favored enemy";
}

function findFavoredEnemyFeature(actor) {
    return actor?.items?.find(item =>
        item.type === "feat" &&
        (
            item.system?.identifier === "favored-enemy" ||
            String(item.name ?? "").trim().toLowerCase() === "favored enemy" ||
            String(item.name ?? "").trim().toLowerCase() === "ennemi juré"
        )
    ) ?? null;
}

async function consumeFavoredEnemyUse(actor) {
    const feature = findFavoredEnemyFeature(actor);

    if (!feature) {
        ui.notifications.warn(
            "Hunter's Mark : feature Favored Enemy introuvable sur l'acteur."
        );
        return false;
    }

    const spent = Number(feature.system?.uses?.spent ?? 0);
    const max = Number(feature.system?.uses?.max ?? 0);

    if (Number.isFinite(max) && max > 0 && spent >= max) {
        ui.notifications.warn(
            "Hunter's Mark : aucune utilisation de Favored Enemy restante."
        );
        return false;
    }

    await feature.update({ "system.uses.spent": spent + 1 });
    return true;
}

function getMarkedDamageForActor(actor) {
    if (!actor) return null;

    const targets = Array.from(game.user?.targets ?? []);
    const targetMatches = (effect, targetFlag) => {
        const markedUuid = effect?.getFlag(MODULE_ID, targetFlag);
        if (!markedUuid) return false;
        return targets.some(target => {
            const doc = normalizeTokenDocument(target);
            return doc?.uuid === markedUuid || doc?.actor?.uuid === markedUuid;
        });
    };

    const hexEffect = actor.effects.find(effect =>
        effect.getFlag(MODULE_ID, "hexDamageEffect") === true
    );
    if (hexEffect && targetMatches(hexEffect, "hexTargetUuid")) {
        return { formula: "1d6", type: "necrotic", label: "Hex" };
    }

    const huntersEffect = actor.effects.find(effect =>
        effect.getFlag(MODULE_ID, "huntersMarkDamageEffect") === true
    );
    if (huntersEffect && targetMatches(huntersEffect, "huntersMarkTargetUuid")) {
        return { formula: "1d6", type: "force", label: "Hunter's Mark" };
    }

    return null;
}

export function handleMarkedPreRollDamageV2(config, dialog, message) {
    try {
        const activity = config?.subject;
        const actor = activity?.actor ?? activity?.item?.actor;
        if (!actor || !Array.isArray(config?.rolls) || !config.rolls.length) return;

        const bonus = getMarkedDamageForActor(actor);
        if (!bonus) return;

        // Midi ne demande le jet de dégâts d'une attaque que lorsqu'elle doit être
        // résolue. On ajoute donc le dé de marque directement à la configuration
        // native dnd5e AVANT la construction du message de dégâts. Ainsi le dé
        // apparaît dans le même bloc DAMAGE et dnd5e/Midi ne créent qu'un Apply.
        if (config.__automatedMarksMerged) return;
        config.__automatedMarksMerged = true;

        const base = config.rolls[0] ?? {};
        const extra = foundry.utils.deepClone(base);
        extra.parts = [bonus.formula];
        extra.options = foundry.utils.mergeObject(extra.options ?? {}, {
            type: bonus.type,
            flavor: bonus.label
        }, { inplace: false });
        extra.data = foundry.utils.deepClone(base.data ?? {});

        // Évite de réutiliser les parties de dégâts de l'attaque principale.
        // Le second DamageRoll appartient néanmoins au MEME message de dégâts :
        // les résistances par type restent correctes et il n'y a qu'un Apply.
        config.rolls.push(extra);

        console.debug(`${MODULE_ID} | ${bonus.label} injecté dans le jet de dégâts natif (${bonus.formula} ${bonus.type}).`);
    } catch (error) {
        console.error(`${MODULE_ID} | Impossible d'injecter les dégâts de marque avant le jet`, error);
    }
}

export async function handleRollComplete(workflow) {
    try {
        if (!workflow?.actor || !workflow?.item) return;

        const itemName = workflow.item.name;
        const action =
            itemName === HEX_NAME
                ? "applyHex"
                : itemName === HUNTERS_MARK_NAME
                    ? "applyHuntersMark"
                    : workflow.item.getFlag(MODULE_ID, "action");

        if (!["applyHex", "applyHuntersMark"].includes(action)) return;

        const key = `${action}:${workflow.uuid ?? workflow.id ?? workflow.itemUuid}`;
        if (state.processedWorkflows.has(key)) return;

        state.processedWorkflows.add(key);
        setTimeout(() => state.processedWorkflows.delete(key), 15000);

        const targets = Array.from(workflow.targets ?? game.user.targets ?? []);

        if (targets.length !== 1) {
            return ui.notifications.warn(
                `${workflow.item.name} : sélectionnez exactement une cible.`
            );
        }

        if (action === "applyHex") {
            const ability = await chooseAbility();
            if (!ability) return;

            await applyHex({
                actor: workflow.actor,
                item: workflow.item,
                target: targets[0],
                ability,
                castLevel: detectCastLevel(workflow)
            });
        } else {
            if (isFavoredEnemyActivity(workflow)) {
                const consumed = await consumeFavoredEnemyUse(workflow.actor);
                if (!consumed) return;
            }

            await applyHuntersMark({
                actor: workflow.actor,
                item: workflow.item,
                target: targets[0],
                castLevel: detectCastLevel(workflow)
            });
        }
    } catch (error) {
        console.error(`${MODULE_ID} | Erreur RollComplete`, error);
        ui.notifications.error("Automated Marks : erreur. Consultez la console F12.");
    }
}

async function applyHex({ actor, item, target, ability, castLevel }) {
    const tokenDocument = normalizeTokenDocument(target);
    const targetActor = tokenDocument?.actor;

    if (!actor || !item || !tokenDocument || !targetActor) return;

    await removeMark(actor, "hex");

    const duration = makeDuration(castLevel);

    const targetEffect = await createActiveEffect(targetActor, {
            name: `Hex — ${abilityLabel(ability)}`,
            img: HEX_ICON,
            origin: item.uuid,
            disabled: false,
            duration,
            changes: [{
                key: `flags.midi-qol.disadvantage.ability.check.${ability}`,
                mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
                value: "true",
                priority: 20
            }],
            flags: {
                [MODULE_ID]: {
                    markType: "hex",
                    targetEffect: true,
                    casterUuid: actor.uuid,
                    targetUuid: tokenDocument.uuid,
                    ability,
                    castLevel
                }
            }
        });

    const [damageEffect] = await actor.createEmbeddedDocuments(
        "ActiveEffect",
        [{
            name: "Hex — Dégâts supplémentaires",
            img: null,
            origin: item.uuid,
            disabled: false,
            duration,
            changes: [],
            flags: {
                [MODULE_ID]: {
                    markType: "hex",
                    hexDamageEffect: true,
                    hexTargetUuid: tokenDocument.uuid,
                    castLevel
                }
            }
        }]
    );

    await updateConcentrationDuration(actor, item, castLevel);
    await linkToConcentration(actor, targetEffect, item);
    await linkToConcentration(actor, damageEffect, item);

    ui.notifications.info(
        `${targetActor.name} est la cible de Hex : ${abilityLabel(ability)}.`
    );
}

async function applyHuntersMark({ actor, item, target, castLevel }) {
    const tokenDocument = normalizeTokenDocument(target);
    const targetActor = tokenDocument?.actor;

    if (!actor || !item || !tokenDocument || !targetActor) return;

    await removeMark(actor, "huntersMark");

    const duration = makeDuration(castLevel);

    const targetEffect = await createActiveEffect(targetActor, {
            name: "Hunter's Mark",
            img: HUNTERS_MARK_ICON,
            origin: item.uuid,
            disabled: false,
            duration,
            changes: [],
            flags: {
                [MODULE_ID]: {
                    markType: "huntersMark",
                    targetEffect: true,
                    casterUuid: actor.uuid,
                    targetUuid: tokenDocument.uuid,
                    castLevel
                }
            }
        });

    const [damageEffect] = await actor.createEmbeddedDocuments(
        "ActiveEffect",
        [{
            name: "Hunter's Mark — Dégâts supplémentaires",
            img: null,
            origin: item.uuid,
            disabled: false,
            duration,
            changes: [],
            flags: {
                [MODULE_ID]: {
                    markType: "huntersMark",
                    huntersMarkDamageEffect: true,
                    huntersMarkTargetUuid: tokenDocument.uuid,
                    castLevel
                }
            }
        }]
    );

    await updateConcentrationDuration(actor, item, castLevel);
    await linkToConcentration(actor, targetEffect, item);
    await linkToConcentration(actor, damageEffect, item);

    ui.notifications.info(
        `${targetActor.name} est la cible de Hunter's Mark.`
    );
}

export async function moveHex({ actor, target }) {
    const ability = await chooseAbility();
    if (!ability) return;

    await moveMark({
        actor,
        target,
        type: "hex",
        ability,
        icon: HEX_ICON,
        label: "Hex"
    });
}

export async function moveHuntersMark({ actor, target }) {
    await moveMark({
        actor,
        target,
        type: "huntersMark",
        ability: null,
        icon: HUNTERS_MARK_ICON,
        label: "Hunter's Mark"
    });
}

async function moveMark({
    actor,
    target,
    type,
    ability,
    icon,
    label
}) {
    const damageEffect = getDamageEffect(actor, type);

    if (!damageEffect) {
        return ui.notifications.warn(
            `Replacer — ${label} : aucune marque active.`
        );
    }

    const targetFlag =
        type === "hex"
            ? "hexTargetUuid"
            : "huntersMarkTargetUuid";

    const oldTargetUuid =
        damageEffect.getFlag(MODULE_ID, targetFlag);

    const oldDocument =
        oldTargetUuid ? await fromUuid(oldTargetUuid) : null;

    const oldActor =
        normalizeTokenDocument(oldDocument)?.actor;

    const oldHp =
        Number(oldActor?.system?.attributes?.hp?.value);

    if (oldActor && Number.isFinite(oldHp) && oldHp > 0) {
        return ui.notifications.warn(
            `Replacer — ${label} : l'ancienne cible possède encore des points de vie.`
        );
    }

    const newTokenDocument = normalizeTokenDocument(target);
    const newTargetActor = newTokenDocument?.actor;

    if (!newTokenDocument || !newTargetActor) return;

    const duration = copyRemainingDuration(damageEffect);
    const castLevel = Number(damageEffect.getFlag(MODULE_ID, "castLevel")) || 1;

    await deleteTargetEffects(actor.uuid, type);

    const changes = type === "hex"
        ? [{
            key: `flags.midi-qol.disadvantage.ability.check.${ability}`,
            mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
            value: "true",
            priority: 20
        }]
        : [];

    const targetEffect = await createActiveEffect(newTargetActor, {
            name: type === "hex"
                ? `Hex — ${abilityLabel(ability)}`
                : "Hunter's Mark",
            img: icon,
            origin: damageEffect.origin,
            disabled: false,
            duration,
            changes,
            flags: {
                [MODULE_ID]: {
                    markType: type,
                    targetEffect: true,
                    casterUuid: actor.uuid,
                    targetUuid: newTokenDocument.uuid,
                    ability,
                    castLevel
                }
            }
        });

    await damageEffect.update({
        [`flags.${MODULE_ID}.${targetFlag}`]: newTokenDocument.uuid
    });

    const concentrationItem =
        damageEffect.origin ? await fromUuid(damageEffect.origin) : null;

    await linkToConcentration(actor, targetEffect, concentrationItem);

    ui.notifications.info(
        `${newTargetActor.name} est désormais la cible de ${label}.`
    );
}

function getDamageEffect(actor, type) {
    const flag =
        type === "hex"
            ? "hexDamageEffect"
            : "huntersMarkDamageEffect";

    return actor?.effects?.find(effect =>
        effect.getFlag(MODULE_ID, flag) === true &&
        effect.disabled !== true
    ) ?? null;
}

async function removeMark(actor, type) {
    await deleteTargetEffects(actor.uuid, type);

    const effect = getDamageEffect(actor, type);

    if (effect) {
        await actor.deleteEmbeddedDocuments(
            "ActiveEffect",
            [effect.id]
        );
    }
}

async function deleteTargetEffects(casterUuid, type) {
    const actors = new Set(game.actors.contents);

    for (const tokenDocument of canvas.scene?.tokens ?? []) {
        if (tokenDocument.actor) actors.add(tokenDocument.actor);
    }

    for (const checkedActor of actors) {
        const effects = checkedActor.effects.filter(effect =>
            effect.getFlag(MODULE_ID, "targetEffect") === true &&
            effect.getFlag(MODULE_ID, "casterUuid") === casterUuid &&
            effect.getFlag(MODULE_ID, "markType") === type
        );

        if (!effects.length) continue;

        await deleteActiveEffects(
            checkedActor,
            effects.map(effect => effect.id)
        );
    }
}

async function createActiveEffect(actor, effectData) {
    if (!actor) return null;

    if (actor.isOwner) {
        const [effect] = await actor.createEmbeddedDocuments(
            "ActiveEffect",
            [effectData]
        );
        return effect ?? null;
    }

    const requestId = foundry.utils.randomID();
    const remoteData = foundry.utils.deepClone(effectData);
    remoteData.flags = foundry.utils.mergeObject(
        remoteData.flags ?? {},
        { [MODULE_ID]: { requestId } },
        { inplace: false }
    );

    const result = await requestGMOperation("createTargetEffect", {
        actorUuid: actor.uuid,
        effectData: remoteData
    });

    if (result?.effectUuid) {
        const remoteEffect = await fromUuid(result.effectUuid).catch(() => null);
        if (remoteEffect) return remoteEffect;
    }

    // La mise à jour reçue du MJ peut arriver juste après la réponse socket.
    for (let attempt = 0; attempt < 10; attempt += 1) {
        const effect = actor.effects?.find(candidate =>
            candidate.getFlag(MODULE_ID, "requestId") === requestId
        );
        if (effect) return effect;
        await new Promise(resolve => setTimeout(resolve, 50));
    }

    return null;
}

async function deleteActiveEffects(actor, effectIds) {
    if (!actor || !effectIds?.length) return;

    if (actor.isOwner) {
        await actor.deleteEmbeddedDocuments("ActiveEffect", effectIds);
        return;
    }

    await requestGMOperation("deleteTargetEffects", {
        actorUuid: actor.uuid,
        effectIds
    });
}

function makeDuration(castLevel) {
    return {
        seconds:
            castLevel >= 5 ? 86400 :
            castLevel >= 3 ? 28800 :
            3600,
        startTime: game.time.worldTime
    };
}

function copyRemainingDuration(effect) {
    const duration = foundry.utils.deepClone(effect.duration ?? {});

    if (Number.isFinite(effect.duration?.remaining)) {
        duration.seconds = Math.max(0, effect.duration.remaining);
        duration.startTime = game.time.worldTime;
    }

    return duration;
}


async function updateConcentrationDuration(actor, item, castLevel) {
    if (!actor || !item) return false;

    const duration = makeDuration(castLevel);

    /*
     * Selon l'ordre des hooks D&D5e/Midi-QOL, l'effet de concentration
     * peut être créé quelques millisecondes après RollComplete.
     */
    for (let attempt = 0; attempt < 10; attempt += 1) {
        const concentrationEffect = actor.effects.find(effect => {
            const statuses = effect.statuses ?? new Set();

            const isConcentration =
                statuses.has("concentrating") ||
                effect.getFlag("dnd5e", "concentration") === true ||
                effect.name === game.i18n.localize(
                    "DND5E.Concentrating"
                ) ||
                effect.name?.toLowerCase() === "concentrating" ||
                effect.name?.toLowerCase() === "concentration";

            if (!isConcentration) return false;

            const effectOrigin = effect.origin ?? "";

            /*
             * On privilégie l'effet lié au sort lancé. S'il n'existe qu'un
             * effet de concentration, celui-ci est nécessairement le bon,
             * puisqu'un acteur ne peut maintenir qu'une concentration.
             */
            return (
                effectOrigin === item.uuid ||
                effectOrigin.includes(item.id) ||
                actor.effects.filter(candidate =>
                    candidate.statuses?.has("concentrating")
                ).length === 1
            );
        });

        if (concentrationEffect) {
            await concentrationEffect.update({
                duration: {
                    seconds: duration.seconds,
                    startTime: duration.startTime
                },
                [`flags.${MODULE_ID}.castLevel`]: castLevel,
                [`flags.${MODULE_ID}.durationSeconds`]:
                    duration.seconds
            });

            return true;
        }

        await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.warn(
        `${MODULE_ID} | Effet de concentration introuvable pour ${item.name}.`
    );

    return false;
}

async function linkToConcentration(actor, effect, item) {
    if (!actor || !effect || !item) return false;
    if (typeof MidiQOL?.addConcentrationDependent !== "function") return false;

    try {
        await MidiQOL.addConcentrationDependent(actor, effect, item);
        return true;
    } catch (error) {
        console.warn(`${MODULE_ID} | Liaison concentration impossible`, error);
        return false;
    }
}

function normalizeTokenDocument(value) {
    if (!value) return null;
    if (value.documentName === "Token") return value;
    if (value.document?.documentName === "Token") return value.document;
    if (value.token?.documentName === "Token") return value.token;
    if (value.token?.document?.documentName === "Token") return value.token.document;
    return null;
}

function detectCastLevel(workflow) {
    const values = [
        workflow?.castData?.castLevel,
        workflow?.castData?.slotLevel,
        workflow?.spellLevel,
        workflow?.config?.spellLevel,
        workflow?.options?.spellLevel,
        workflow?.actor?.system?.spells?.pact?.level,
        workflow?.item?.system?.level
    ];

    return values
        .map(Number)
        .find(value =>
            Number.isInteger(value) &&
            value >= 1 &&
            value <= 9
        ) ?? 1;
}

function abilityLabel(ability) {
    return {
        str: "Force",
        dex: "Dextérité",
        con: "Constitution",
        int: "Intelligence",
        wis: "Sagesse",
        cha: "Charisme"
    }[ability] ?? ability;
}

async function chooseAbility() {
    const abilities = ["str", "dex", "con", "int", "wis", "cha"];

    return await new Promise(resolve => {
        let resolved = false;

        const finish = value => {
            if (resolved) return;
            resolved = true;
            resolve(value);
        };

        const dialog = new Dialog({
            title: "Hex — Caractéristique affectée",
            content: `
                <p>Choisissez la caractéristique affectée :</p>

                <div style="
                    display:grid;
                    grid-template-columns:repeat(3,1fr);
                    gap:8px;
                    margin-top:10px;
                ">
                    ${abilities.map(ability => `
                        <button type="button" data-ability="${ability}">
                            ${abilityLabel(ability)}
                        </button>
                    `).join("")}
                </div>

                <div style="display:flex;justify-content:center;margin-top:12px;">
                    <button type="button" data-ability="cancel" style="width:140px;">
                        Annuler
                    </button>
                </div>
            `,
            buttons: {},
            render: html => {
                html.find("[data-ability]").on("click", event => {
                    const selected = event.currentTarget.dataset.ability;
                    finish(selected === "cancel" ? null : selected);
                    dialog.close();
                });
            },
            close: () => finish(null)
        });

        dialog.render(true);
    });
}
