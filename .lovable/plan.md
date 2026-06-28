# Annuaire des activités sportives finançables Kadosport

Objectif : créer un annuaire public, scalable (10k+ fiches), pensé SEO, qui met en avant la liberté de choix du bénéficiaire — sans jamais donner l'impression d'un réseau fermé.

---

## 1. Promesse & ton (UX)

Message systématiquement repris en haut de la page liste, des fiches et du formulaire :

> **Vous êtes libre de choisir votre activité sportive.**
> Kadosport facilite ensuite les démarches avec le professionnel afin que vous puissiez profiter pleinement de ses services.

Vocabulaire interdit : *non référencé*, *partenaire manquant*, *refus*, *incompatible*. Toujours formulation positive.

---

## 2. Architecture des pages

- `/activites` — page index (liste + filtres simples ville/catégorie, intro SEO, message liberté de choix).
- `/activites/:slug` — fiche professionnel, ex. `/activites/coach-sportif-marseille`, `/activites/club-tennis-aix-en-provence`.
- Lien dans le `Header` + dans le `Footer`.
- Sitemap `scripts/generate-sitemap.ts` étendu : 1 entrée par fiche active (lecture base au build).
- `robots.txt` : tout indexable (déjà OK).
- Per-route head via `react-helmet-async` (à ajouter au projet) :
  - `<title>` : `{Nom} — {Activité} à {Ville} | Kadosport`
  - `<meta description>` : extrait description + ville
  - `<link rel="canonical">` et `og:url` auto-référencés
  - JSON-LD `LocalBusiness` (name, address, geo, url, telephone, image, category)
- H1 unique par fiche : `{Nom} — {Activité} à {Ville}`. H2 pour Description / Coordonnées / Utiliser ma carte.

---

## 3. Badges (V1 uniquement)

- **Vert — Carte Kadosport déjà utilisée ici** : affiché si au moins une transaction Kadosport a été enregistrée pour cette fiche.
- **Bleu — Activité finançable avec Kadosport** : affiché par défaut sur toutes les autres fiches, avec libellé positif :
  > « Cette activité est compatible avec Kadosport. Si le professionnel n'a pas encore accepté de règlement Kadosport, notre équipe le contactera afin que vous puissiez profiter pleinement de ses services. »

Pas d'autre badge en V1 (Premium / Score / etc. arriveront via colonnes prévues mais masquées).

---

## 4. Base de données (Lovable Cloud)

Tables conçues pour passer à l'échelle (index, slug unique, colonnes futures prêtes mais non exploitées en V1).

### `sport_categories`
- `slug` (unique), `name`, `display_order`

### `sport_listings`
- `slug` (unique, indexé) — utilisé dans l'URL
- `name`, `activity`, `category_id` (FK)
- `description` (texte long)
- `address`, `city` (indexé), `postal_code`, `department` (indexé), `country` (default 'FR')
- `latitude`, `longitude`
- `phone`, `email`, `website`
- `photos` (text[] — URLs)
- `is_published` (bool, default true, indexé)
- `kadosport_used_count` (int, default 0) → pilote le badge vert
- Colonnes prêtes pour le futur (nullable, non utilisées en V1) : `featured`, `premium`, `kadosport_score`, `favorites_count`, `reviews_avg`, `reviews_count`
- Index composites : `(department, category_id)`, `(city, category_id)`, `is_published`.

Lecture publique via RLS `is_published = true` → grant `SELECT` à `anon` + `authenticated`.
Écriture réservée `service_role` (gestion via back-office admin).

### `card_usage_requests` (formulaire « Utiliser ma carte ici »)
> Cette table peut déjà exister (créée précédemment pour `/utiliser-ma-carte`). Si oui, on **ajoute** les colonnes manquantes via migration ; sinon on la crée.
- `listing_id` (FK nullable — null si demande libre)
- `beneficiary_first_name`, `beneficiary_last_name`, `beneficiary_email`, `beneficiary_phone`
- `pro_name`, `pro_city`, `pro_activity` (dénormalisé pour back-office)
- `message`
- `status` enum `usage_request_status` : `nouveau` (défaut), `a_contacter`, `contacte`, `en_cours`, `active`, `refus`, `termine`
- Insert ouvert à `anon` (formulaire public), lecture/maj réservée admin.

---

## 5. Composants front

- `src/pages/activites/ActivitesIndex.tsx` — liste paginée, filtres ville/catégorie, message liberté.
- `src/pages/activites/ActiviteDetail.tsx` — fiche complète + Helmet + JSON-LD + badges + bouton CTA.
- `src/components/activites/ListingCard.tsx`, `ListingBadge.tsx`, `ListingFilters.tsx`, `LibertyBanner.tsx`.
- `src/components/activites/UseCardForm.tsx` — formulaire (zod + insert Supabase), pré-rempli avec le pro courant si présent.
- Route ajoutées dans `src/App.tsx` : `/activites` et `/activites/:slug`.
- Lien depuis le `Header` (« Activités sportives ») et depuis la `HeroSection` (lien secondaire « Trouver une activité »).

---

## 6. Back-office admin

Nouvel onglet **Demandes d'utilisation** dans `src/pages/AdminDashboard.tsx` :
- Colonnes : Date · Bénéficiaire · Professionnel · Ville · Activité · Statut
- Sélecteur de statut inline (mise à jour via Supabase).
- Filtre par statut + recherche bénéficiaire/pro.

(Gestion des fiches `sport_listings` en CRUD admin : non incluse en V1 — données injectées via migration/insert. Ajout plus tard.)

---

## 7. SEO — détail technique

- Installer `react-helmet-async` + `HelmetProvider` dans `src/main.tsx`.
- Retirer le `<link rel="canonical">` statique de `index.html` (chaque route gère le sien).
- Garder les `og:*` sitewide dans `index.html` comme fallback crawlers non-JS.
- `scripts/generate-sitemap.ts` : fetch `sport_listings` publiés via client Supabase (clé publishable) au build → ajoute `/activites/:slug` pour chaque + `/activites`.
- Schema.org `LocalBusiness` par fiche, avec `geo` si lat/lon disponibles.

---

## 8. Évolutivité (préparée, non exposée en V1)

- Colonnes `featured`, `premium`, `kadosport_score`, `favorites_count`, `reviews_*` déjà présentes.
- Index sur `city`, `department`, `category_id` pour recherche multicritères future.
- Table `sport_categories` séparée pour navigation par catégorie plus tard (`/activites/categorie/:slug`).
- Architecture sitemap déjà capable d'itérer sur n'importe quel volume (pagination sitemap >50k à prévoir plus tard, pas en V1).

---

## Étapes d'exécution

1. **Migration Supabase** : enum statut, tables `sport_categories` + `sport_listings`, extension de `card_usage_requests` (ou création), RLS + GRANTs, index.
2. **Front public** : routes, pages liste & fiche, composants, badges, bannière liberté, formulaire.
3. **SEO** : `react-helmet-async`, Helmet par route, JSON-LD, sitemap generator étendu, nettoyage `index.html`.
4. **Back-office** : onglet « Demandes d'utilisation » avec gestion des statuts.
5. **Seed minimal** (3–5 fiches d'exemple) pour valider rendu + sitemap.

Confirme et je lance la migration en premier (étape 1) — les étapes suivantes s'enchaînent ensuite.
