import { MODULE_ID } from "../core/constants.js";

export async function migrateLegacyDamageBonusEffects() {
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

