# Architecture — Automated Marks

Le point d'entrée `scripts/main.js` ne contient que l'initialisation du module et l'enregistrement des hooks globaux.

- `scripts/core/constants.js` — identifiants et constantes partagés.
- `scripts/core/state.js` — état runtime mutable centralisé.
- `scripts/data/sources.js` — définitions des sorts et macros distribués par le module.
- `scripts/services/marks.js` — logique métier Hex / Hunter's Mark et intégration des dégâts.
- `scripts/services/socket.js` — opérations nécessitant les droits MJ et protocole socket.
- `scripts/services/content.js` — création, réparation et reconstruction des compendiums.
- `scripts/services/migrations.js` — migrations des données issues des anciennes versions.
- `scripts/ui/scene-controls.js` — boutons et sous-menu des contrôles de scène.

## Principes

1. `module.json` est la source unique du numéro de version du module.
2. Les services ne dépendent pas de l'UI.
3. Les opérations privilégiées passent par `socket.js` et sont validées côté MJ.
4. L'état mutable partagé est explicite dans `state.js` plutôt que dispersé en variables globales.
5. `game.automatedMarks` reste l'API publique stable pour les macros et intégrations externes.
6. Le code historique inutilisé doit être supprimé plutôt que conservé derrière un `return` définitif.
