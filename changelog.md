# 1.0.7

- Supprime automatiquement l’ancien `flags.dnd5e.DamageBonusMacro` des effets Hex/Hunter’s Mark déjà actifs créés par les versions <= 1.0.4.
- Empêche ainsi le d6 de marque d’être relancé séparément après son intégration au jet de dégâts principal.
- Le d6 reste inclus dans le bloc DAMAGE principal avec son type de dégâts propre et un seul APPLY.

# 1.0.6

- Hex et Hunter's Mark sont injectés dans la configuration native du jet de dégâts dnd5e avant sa création.
- Le bonus typé fait désormais partie du même message de dégâts et doit produire un seul bloc Apply.
- L'ancien traitement postDamageRoll est désactivé pour éviter un second jet.

# Changelog

## [1.0.3] - 2026-09-25

### Changed
- Les sorts générés récupèrent désormais la description originale de Hex et Hunter's Mark depuis les contenus D&D5e disponibles, avec conservation de la description Automated Marks si aucune source originale n'est trouvée.
- Les dégâts supplémentaires de Hex et Hunter's Mark ne sont lancés qu'après le déclenchement des dégâts de l'attaque principale et uniquement si l'attaque a réellement touché la cible marquée.

## [1.0.2] - 2026-08-10

### Changed
- Toutes les catégories d'utilisateurs peuvent désormais exécuter les macros Automated Marks.
- La création et la suppression des effets de marque sur une cible non possédée sont exécutées par le MJ actif via le canal sécurisé du module.
