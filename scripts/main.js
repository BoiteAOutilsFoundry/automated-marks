const MODULE_ID = "automated-marks";
const MODULE_VERSION = "1.0.7";
const SOCKET_NAME = `module.${MODULE_ID}`;

const HEX_NAME = "Hex";
const HUNTERS_MARK_NAME = "Hunter's Mark";

const HEX_ICON = "icons/magic/perception/silhouette-stealth-shadow.webp";
const HUNTERS_MARK_ICON = "icons/magic/perception/eye-ringed-glow-angry-small-red.webp";
const HEX_REPLACE_ICON = "modules/automated-marks/assets/replacer-hex.svg";
const HUNTERS_MARK_REPLACE_ICON = "modules/automated-marks/assets/replacer-hunters-mark.svg";

const SPELL_PACK_NAME = "automated-marks-spells";
const SCRIPT_PACK_NAME = "automated-marks-scripts";
const SPELL_PACK_COLLECTION = `world.${SPELL_PACK_NAME}`;
const SCRIPT_PACK_COLLECTION = `world.${SCRIPT_PACK_NAME}`;

const HEX_DAMAGE_MACRO_NAME = "Hex Damage";
const HUNTERS_MARK_DAMAGE_MACRO_NAME = "Hunter's Mark Damage";

