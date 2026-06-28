
-- =========================================================
-- ENUM pour le workflow de statuts des demandes
-- =========================================================
DO $$ BEGIN
  CREATE TYPE public.usage_request_status AS ENUM (
    'nouveau', 'a_contacter', 'contacte', 'en_cours', 'active', 'refus', 'termine'
  );
EXCEPTION WHEN duplicate_object THEN null; END $$;

-- =========================================================
-- TABLE: sport_categories
-- =========================================================
CREATE TABLE public.sport_categories (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  display_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.sport_categories TO anon, authenticated;
GRANT ALL ON public.sport_categories TO service_role;

ALTER TABLE public.sport_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view categories"
  ON public.sport_categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE TRIGGER trg_sport_categories_updated_at
  BEFORE UPDATE ON public.sport_categories
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =========================================================
-- TABLE: sport_listings (annuaire SEO)
-- =========================================================
CREATE TABLE public.sport_listings (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  activity text NOT NULL,
  category_id uuid REFERENCES public.sport_categories(id) ON DELETE SET NULL,
  description text,
  address text,
  city text,
  postal_code text,
  department text,
  country text NOT NULL DEFAULT 'FR',
  latitude numeric(9,6),
  longitude numeric(9,6),
  phone text,
  email text,
  website text,
  photos text[] NOT NULL DEFAULT '{}',
  is_published boolean NOT NULL DEFAULT true,
  kadosport_used_count int NOT NULL DEFAULT 0,
  -- Colonnes prêtes pour le futur (non exposées en V1)
  featured boolean NOT NULL DEFAULT false,
  premium boolean NOT NULL DEFAULT false,
  kadosport_score int,
  favorites_count int NOT NULL DEFAULT 0,
  reviews_avg numeric(3,2),
  reviews_count int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_sport_listings_published ON public.sport_listings(is_published) WHERE is_published = true;
CREATE INDEX idx_sport_listings_city ON public.sport_listings(city);
CREATE INDEX idx_sport_listings_department ON public.sport_listings(department);
CREATE INDEX idx_sport_listings_dept_cat ON public.sport_listings(department, category_id);
CREATE INDEX idx_sport_listings_city_cat ON public.sport_listings(city, category_id);
CREATE INDEX idx_sport_listings_slug ON public.sport_listings(slug);

GRANT SELECT ON public.sport_listings TO anon, authenticated;
GRANT ALL ON public.sport_listings TO service_role;

ALTER TABLE public.sport_listings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published listings"
  ON public.sport_listings FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE TRIGGER trg_sport_listings_updated_at
  BEFORE UPDATE ON public.sport_listings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =========================================================
-- TABLE: card_usage_requests (formulaire bénéficiaire)
-- =========================================================
CREATE TABLE public.card_usage_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  listing_id uuid REFERENCES public.sport_listings(id) ON DELETE SET NULL,
  beneficiary_first_name text NOT NULL,
  beneficiary_last_name text NOT NULL,
  beneficiary_email text NOT NULL,
  beneficiary_phone text,
  beneficiary_card_number text,
  pro_name text NOT NULL,
  pro_activity text,
  pro_city text,
  pro_address text,
  pro_phone text,
  pro_email text,
  message text,
  status public.usage_request_status NOT NULL DEFAULT 'nouveau',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_card_usage_requests_status ON public.card_usage_requests(status);
CREATE INDEX idx_card_usage_requests_created ON public.card_usage_requests(created_at DESC);

GRANT INSERT ON public.card_usage_requests TO anon, authenticated;
GRANT ALL ON public.card_usage_requests TO service_role;

ALTER TABLE public.card_usage_requests ENABLE ROW LEVEL SECURITY;

-- Tout le monde peut soumettre une demande
CREATE POLICY "Anyone can submit a usage request"
  ON public.card_usage_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Pas de policy SELECT/UPDATE/DELETE → seul service_role (back-office via edge function ou clé service) peut lire/gérer.

CREATE TRIGGER trg_card_usage_requests_updated_at
  BEFORE UPDATE ON public.card_usage_requests
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =========================================================
-- Seed catégories de base
-- =========================================================
INSERT INTO public.sport_categories (slug, name, display_order) VALUES
  ('coaching-sportif', 'Coaching sportif', 10),
  ('salle-de-sport', 'Salle de sport', 20),
  ('club-sportif', 'Club sportif', 30),
  ('centre-sportif', 'Centre sportif', 40),
  ('association-sportive', 'Association sportive', 50),
  ('activites-aquatiques', 'Activités aquatiques', 60),
  ('outdoor', 'Outdoor & nature', 70),
  ('arts-martiaux', 'Arts martiaux & combat', 80),
  ('danse-fitness', 'Danse & fitness', 90),
  ('tennis-raquettes', 'Tennis & sports de raquette', 100);

-- =========================================================
-- Seed fiches d'exemple
-- =========================================================
INSERT INTO public.sport_listings (slug, name, activity, category_id, description, address, city, postal_code, department, latitude, longitude, phone, email, website, kadosport_used_count, is_published)
SELECT
  v.slug, v.name, v.activity,
  (SELECT id FROM public.sport_categories WHERE slug = v.cat_slug),
  v.description, v.address, v.city, v.postal_code, v.department,
  v.latitude, v.longitude, v.phone, v.email, v.website,
  v.used, true
FROM (VALUES
  ('coach-sportif-marseille', 'Studio Forme Marseille', 'Coaching sportif personnalisé',
    'coaching-sportif',
    'Studio de coaching sportif personnalisé à Marseille. Préparation physique, remise en forme, perte de poids — séances individuelles et en petit groupe avec un coach diplômé d''État.',
    '12 rue Paradis', 'Marseille', '13001', '13', 43.2951, 5.3760,
    '04 91 00 00 00', 'contact@studioforme-marseille.fr', 'https://studioforme-marseille.fr', 3),
  ('club-tennis-aix-en-provence', 'Tennis Club d''Aix-en-Provence', 'Cours et locations de courts de tennis',
    'tennis-raquettes',
    'Club historique d''Aix-en-Provence avec 8 courts en terre battue et 4 en résine. École de tennis enfants et adultes, stages vacances, locations à l''heure.',
    'Avenue du Club Hippique', 'Aix-en-Provence', '13090', '13', 43.5297, 5.4474,
    '04 42 00 00 00', 'contact@tennis-aix.fr', 'https://tennis-aix.fr', 0),
  ('salle-escalade-lyon', 'Vertical Lyon', 'Salle d''escalade indoor',
    'centre-sportif',
    'Plus grande salle d''escalade de Lyon avec voies jusqu''à 18m, espace bloc, mur enfants et coaching personnalisé. Cours collectifs tous niveaux, accès libre 7j/7.',
    '45 rue de la République', 'Lyon', '69002', '69', 45.7640, 4.8357,
    '04 78 00 00 00', 'hello@vertical-lyon.fr', 'https://vertical-lyon.fr', 7),
  ('salle-sport-toulouse-capitole', 'FitClub Capitole', 'Salle de musculation et cardio',
    'salle-de-sport',
    'Salle de sport au cœur de Toulouse, ouverte 6h–23h, équipée Technogym. Cours collectifs : RPM, body pump, yoga, pilates, cross-training.',
    '8 place du Capitole', 'Toulouse', '31000', '31', 43.6045, 1.4442,
    '05 61 00 00 00', 'capitole@fitclub.fr', 'https://fitclub-toulouse.fr', 1),
  ('coach-yoga-bordeaux', 'Yoga Atelier Bordeaux', 'Cours de yoga et méditation',
    'danse-fitness',
    'Atelier de yoga au centre de Bordeaux : Vinyasa, Hatha, Yin yoga, ateliers méditation pleine conscience. Petits groupes (8 max) pour un suivi personnalisé.',
    '22 cours de l''Intendance', 'Bordeaux', '33000', '33', 44.8404, -0.5793,
    '05 56 00 00 00', 'bonjour@yoga-atelier-bordeaux.fr', 'https://yoga-atelier-bordeaux.fr', 0)
) AS v(slug, name, activity, cat_slug, description, address, city, postal_code, department, latitude, longitude, phone, email, website, used);
