import { MODULE_ID, SOCKET_NAME } from "./core/constants.js";
import { handleAutomatedMarksSocket } from "./services/socket.js";
import { repairAutomatedMarksContent, rebuildPacks } from "./services/content.js";
import { migrateLegacyDamageBonusEffects } from "./services/migrations.js";
import { handleMarkedPreRollDamageV2, handleRollComplete, moveHex, moveHuntersMark } from "./services/marks.js";
import { registerSceneControls } from "./ui/scene-controls.js";

registerSceneControls();

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

  // Stable public API for macros and external integrations.
  game.automatedMarks = {
    repair: repairAutomatedMarksContent,
    moveHex,
    moveHuntersMark,
    rebuild: rebuildPacks
  };

  const version = game.modules.get(MODULE_ID)?.version ?? "unknown";
  console.log(`${MODULE_ID} | Version ${version} chargée.`);
});