const SPELL_SOURCES = [
  {
    "_id": "AMHexSpell000001",
    "name": "Hex",
    "type": "spell",
    "img": "icons/magic/perception/silhouette-stealth-shadow.webp",
    "system": {
      "description": {
        "value": "<p><strong>Hex automatisé.</strong></p><p>Ce sort remplace la version d’origine pour l’automatisation de la marque.</p>",
        "chat": ""
      },
      "source": {
        "rules": "2024",
        "revision": 1,
        "custom": "Automated Marks"
      },
      "activation": {
        "type": "bonus",
        "cost": 1,
        "condition": ""
      },
      "duration": {
        "value": "1",
        "units": "hour",
        "concentration": true
      },
      "target": {
        "affects": {
          "choice": false,
          "count": "1",
          "type": "creature",
          "special": ""
        },
        "template": {
          "contiguous": false,
          "units": "",
          "type": "",
          "size": "",
          "width": "",
          "height": ""
        },
        "prompt": true
      },
      "range": {
        "value": "90",
        "units": "ft",
        "special": ""
      },
      "uses": {
        "max": "",
        "spent": 0,
        "recovery": []
      },
      "level": 1,
      "school": "enc",
      "properties": [
        "concentration"
      ],
      "materials": {
        "value": "",
        "consumed": false,
        "cost": 0,
        "supply": 0
      },
      "preparation": {
        "mode": "always",
        "prepared": true
      },
      "activities": {
        "AMHexActivity001": {
          "_id": "AMHexActivity001",
          "type": "utility",
          "name": "Hex",
          "img": "icons/magic/perception/silhouette-stealth-shadow.webp",
          "description": {
            "chatFlavor": ""
          },
          "activation": {
            "type": "bonus",
            "cost": 1,
            "condition": ""
          },
          "consumption": {
            "scaling": {
              "allowed": false,
              "max": ""
            },
            "spellSlot": true,
            "targets": []
          },
          "duration": {
            "override": false
          },
          "effects": [],
          "range": {
            "override": false
          },
          "target": {
            "override": false
          },
          "uses": {
            "spent": 0,
            "recovery": [],
            "max": ""
          },
          "sort": 0
        }
      },
      "identifier": "applyhex"
    },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 0
    },
    "flags": {
      "automated-marks": {
        "action": "applyHex",
        "version": "1.0.4"
      }
    },
    "_stats": {
      "systemId": "dnd5e",
      "systemVersion": "4.4.2",
      "coreVersion": "12.343",
      "createdTime": 0,
      "modifiedTime": 0,
      "lastModifiedBy": null
    }
  },
  {
    "_id": "AMHunterSpad42e0",
    "name": "Hunter's Mark",
    "type": "spell",
    "img": "icons/magic/perception/eye-ringed-glow-angry-small-red.webp",
    "system": {
      "description": {
        "value": "<p><strong>Hunter's Mark automatisé.</strong></p><p>Utilisez <em>Emplacement de sort</em> pour dépenser un emplacement, ou <em>Favored Enemy</em> pour consommer une utilisation de la feature sans dépenser d’emplacement.</p>",
        "chat": ""
      },
      "source": {
        "rules": "2024",
        "revision": 1,
        "custom": "Automated Marks"
      },
      "activation": {
        "type": "bonus",
        "cost": 1,
        "condition": ""
      },
      "duration": {
        "value": "1",
        "units": "hour",
        "concentration": true
      },
      "target": {
        "affects": {
          "choice": false,
          "count": "1",
          "type": "creature",
          "special": ""
        },
        "template": {
          "contiguous": false,
          "units": "",
          "type": "",
          "size": "",
          "width": "",
          "height": ""
        },
        "prompt": true
      },
      "range": {
        "value": "90",
        "units": "ft",
        "special": ""
      },
      "uses": {
        "max": "",
        "spent": 0,
        "recovery": []
      },
      "level": 1,
      "school": "div",
      "properties": [
        "concentration"
      ],
      "materials": {
        "value": "",
        "consumed": false,
        "cost": 0,
        "supply": 0
      },
      "preparation": {
        "mode": "always",
        "prepared": true
      },
      "activities": {
        "AMHunterAc94dba6": {
          "_id": "AMHunterAc94dba6",
          "type": "utility",
          "name": "Emplacement de sort",
          "img": "icons/magic/perception/eye-ringed-glow-angry-small-red.webp",
          "description": {
            "chatFlavor": "Hunter's Mark lancé avec un emplacement de sort."
          },
          "activation": {
            "type": "bonus",
            "cost": 1,
            "condition": ""
          },
          "consumption": {
            "scaling": {
              "allowed": false,
              "max": ""
            },
            "spellSlot": true,
            "targets": []
          },
          "duration": {
            "override": false
          },
          "effects": [],
          "range": {
            "override": false
          },
          "target": {
            "override": false
          },
          "uses": {
            "spent": 0,
            "recovery": [],
            "max": ""
          },
          "sort": 0
        },
        "AMHunterFavEnemy": {
          "_id": "AMHunterFavEnemy",
          "type": "utility",
          "name": "Favored Enemy",
          "img": "icons/skills/targeting/crosshair-arrowhead-blue.webp",
          "description": {
            "chatFlavor": "Hunter's Mark lancé via Favored Enemy : aucune dépense d’emplacement, durée de 1 heure."
          },
          "activation": {
            "type": "bonus",
            "cost": 1,
            "condition": ""
          },
          "consumption": {
            "scaling": {
              "allowed": false,
              "max": ""
            },
            "spellSlot": false,
            "targets": []
          },
          "duration": {
            "override": false
          },
          "effects": [],
          "range": {
            "override": false
          },
          "target": {
            "override": false
          },
          "uses": {
            "spent": 0,
            "recovery": [],
            "max": ""
          },
          "sort": 1
        }
      },
      "identifier": "applyhuntersmark"
    },
    "effects": [],
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 0
    },
    "flags": {
      "automated-marks": {
        "action": "applyHuntersMark",
        "version": "1.0.4"
      }
    },
    "_stats": {
      "systemId": "dnd5e",
      "systemVersion": "4.4.2",
      "coreVersion": "12.343",
      "createdTime": 0,
      "modifiedTime": 0,
      "lastModifiedBy": null
    }
  }
];
const SCRIPT_SOURCES = [
  {
    "_id": "AMReplHexMacro01",
    "name": "Replacer — Hex",
    "type": "script",
    "img": "modules/automated-marks/assets/replacer-hex.svg",
    "command": "const actor =\n    canvas.tokens.controlled[0]?.actor ??\n    game.user.character ??\n    null;\n\nif (!actor) {\n    return ui.notifications.warn(\n        \"Replacer — Hex : sélectionnez le token du lanceur.\"\n    );\n}\n\nconst targets = Array.from(game.user.targets ?? []);\n\nif (targets.length !== 1) {\n    return ui.notifications.warn(\n        \"Replacer — Hex : ciblez exactement une nouvelle créature.\"\n    );\n}\n\nawait game.automatedMarks.moveHex({\n    actor,\n    target: targets[0]\n});",
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 1
    },
    "flags": {
      "automated-marks": {
        "action": "moveHex",
        "version": "1.0.4"
      }
    },
    "_stats": {
      "coreVersion": "12.343",
      "createdTime": 0,
      "modifiedTime": 0,
      "lastModifiedBy": null
    }
  },
  {
    "_id": "AMReplHunt6ed588",
    "name": "Replacer — Hunter's Mark",
    "type": "script",
    "img": "modules/automated-marks/assets/replacer-hunters-mark.svg",
    "command": "const actor =\n    canvas.tokens.controlled[0]?.actor ??\n    game.user.character ??\n    null;\n\nif (!actor) {\n    return ui.notifications.warn(\n        \"Replacer — Hunter's Mark : sélectionnez le token du lanceur.\"\n    );\n}\n\nconst targets = Array.from(game.user.targets ?? []);\n\nif (targets.length !== 1) {\n    return ui.notifications.warn(\n        \"Replacer — Hunter's Mark : ciblez exactement une nouvelle créature.\"\n    );\n}\n\nawait game.automatedMarks.moveHuntersMark({\n    actor,\n    target: targets[0]\n});",
    "folder": null,
    "sort": 0,
    "ownership": {
      "default": 1
    },
    "flags": {
      "automated-marks": {
        "action": "moveHuntersMark",
        "version": "1.0.4"
      }
    },
    "_stats": {
      "coreVersion": "12.343",
      "createdTime": 0,
      "modifiedTime": 0,
      "lastModifiedBy": null
    }
  }
];
function buildDamageBonusCommand({ effectFlag, targetFlag, damageType, label }) {
    return `const data = typeof args !== "undefined" ? args?.[0] : null;
if (!data) return {};

const currentWorkflow =
    data.workflow ??
    (
        data.uuid &&
        typeof MidiQOL?.Workflow?.getWorkflow === "function"
            ? MidiQOL.Workflow.getWorkflow(data.uuid)
            : null
    );

if (!currentWorkflow) return {};

let attackingActor =
    (typeof actor !== "undefined" ? actor : null) ??
    currentWorkflow.actor ??
    data.actor ??
    null;

if (!attackingActor && data.actorUuid) {
    const actorDocument = await fromUuid(data.actorUuid);
    attackingActor = actorDocument?.actor ?? actorDocument ?? null;
}
if (!attackingActor) return {};

const damageEffect = attackingActor.effects.find(effect =>
    effect.getFlag("${MODULE_ID}", "${effectFlag}") === true
);
if (!damageEffect) return {};

const markedTargetUuid = damageEffect.getFlag("${MODULE_ID}", "${targetFlag}");
if (!markedTargetUuid) return {};

const markedDocument = await fromUuid(markedTargetUuid);
if (!markedDocument) return {};

const markedTokenDocument =
    markedDocument.documentName === "Token"
        ? markedDocument
        : markedDocument.document?.documentName === "Token"
            ? markedDocument.document
            : null;
if (!markedTokenDocument) return {};

const markedActor = markedTokenDocument.actor ?? markedTokenDocument.object?.actor ?? null;
if (!markedActor) return {};

const markedTokenUuid = markedTokenDocument.uuid;
const markedActorUuid = markedActor.uuid;

const candidateMatchesMark = candidate => {
    if (!candidate) return false;
    if (typeof candidate === "string") {
        return candidate === markedTargetUuid ||
            candidate === markedTokenUuid ||
            candidate === markedActorUuid;
    }

    const candidateTokenUuid =
        candidate.document?.uuid ??
        candidate.token?.document?.uuid ??
        candidate.tokenUuid ??
        candidate.uuid ??
        null;
    const candidateActorUuid =
        candidate.actor?.uuid ??
        candidate.document?.actor?.uuid ??
        candidate.token?.actor?.uuid ??
        candidate.actorUuid ??
        null;

    return candidateTokenUuid === markedTargetUuid ||
        candidateTokenUuid === markedTokenUuid ||
        candidateActorUuid === markedActorUuid;
};

// Le bonus n'est proposé que si la créature marquée fait partie des cibles
// effectivement touchées par l'attaque.
const explicitHits = [];
for (const collection of [
    data.hitTargetUuids,
    data.hitTargets,
    currentWorkflow.hitTargetUuids,
    currentWorkflow.hitTargets
]) {
    if (!collection) continue;
    if (typeof collection === "string") explicitHits.push(collection);
    else if (collection instanceof Set || Array.isArray(collection)) {
        explicitHits.push(...Array.from(collection));
    } else explicitHits.push(collection);
}

let attackHitMarkedTarget = explicitHits.some(candidateMatchesMark);

// Midi-QOL 12 peut appeler le DamageBonusMacro avant d'avoir rempli hitTargets.
// On conserve donc le fallback déjà utilisé par le module : cible + total d'attaque + CA.
if (!attackHitMarkedTarget && explicitHits.length === 0) {
    const attackTotal = Number(
        data.attackTotal ??
        currentWorkflow.attackRoll?.total ??
        data.attackRoll?.total ??
        NaN
    );
    const d20 = Number(
        data.attackD20 ??
        data.diceRoll ??
        currentWorkflow.attackRoll?.dice?.[0]?.total ??
        NaN
    );
    const ac = Number(markedActor.system?.attributes?.ac?.value ?? NaN);
    const workflowTargets = Array.from(data.targets ?? currentWorkflow.targets ?? []);
    const markedWasTargeted = workflowTargets.some(candidateMatchesMark);

    if (markedWasTargeted && Number.isFinite(attackTotal) && Number.isFinite(ac)) {
        attackHitMarkedTarget =
            d20 === 20 ? true :
            d20 === 1 ? false :
            attackTotal >= ac;
    }
}

if (!attackHitMarkedTarget) return {};

const isCritical =
    data.isCritical === true ||
    data.critical === true ||
    currentWorkflow.isCritical === true ||
    currentWorkflow.critical === true ||
    currentWorkflow.attackRoll?.isCritical === true ||
    data.attackRoll?.isCritical === true;

// IMPORTANT : on renvoie le bonus à Midi-QOL au lieu de créer un
// DamageOnlyWorkflow séparé. Midi l'ajoute ainsi au jet de dégâts de l'attaque.
return {
    damageRoll: isCritical ? "2d6[${damageType}]" : "1d6[${damageType}]",
    flavor: isCritical ? "${label} — Dégâts critiques" : "${label} — Dégâts"
};`;
}

