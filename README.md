# Automated Marks 1.0.0

## Organisation

Le bouton `Automated Marks`, situé dans `Token Controls`, ouvre deux catégories :

### Spell

- `Hex`
- `Hunter's Mark`

Ces deux sorts remplacent complètement les versions originales sur la fiche du personnage.

### Script

- `Replacer — Hex`
- `Replacer — Hunter's Mark`

Les scripts peuvent être glissés dans la barre de macros.

## Icônes

- Hex : `icons/magic/perception/silhouette-stealth-shadow.webp`
- Hunter's Mark : `icons/magic/perception/eye-ringed-glow-angry-small-red.webp`
- Replacer — Hex : `modules/automated-marks/assets/replacer-hex.svg`
- Replacer — Hunter's Mark : `modules/automated-marks/assets/replacer-hunters-mark.svg`

Les deux icônes de remplacement sont incluses directement dans le module.

## Utilisation des scripts

1. Contrôler le token du lanceur.
2. Cibler une nouvelle créature.
3. Exécuter le script depuis la barre de macros.

`Replacer — Hex` demande la nouvelle caractéristique affectée.

## Réparation automatique

À chaque clic sur le bouton `Automated Marks`, le module vérifie :

- le compendium `Spell` ;
- les sorts `Hex` et `Hunter's Mark` ;
- le compendium `Script` ;
- les scripts `Replacer — Hex` et `Replacer — Hunter's Mark` ;
- les deux macros techniques de dégâts.

Tout élément manquant est recréé automatiquement avant l'ouverture du menu.

## Protection contre la suppression

Les deux scripts de remplacement présents dans le compendium `Automated Marks — Script`
sont protégés. Une tentative de suppression manuelle est annulée avec une notification.

La reconstruction interne du module reste autorisée.

## Sous-menu latéral

`Automated Marks` est désormais un groupe d’outils dans la barre latérale Foundry.

Il contient :

- `Sort : Placer une marque`
- `Script : Modifier la cible marquée`

Chaque entrée vérifie et recrée les contenus manquants, puis ouvre directement
le compendium correspondant. La fenêtre intermédiaire a été supprimée.

## Correction des erreurs de validation

Tous les identifiants de documents intégrés utilisent désormais exactement
16 caractères alphanumériques.

## Correction Token Controls

Le bouton `Automated Marks` est replacé dans le groupe `Token Controls`.

Au premier clic, deux boutons supplémentaires apparaissent dans le même groupe :

- `Sort : Placer une marque`
- `Script : Modifier la cible marquée`

Un second clic referme ce sous-menu. Les deux boutons ouvrent directement leur compendium.

## Correction du sous-menu Token Controls

Les deux sous-boutons sont maintenant enregistrés en permanence dans `Token Controls`,
puis masqués ou affichés directement dans l’interface avec le DOM de Foundry V12.

Ce fonctionnement ne dépend plus d’un nouveau rendu complet de `SceneControls`.

## Indentation du sous-menu

Les deux sous-boutons sont décalés vers la droite et reliés par une barre verticale.

## Icônes des effets du lanceur

Les effets actifs de dégâts supplémentaires affichent désormais :

- l’icône de `Hex` pour `Hex — Dégâts supplémentaires` ;
- l’icône de `Hunter's Mark` pour `Hunter's Mark — Dégâts supplémentaires`.

## Durée de concentration selon l’emplacement

La durée de l’effet de concentration du lanceur est maintenant synchronisée
avec le niveau de l’emplacement utilisé :

- niveaux 1–2 : 1 heure ;
- niveaux 3–4 : 8 heures ;
- niveaux 5–9 : 24 heures.

Cette correction s’applique à `Hex` et à `Hunter's Mark`.
