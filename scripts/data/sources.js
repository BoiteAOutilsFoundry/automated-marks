import { MODULE_ID } from "../core/constants.js";

export const SPELL_SOURCES = [
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
      }
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
      }
    }
  }
];
export const SCRIPT_SOURCES = [
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
      }
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
      }
    }
  }
];