const HEX_DAMAGE_COMMAND = buildDamageBonusCommand({
    effectFlag: "hexDamageEffect",
    targetFlag: "hexTargetUuid",
    damageType: "necrotic",
    label: "Hex"
});

const HUNTERS_MARK_DAMAGE_COMMAND = buildDamageBonusCommand({
    effectFlag: "huntersMarkDamageEffect",
    targetFlag: "huntersMarkTargetUuid",
    damageType: "force",
    label: "Hunter's Mark"
});

const processedWorkflows = new Set();
const pendingSocketRequests = new Map();
let automatedMarksInternalDeletion = false;
let automatedMarksSubmenuOpen = false;

Hooks.once("ready", async () => {
    if (!game.modules.get("midi-qol")?.active) {
        ui.notifications.error("Automated Marks : Midi-QOL doit être activé.");
        return;
    }

    game.socket.on(SOCKET_NAME, handleAutomatedMarksSocket);

    if (game.user.isGM) {
        await repairAutomatedMarksContent();
        await migrateLegacyDamageBonusEffects();
    }

    Hooks.on("midi-qol.RollComplete", handleRollComplete);
    Hooks.on("dnd5e.preRollDamageV2", handleMarkedPreRollDamageV2);
    Hooks.on("midi-qol.postDamageRoll", handleMarkedPostDamageRoll);

    game.automatedMarks = {
        repair: repairAutomatedMarksContent,
        moveHex,
        moveHuntersMark,
        rebuild: rebuildPacks
    };

    console.log(`${MODULE_ID} | Version ${MODULE_VERSION} chargée.`);
});

