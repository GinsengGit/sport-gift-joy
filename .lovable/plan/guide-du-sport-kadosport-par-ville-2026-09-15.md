# Guide du sport Kadosport par ville

## Objectif
Transformer le listing actuel en un guide du sport organisé par ville, tout en conservant la promesse de libre choix du bénéficiaire.

## Pages publiques
- La page `/activites` devient le **Guide du sport** avec recherche par ville et activité.
- Les résultats sont regroupés par ville, avec accès direct aux professionnels de chaque ville.
- Les fiches gardent leur URL dédiée et indexable pour le référencement.
- Chaque aperçu affiche une photo, le nom, l’activité, la ville et un accès à la fiche.

## Fiche du professionnel
- Grande photo Google Places lorsqu’elle est disponible.
- Photo sportive générique adaptée à l’activité en solution de remplacement.
- Présentation rapide.
- Coordonnées : adresse, téléphone, email et site internet disponibles.
- Bouton **Offrir une carte Kadosport** vers le parcours d’achat.
- Bouton **Utiliser ma carte Kadosport ici** qui affiche directement le formulaire prérempli sur la fiche.
- Maintien du message de liberté de choix et des informations SEO LocalBusiness.

## Connexion Google Places
- Connecter Google Maps Platform et utiliser Places API pour retrouver les fiches publiques existantes.
- Faire les appels côté serveur afin de protéger les accès Google.
- Importer uniquement les champs nécessaires : identité, adresse, téléphone, site, position et photo avec attribution.
- Enregistrer les informations utiles dans la base Kadosport afin que les pages restent rapides et indexables, sans appel Google à chaque visite.
- Limiter les imports, éviter les doublons et ne rafraîchir les données qu’à la demande pour contrôler les coûts Google.

## Données et mise à jour
- Ajouter à chaque professionnel son identifiant Google, la source et la date de dernière synchronisation.
- Préserver les données Kadosport existantes lorsqu’aucune information Google n’est disponible.
- Prévoir une fonction d’import contrôlée pour enrichir progressivement plusieurs villes sans exposer un moteur Google public illimité.

## Vérification
- Vérifier le guide et une fiche sur mobile et ordinateur.
- Vérifier les deux boutons, l’ouverture du formulaire, les images de remplacement et les métadonnées SEO.
