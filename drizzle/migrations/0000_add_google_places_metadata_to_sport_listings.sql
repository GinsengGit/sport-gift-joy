ALTER TABLE public.sport_listings
  ADD COLUMN IF NOT EXISTS google_place_id text,
  ADD COLUMN IF NOT EXISTS google_maps_url text,
  ADD COLUMN IF NOT EXISTS google_attributions jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS google_synced_at timestamp with time zone;

CREATE UNIQUE INDEX IF NOT EXISTS sport_listings_google_place_id_unique
  ON public.sport_listings (google_place_id)
  WHERE google_place_id IS NOT NULL;