async function migrateLegacyDamageBonusEffects() {
    // Jusqu'à la 1.0.4, l'effet de dégâts ajoutait flags.dnd5e.DamageBonusMacro.
    // Un Hex déjà actif au moment de la mise à jour conserve cette change et Midi-QOL
    // relance alors encore le d6 séparément, même si le d6 a déjà été injecté dans
    // le jet natif par preRollDamageV2. On retire uniquement cette ancienne change
    // des effets créés par Automated Marks.
    let cleaned = 0;

    const actors = new Map();
    for (const actor of game.actors ?? []) actors.set(actor.uuid, actor);
    for (const scene of game.scenes ?? []) {
        for (const token of scene.tokens ?? []) {
            const actor = token.actor;
            if (actor) actors.set(actor.uuid, actor);
        }
    }

    for (const actor of actors.values()) {
        for (const effect of actor.effects ?? []) {
            const isOurDamageEffect =
                effect.getFlag(MODULE_ID, "hexDamageEffect") === true ||
                effect.getFlag(MODULE_ID, "huntersMarkDamageEffect") === true;
            if (!isOurDamageEffect) continue;

            const changes = Array.from(effect.changes ?? []);
            const filtered = changes.filter(change =>
                change.key !== "flags.dnd5e.DamageBonusMacro"
            );
            if (filtered.length === changes.length) continue;

            await effect.update({ changes: filtered });
            cleaned += 1;
        }
    }

    if (cleaned) {
        console.log(`${MODULE_ID} | ${cleaned} ancien(s) DamageBonusMacro retiré(s) des marques actives.`);
    }
}

