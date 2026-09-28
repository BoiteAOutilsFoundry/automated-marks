import { MODULE_ID, SPELL_PACK_COLLECTION, SPELL_PACK_NAME, SCRIPT_PACK_COLLECTION, SCRIPT_PACK_NAME } from "../core/constants.js";
import { state } from "../core/state.js";
import { SPELL_SOURCES, SCRIPT_SOURCES } from "../data/sources.js";

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

export async function repairAutomatedMarksContent() {
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

export async function rebuildPacks() {
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
        state.internalDeletion = true;

        try {
            await cls.deleteDocuments(
                documents.map(document => document.id),
                { pack: pack.collection }
            );
        } finally {
            state.internalDeletion = false;
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

