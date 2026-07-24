const MODULE_ID = "automated-marks";
const MODULE_VERSION = "1.0.1";

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
        "version": "1.0.0"
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
        "version": "1.0.0"
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
      "default": 0
    },
    "flags": {
      "automated-marks": {
        "action": "moveHex",
        "version": "1.0.0"
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
      "default": 0
    },
    "flags": {
      "automated-marks": {
        "action": "moveHuntersMark",
        "version": "1.0.0"
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
const HEX_DAMAGE_COMMAND = "const data = typeof args !== \"undefined\" ? args?.[0] : null;\nif (!data) return {};\n\nconst currentWorkflow =\n    data.workflow ??\n    (\n        data.uuid &&\n        typeof MidiQOL?.Workflow?.getWorkflow === \"function\"\n            ? MidiQOL.Workflow.getWorkflow(data.uuid)\n            : null\n    );\n\nif (!currentWorkflow) return {};\n\nlet attackingActor =\n    (typeof actor !== \"undefined\" ? actor : null) ??\n    currentWorkflow.actor ??\n    data.actor ??\n    null;\n\nif (!attackingActor && data.actorUuid) {\n    const actorDocument = await fromUuid(data.actorUuid);\n    attackingActor = actorDocument?.actor ?? actorDocument ?? null;\n}\n\nif (!attackingActor) return {};\n\nconst damageEffect = attackingActor.effects.find(effect =>\n    effect.getFlag(\"automated-marks\", \"hexDamageEffect\") === true\n);\n\nif (!damageEffect) return {};\n\nconst markedTargetUuid =\n    damageEffect.getFlag(\"automated-marks\", \"hexTargetUuid\");\n\nif (!markedTargetUuid) return {};\n\nconst markedDocument = await fromUuid(markedTargetUuid);\nif (!markedDocument) return {};\n\nconst markedTokenDocument =\n    markedDocument.documentName === \"Token\"\n        ? markedDocument\n        : markedDocument.document?.documentName === \"Token\"\n            ? markedDocument.document\n            : null;\n\nif (!markedTokenDocument) return {};\n\nconst markedToken =\n    markedTokenDocument.object ??\n    canvas.tokens.get(markedTokenDocument.id) ??\n    null;\n\nconst markedActor =\n    markedTokenDocument.actor ??\n    markedToken?.actor ??\n    null;\n\nif (!markedToken || !markedActor) return {};\n\nconst markedTokenUuid = markedTokenDocument.uuid;\nconst markedActorUuid = markedActor.uuid;\nconst targetCandidates = [];\n\nconst addTargets = collection => {\n    if (!collection) return;\n    if (typeof collection === \"string\") {\n        targetCandidates.push(collection);\n        return;\n    }\n    if (collection instanceof Set || Array.isArray(collection)) {\n        targetCandidates.push(...Array.from(collection));\n        return;\n    }\n    targetCandidates.push(collection);\n};\n\naddTargets(data.hitTargetUuids);\naddTargets(data.hitTargets);\naddTargets(data.targetUuids);\naddTargets(data.targets);\naddTargets(currentWorkflow.hitTargetUuids);\naddTargets(currentWorkflow.hitTargets);\naddTargets(currentWorkflow.targets);\n\nif (targetCandidates.length === 0) return {};\n\nconst targetMatchesMark = targetCandidates.some(candidate => {\n    if (!candidate) return false;\n\n    if (typeof candidate === \"string\") {\n        return (\n            candidate === markedTargetUuid ||\n            candidate === markedTokenUuid ||\n            candidate === markedActorUuid\n        );\n    }\n\n    const candidateTokenUuid =\n        candidate.document?.uuid ??\n        candidate.token?.document?.uuid ??\n        candidate.tokenUuid ??\n        candidate.uuid ??\n        null;\n\n    const candidateActorUuid =\n        candidate.actor?.uuid ??\n        candidate.document?.actor?.uuid ??\n        candidate.token?.actor?.uuid ??\n        candidate.actorUuid ??\n        null;\n\n    return (\n        candidateTokenUuid === markedTargetUuid ||\n        candidateTokenUuid === markedTokenUuid ||\n        candidateActorUuid === markedActorUuid\n    );\n});\n\nif (!targetMatchesMark) return {};\n\nconst isCritical =\n    data.isCritical === true ||\n    data.critical === true ||\n    currentWorkflow.isCritical === true ||\n    currentWorkflow.critical === true ||\n    currentWorkflow.attackRoll?.isCritical === true ||\n    data.attackRoll?.isCritical === true;\n\nconst damageFormula =\n    isCritical\n        ? \"2d6[necrotic]\"\n        : \"1d6[necrotic]\";\n\nconst flavor =\n    isCritical\n        ? \"Hex — Dégâts critiques\"\n        : \"Hex — Dégâts\";\n\nconst attackingToken =\n    currentWorkflow.token ??\n    currentWorkflow.tokenDocument?.object ??\n    canvas.tokens.placeables.find(token =>\n        token.actor?.uuid === attackingActor.uuid\n    ) ??\n    null;\n\nif (!attackingToken) return {};\n\nconst actorUuid = attackingActor.uuid;\nconst markedTokenUuidForDelay = markedTokenDocument.uuid;\nconst attackingTokenId = attackingToken.id;\n\nsetTimeout(async () => {\n    try {\n        const delayedActor = await fromUuid(actorUuid);\n        const delayedMarkedTokenDocument =\n            await fromUuid(markedTokenUuidForDelay);\n\n        if (!delayedActor || !delayedMarkedTokenDocument) return;\n\n        const delayedMarkedToken =\n            delayedMarkedTokenDocument.object ??\n            canvas.tokens.get(delayedMarkedTokenDocument.id) ??\n            null;\n\n        const delayedAttackingToken =\n            canvas.tokens.get(attackingTokenId) ??\n            canvas.tokens.placeables.find(token =>\n                token.actor?.uuid === delayedActor.uuid\n            ) ??\n            null;\n\n        if (!delayedMarkedToken || !delayedAttackingToken) return;\n\n        const damageRoll =\n            await new CONFIG.Dice.DamageRoll(\n                damageFormula,\n                delayedActor.getRollData()\n            ).evaluate({ async: true });\n\n        await new MidiQOL.DamageOnlyWorkflow(\n            delayedActor,\n            delayedAttackingToken,\n            damageRoll.total,\n            \"necrotic\",\n            [delayedMarkedToken],\n            damageRoll,\n            { flavor, itemCardId: null }\n        );\n    } catch (error) {\n        console.error(\"Automated Marks | Hex damage error\", error);\n        ui.notifications.error(\n            \"Hex : impossible de lancer les dégâts supplémentaires.\"\n        );\n    }\n}, 500);\n\nreturn {};";
const HUNTERS_MARK_DAMAGE_COMMAND = "const data = typeof args !== \"undefined\" ? args?.[0] : null;\nif (!data) return {};\n\nconst currentWorkflow =\n    data.workflow ??\n    (\n        data.uuid &&\n        typeof MidiQOL?.Workflow?.getWorkflow === \"function\"\n            ? MidiQOL.Workflow.getWorkflow(data.uuid)\n            : null\n    );\n\nif (!currentWorkflow) return {};\n\nlet attackingActor =\n    (typeof actor !== \"undefined\" ? actor : null) ??\n    currentWorkflow.actor ??\n    data.actor ??\n    null;\n\nif (!attackingActor && data.actorUuid) {\n    const actorDocument = await fromUuid(data.actorUuid);\n    attackingActor = actorDocument?.actor ?? actorDocument ?? null;\n}\n\nif (!attackingActor) return {};\n\nconst damageEffect = attackingActor.effects.find(effect =>\n    effect.getFlag(\"automated-marks\", \"huntersMarkDamageEffect\") === true\n);\n\nif (!damageEffect) return {};\n\nconst markedTargetUuid =\n    damageEffect.getFlag(\"automated-marks\", \"huntersMarkTargetUuid\");\n\nif (!markedTargetUuid) return {};\n\nconst markedDocument = await fromUuid(markedTargetUuid);\nif (!markedDocument) return {};\n\nconst markedTokenDocument =\n    markedDocument.documentName === \"Token\"\n        ? markedDocument\n        : markedDocument.document?.documentName === \"Token\"\n            ? markedDocument.document\n            : null;\n\nif (!markedTokenDocument) return {};\n\nconst markedToken =\n    markedTokenDocument.object ??\n    canvas.tokens.get(markedTokenDocument.id) ??\n    null;\n\nconst markedActor =\n    markedTokenDocument.actor ??\n    markedToken?.actor ??\n    null;\n\nif (!markedToken || !markedActor) return {};\n\nconst markedTokenUuid = markedTokenDocument.uuid;\nconst markedActorUuid = markedActor.uuid;\nconst targetCandidates = [];\n\nconst addTargets = collection => {\n    if (!collection) return;\n    if (typeof collection === \"string\") {\n        targetCandidates.push(collection);\n        return;\n    }\n    if (collection instanceof Set || Array.isArray(collection)) {\n        targetCandidates.push(...Array.from(collection));\n        return;\n    }\n    targetCandidates.push(collection);\n};\n\naddTargets(data.hitTargetUuids);\naddTargets(data.hitTargets);\naddTargets(data.targetUuids);\naddTargets(data.targets);\naddTargets(currentWorkflow.hitTargetUuids);\naddTargets(currentWorkflow.hitTargets);\naddTargets(currentWorkflow.targets);\n\nif (targetCandidates.length === 0) return {};\n\nconst targetMatchesMark = targetCandidates.some(candidate => {\n    if (!candidate) return false;\n\n    if (typeof candidate === \"string\") {\n        return (\n            candidate === markedTargetUuid ||\n            candidate === markedTokenUuid ||\n            candidate === markedActorUuid\n        );\n    }\n\n    const candidateTokenUuid =\n        candidate.document?.uuid ??\n        candidate.token?.document?.uuid ??\n        candidate.tokenUuid ??\n        candidate.uuid ??\n        null;\n\n    const candidateActorUuid =\n        candidate.actor?.uuid ??\n        candidate.document?.actor?.uuid ??\n        candidate.token?.actor?.uuid ??\n        candidate.actorUuid ??\n        null;\n\n    return (\n        candidateTokenUuid === markedTargetUuid ||\n        candidateTokenUuid === markedTokenUuid ||\n        candidateActorUuid === markedActorUuid\n    );\n});\n\nif (!targetMatchesMark) return {};\n\nconst isCritical =\n    data.isCritical === true ||\n    data.critical === true ||\n    currentWorkflow.isCritical === true ||\n    currentWorkflow.critical === true ||\n    currentWorkflow.attackRoll?.isCritical === true ||\n    data.attackRoll?.isCritical === true;\n\nconst damageFormula =\n    isCritical\n        ? \"2d6[force]\"\n        : \"1d6[force]\";\n\nconst flavor =\n    isCritical\n        ? \"Hunter's Mark — Dégâts critiques\"\n        : \"Hunter's Mark — Dégâts\";\n\nconst attackingToken =\n    currentWorkflow.token ??\n    currentWorkflow.tokenDocument?.object ??\n    canvas.tokens.placeables.find(token =>\n        token.actor?.uuid === attackingActor.uuid\n    ) ??\n    null;\n\nif (!attackingToken) return {};\n\nconst actorUuid = attackingActor.uuid;\nconst markedTokenUuidForDelay = markedTokenDocument.uuid;\nconst attackingTokenId = attackingToken.id;\n\nsetTimeout(async () => {\n    try {\n        const delayedActor = await fromUuid(actorUuid);\n        const delayedMarkedTokenDocument =\n            await fromUuid(markedTokenUuidForDelay);\n\n        if (!delayedActor || !delayedMarkedTokenDocument) return;\n\n        const delayedMarkedToken =\n            delayedMarkedTokenDocument.object ??\n            canvas.tokens.get(delayedMarkedTokenDocument.id) ??\n            null;\n\n        const delayedAttackingToken =\n            canvas.tokens.get(attackingTokenId) ??\n            canvas.tokens.placeables.find(token =>\n                token.actor?.uuid === delayedActor.uuid\n            ) ??\n            null;\n\n        if (!delayedMarkedToken || !delayedAttackingToken) return;\n\n        const damageRoll =\n            await new CONFIG.Dice.DamageRoll(\n                damageFormula,\n                delayedActor.getRollData()\n            ).evaluate({ async: true });\n\n        await new MidiQOL.DamageOnlyWorkflow(\n            delayedActor,\n            delayedAttackingToken,\n            damageRoll.total,\n            \"force\",\n            [delayedMarkedToken],\n            damageRoll,\n            { flavor, itemCardId: null }\n        );\n    } catch (error) {\n        console.error(\"Automated Marks | Hunter's Mark damage error\", error);\n        ui.notifications.error(\n            \"Hunter's Mark : impossible de lancer les dégâts supplémentaires.\"\n        );\n    }\n}, 500);\n\nreturn {};";

const processedWorkflows = new Set();
let automatedMarksInternalDeletion = false;
let automatedMarksSubmenuOpen = false;

Hooks.once("ready", async () => {
    if (!game.modules.get("midi-qol")?.active) {
        ui.notifications.error("Automated Marks : Midi-QOL doit être activé.");
        return;
    }

    if (game.user.isGM) {
        await repairAutomatedMarksContent();
    }

    Hooks.on("midi-qol.RollComplete", handleRollComplete);

    game.automatedMarks = {
        repair: repairAutomatedMarksContent,
        moveHex,
        moveHuntersMark,
        rebuild: rebuildPacks
    };

    console.log(`${MODULE_ID} | Version ${MODULE_VERSION} chargée.`);
});




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

async function repairAutomatedMarksContent() {
    if (!game.user.isGM) return;

    await ensureTechnicalMacro(
        HEX_DAMAGE_MACRO_NAME,
        HEX_ICON,
        HEX_DAMAGE_COMMAND
    );

    await ensureTechnicalMacro(
        HUNTERS_MARK_DAMAGE_MACRO_NAME,
        HUNTERS_MARK_ICON,
        HUNTERS_MARK_DAMAGE_COMMAND
    );

    await ensureDocumentPack({
        collection: SPELL_PACK_COLLECTION,
        name: SPELL_PACK_NAME,
        label: "Automated Marks — Spell",
        type: "Item",
        documentClass: Item,
        sources: SPELL_SOURCES
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
            ownership: { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.NONE }
        });
    } else {
        await macro.update({ type: "script", img, command });
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
        sources: SPELL_SOURCES
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

    const [targetEffect] = await targetActor.createEmbeddedDocuments(
        "ActiveEffect",
        [{
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
        }]
    );

    const [damageEffect] = await actor.createEmbeddedDocuments(
        "ActiveEffect",
        [{
            name: "Hex — Dégâts supplémentaires",
            img: null,
            origin: item.uuid,
            disabled: false,
            duration,
            changes: [{
                key: "flags.dnd5e.DamageBonusMacro",
                mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
                value: HEX_DAMAGE_MACRO_NAME,
                priority: 20
            }],
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

    const [targetEffect] = await targetActor.createEmbeddedDocuments(
        "ActiveEffect",
        [{
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
        }]
    );

    const [damageEffect] = await actor.createEmbeddedDocuments(
        "ActiveEffect",
        [{
            name: "Hunter's Mark — Dégâts supplémentaires",
            img: null,
            origin: item.uuid,
            disabled: false,
            duration,
            changes: [{
                key: "flags.dnd5e.DamageBonusMacro",
                mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
                value: HUNTERS_MARK_DAMAGE_MACRO_NAME,
                priority: 20
            }],
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

    const [targetEffect] = await newTargetActor.createEmbeddedDocuments(
        "ActiveEffect",
        [{
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
        }]
    );

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

        await checkedActor.deleteEmbeddedDocuments(
            "ActiveEffect",
            effects.map(effect => effect.id)
        );
    }
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