function primaryActiveGM() {
    return game.users
        .filter(user => user.active && user.isGM)
        .sort((a, b) => String(a.id).localeCompare(String(b.id)))[0] ?? null;
}

async function requestGMOperation(operation, payload) {
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
            pendingSocketRequests.delete(requestId);
            reject(new Error("Le MJ n'a pas répondu à la demande Automated Marks."));
        }, 10000);

        pendingSocketRequests.set(requestId, { resolve, reject, timeout });
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

async function handleAutomatedMarksSocket(message) {
    if (!message || typeof message !== "object") return;

    if (message.kind === "response" && message.recipientId === game.user.id) {
        const pending = pendingSocketRequests.get(message.requestId);
        if (!pending) return;

        clearTimeout(pending.timeout);
        pendingSocketRequests.delete(message.requestId);
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




Hooks.on("getSceneControlButtons", controls => {
    const tokenControls = Array.isArray(controls)
        ? controls.find(control => control.name === "token")
        : controls?.token;

    if (!tokenControls) return;

    const tools = Array.isArray(tokenControls.tools)
        ? tokenControls.tools
        : Object.values(tokenControls.tools ?? {});

    const filteredTools = tools.filter(tool =>
        ![
            "automated-marks",
            "automated-marks-spell",
            "automated-marks-script"
        ].includes(tool.name)
    );

    filteredTools.push(
        {
            name: "automated-marks",
            title: "Automated Marks",
            icon: "fas fa-crosshairs",
            button: true,
            visible: true,
            onClick: () => {
                automatedMarksSubmenuOpen = !automatedMarksSubmenuOpen;
                updateAutomatedMarksSubmenu();
            }
        },
        {
            name: "automated-marks-spell",
            title: "Sort : Placer une marque",
            icon: "fas fa-book-sparkles",
            button: true,
            visible: true,
            onClick: async () => {
                await repairAutomatedMarksContent();

                const pack = game.packs.get(SPELL_PACK_COLLECTION);

                if (!pack) {
                    return ui.notifications.warn(
                        "Automated Marks — Spell est introuvable."
                    );
                }

                await pack.getIndex({
                    fields: ["name", "type", "img"]
                });

                pack.render(true);
            }
        },
        {
            name: "automated-marks-script",
            title: "Script : Modifier la cible marquée",
            icon: "fas fa-code",
            button: true,
            visible: true,
            onClick: async () => {
                await repairAutomatedMarksContent();

                const pack = game.packs.get(SCRIPT_PACK_COLLECTION);

                if (!pack) {
                    return ui.notifications.warn(
                        "Automated Marks — Script est introuvable."
                    );
                }

                await pack.getIndex({
                    fields: ["name", "type", "img"]
                });

                pack.render(true);
            }
        }
    );

    if (Array.isArray(tokenControls.tools)) {
        tokenControls.tools = filteredTools;
    } else {
        tokenControls.tools = Object.fromEntries(
            filteredTools.map(tool => [tool.name, tool])
        );
    }
});

Hooks.on("renderSceneControls", () => {
    setTimeout(updateAutomatedMarksSubmenu, 0);
});

function updateAutomatedMarksSubmenu() {
    const controls = document.querySelector("#controls");
    if (!controls) return;

    const spellButton = controls.querySelector(
        '[data-tool="automated-marks-spell"]'
    );

    const scriptButton = controls.querySelector(
        '[data-tool="automated-marks-script"]'
    );

    const mainButton = controls.querySelector(
        '[data-tool="automated-marks"]'
    );

    const submenuButtons = [spellButton, scriptButton];

    for (const button of submenuButtons) {
        if (!button) continue;

        const controlElement =
            button.closest("li") ??
            button.closest(".control-tool") ??
            button;

        controlElement.style.setProperty(
            "display",
            automatedMarksSubmenuOpen ? "" : "none",
            "important"
        );

        controlElement.style.setProperty(
            "position",
            "relative",
            "important"
        );

        controlElement.style.setProperty(
            "left",
            "22px",
            "important"
        );

        controlElement.style.setProperty(
            "margin-right",
            "-22px",
            "important"
        );

        controlElement.classList.add(
            "automated-marks-submenu-entry"
        );
    }

    if (mainButton) {
        const mainControl =
            mainButton.closest("li") ??
            mainButton.closest(".control-tool") ??
            mainButton;

        mainControl.classList.toggle(
            "active",
            automatedMarksSubmenuOpen
        );
    }
}

Hooks.on("preDeleteMacro", (macro, options, userId) => {
    if (automatedMarksInternalDeletion) return true;

    const protectedScript =
        macro.pack === SCRIPT_PACK_COLLECTION &&
        macro.getFlag(MODULE_ID, "version") === MODULE_VERSION &&
        ["moveHex", "moveHuntersMark"].includes(
            macro.getFlag(MODULE_ID, "action")
        );

    if (!protectedScript) return true;

    ui.notifications.warn(
        `${macro.name} est protégé par Automated Marks et ne peut pas être supprimé.`
    );

    return false;
});

async function getSpellSourcesWithOriginalDescriptions() {
    const sources = foundry.utils.deepClone(SPELL_SOURCES);

    for (const source of sources) {
        const identifier = String(source.system?.identifier ?? "").toLowerCase();
        const name = String(source.name ?? "").trim().toLowerCase();
        let original = null;

        // Priorité aux sorts D&D5e déjà présents dans le monde.
        original = game.items.find(item =>
            item.type === "spell" &&
            item.id !== source._id &&
            (
                String(item.system?.identifier ?? "").toLowerCase() === identifier ||
                String(item.name ?? "").trim().toLowerCase() === name
            ) &&
            !item.getFlag(MODULE_ID, "action")
        ) ?? null;

        // Sinon, récupération depuis les compendiums D&D5e disponibles.
        if (!original) {
            const packs = game.packs.filter(pack =>
                pack.documentName === "Item" &&
                (
                    pack.metadata?.packageName === "dnd5e" ||
                    String(pack.collection ?? "").startsWith("dnd5e.")
                )
            );

            for (const pack of packs) {
                try {
                    const index = await pack.getIndex({
                        fields: ["name", "type", "system.identifier"]
                    });
                    const entry = index.find(document =>
                        document.type === "spell" &&
                        (
                            String(document.system?.identifier ?? "").toLowerCase() === identifier ||
                            String(document.name ?? "").trim().toLowerCase() === name
                        )
                    );
                    if (!entry) continue;

                    original = await pack.getDocument(entry._id);
                    if (original) break;
                } catch (error) {
                    console.warn(`${MODULE_ID} | Lecture impossible du compendium ${pack.collection}`, error);
                }
            }
        }

        const originalDescription = original?.system?.description;
        if (originalDescription?.value) {
            source.system.description = foundry.utils.deepClone(originalDescription);
            console.log(`${MODULE_ID} | Description originale récupérée pour ${source.name}.`);
        } else {
            console.warn(`${MODULE_ID} | Description originale introuvable pour ${source.name}; description Automated Marks conservée.`);
        }
    }

    return sources;
}

async function repairAutomatedMarksContent() {
    if (!game.user.isGM) return;

    const spellSources = await getSpellSourcesWithOriginalDescriptions();

    await ensureDocumentPack({
        collection: SPELL_PACK_COLLECTION,
        name: SPELL_PACK_NAME,
        label: "Automated Marks — Spell",
        type: "Item",
        documentClass: Item,
        sources: spellSources
    });

    await ensureDocumentPack({
        collection: SCRIPT_PACK_COLLECTION,
        name: SCRIPT_PACK_NAME,
        label: "Automated Marks — Script",
        type: "Macro",
        documentClass: Macro,
        sources: SCRIPT_SOURCES
    });
}

async function ensureTechnicalMacro(name, img, command) {
    let macro = game.macros.getName(name);

    if (!macro) {
        macro = await Macro.create({
            name,
            type: "script",
            img,
            command,
            ownership: { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.LIMITED }
        });
    } else {
        await macro.update({
            type: "script",
            img,
            command,
            ownership: { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.LIMITED }
        });
    }

    return macro;
}

async function ensureDocumentPack({
    collection,
    name,
    label,
    type,
    documentClass,
    sources
}) {
    let pack = game.packs.get(collection);

    if (!pack) {
        pack = await CompendiumCollection.createCompendium({
            label,
            name,
            type,
            package: "world"
        });
    }

    const existing = await pack.getDocuments();

    for (const source of sources) {
        const current = existing.find(document =>
            document.id === source._id ||
            document.name === source.name
        );

        if (!current) {
            await documentClass.createDocuments(
                [foundry.utils.deepClone(source)],
                { pack: pack.collection, keepId: true }
            );
            continue;
        }

        const update = foundry.utils.deepClone(source);
        update._id = current.id;

        await documentClass.updateDocuments(
            [update],
            { pack: pack.collection }
        );
    }

    await pack.getIndex({ fields: ["name", "type", "img"] });
    return pack;
}

async function rebuildPacks() {
    if (!game.user.isGM) {
        return ui.notifications.warn("Seul le MJ peut reconstruire les compendiums.");
    }

    const spellSources = await getSpellSourcesWithOriginalDescriptions();

    for (const collection of [SPELL_PACK_COLLECTION, SCRIPT_PACK_COLLECTION]) {
        const pack = game.packs.get(collection);
        if (!pack) continue;

        const documents = await pack.getDocuments();
        if (!documents.length) continue;

        const cls = pack.documentName === "Macro" ? Macro : Item;
        automatedMarksInternalDeletion = true;

        try {
            await cls.deleteDocuments(
                documents.map(document => document.id),
                { pack: pack.collection }
            );
        } finally {
            automatedMarksInternalDeletion = false;
        }
    }

    await ensureDocumentPack({
        collection: SPELL_PACK_COLLECTION,
        name: SPELL_PACK_NAME,
        label: "Automated Marks — Spell",
        type: "Item",
        documentClass: Item,
        sources: spellSources
    });

    await ensureDocumentPack({
        collection: SCRIPT_PACK_COLLECTION,
        name: SCRIPT_PACK_NAME,
        label: "Automated Marks — Script",
        type: "Macro",
        documentClass: Macro,
        sources: SCRIPT_SOURCES
    });

    ui.notifications.info("Automated Marks : compendiums reconstruits.");
}

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

function handleMarkedPreRollDamageV2(config, dialog, message) {
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

async function handleMarkedPostDamageRoll(workflow) {
    // 1.0.6 : conservé comme garde de compatibilité, mais le bonus est désormais
    // injecté avant le jet via dnd5e.preRollDamageV2.
    return;
    try {
        if (!workflow?.actor || !workflow?.damageRoll) return;

        // Hex et Hunter's Mark ne s'appliquent qu'à une attaque qui a effectivement
        // touché la créature marquée. Les dégâts sont injectés dans le DamageRoll
        // principal afin que Midi-QOL ne crée qu'une seule application de dégâts.
        const hitTargets = Array.from(workflow.hitTargets ?? []);
        if (!hitTargets.length) return;

        const matchesMarkedTarget = (effect, targetFlag) => {
            const markedUuid = effect?.getFlag(MODULE_ID, targetFlag);
            if (!markedUuid) return false;
            return hitTargets.some(target => {
                const doc = normalizeTokenDocument(target);
                return doc?.uuid === markedUuid || doc?.actor?.uuid === markedUuid;
            });
        };

        let bonusFormula = null;
        let bonusType = null;

        const hexEffect = workflow.actor.effects.find(effect =>
            effect.getFlag(MODULE_ID, "hexDamageEffect") === true
        );
        if (hexEffect && matchesMarkedTarget(hexEffect, "hexTargetUuid")) {
            bonusFormula = workflow.isCritical ? "2d6" : "1d6";
            bonusType = "necrotic";
        }

        const huntersEffect = workflow.actor.effects.find(effect =>
            effect.getFlag(MODULE_ID, "huntersMarkDamageEffect") === true
        );
        if (!bonusFormula && huntersEffect && matchesMarkedTarget(huntersEffect, "huntersMarkTargetUuid")) {
            bonusFormula = workflow.isCritical ? "2d6" : "1d6";
            bonusType = "force";
        }

        if (!bonusFormula || !bonusType) return;

        // Protection contre un éventuel double passage du hook sur le même workflow.
        const marker = `${MODULE_ID}.markDamageMerged`;
        if (foundry.utils.getProperty(workflow, marker)) return;
        foundry.utils.setProperty(workflow, marker, true);

        const originalFormula = workflow.damageRoll.formula;
        const mergedFormula = `(${originalFormula}) + ${bonusFormula}[${bonusType}]`;
        const rollData = workflow.actor.getRollData?.() ?? {};
        const mergedRoll = await new Roll(mergedFormula, rollData).evaluate();

        if (typeof workflow.setDamageRoll === "function") {
            await workflow.setDamageRoll(mergedRoll);
        } else {
            workflow.damageRoll = mergedRoll;
            workflow.damageTotal = mergedRoll.total;
            workflow.damageRollHTML = await mergedRoll.render();
        }

        console.debug(
            `${MODULE_ID} | Dégâts de marque fusionnés au jet principal : ${mergedFormula}`
        );
    } catch (error) {
        console.error(`${MODULE_ID} | Impossible de fusionner les dégâts de marque`, error);
    }
}

async function handleRollComplete(workflow) {
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
        if (processedWorkflows.has(key)) return;

        processedWorkflows.add(key);
        setTimeout(() => processedWorkflows.delete(key), 15000);

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

async function moveHex({ actor, target }) {
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

async function moveHuntersMark({ actor, target }) {
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
