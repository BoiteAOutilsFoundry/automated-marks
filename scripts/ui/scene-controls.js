import { MODULE_ID, SCRIPT_PACK_COLLECTION, SPELL_PACK_COLLECTION } from "../core/constants.js";
import { state } from "../core/state.js";
import { repairAutomatedMarksContent } from "../services/content.js";

export function registerSceneControls() {
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
                state.submenuOpen = !state.submenuOpen;
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
            state.submenuOpen ? "" : "none",
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
            state.submenuOpen
        );
    }
}

Hooks.on("preDeleteMacro", (macro, options, userId) => {
    if (state.internalDeletion) return true;

    const protectedScript =
        macro.pack === SCRIPT_PACK_COLLECTION &&
        ["moveHex", "moveHuntersMark"].includes(
            macro.getFlag(MODULE_ID, "action")
        );

    if (!protectedScript) return true;

    ui.notifications.warn(
        `${macro.name} est protégé par Automated Marks et ne peut pas être supprimé.`
    );

    return false;
});


}
