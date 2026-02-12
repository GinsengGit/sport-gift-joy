
-- Table des offres d'affiliation sport
CREATE TABLE public.affiliate_offers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  advertiser_name TEXT NOT NULL,
  advertiser_id TEXT,
  logo_emoji TEXT DEFAULT '🏷️',
  title TEXT NOT NULL,
  description TEXT,
  discount_value NUMERIC NOT NULL,
  discount_type TEXT NOT NULL DEFAULT 'percentage' CHECK (discount_type IN ('percentage', 'fixed')),
  voucher_code TEXT,
  landing_page_url TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'equipement',
  is_popular BOOLEAN NOT NULL DEFAULT false,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  start_date DATE NOT NULL DEFAULT CURRENT_DATE,
  end_date DATE NOT NULL DEFAULT (CURRENT_DATE + INTERVAL '6 months'),
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- RLS : lecture publique, écriture admin uniquement
ALTER TABLE public.affiliate_offers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active offers"
  ON public.affiliate_offers FOR SELECT
  USING (is_active = true);

-- Table de suivi des clics (pour tracking affiliation)
CREATE TABLE public.affiliate_clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  offer_id UUID NOT NULL REFERENCES public.affiliate_offers(id) ON DELETE CASCADE,
  clickref TEXT,
  clicked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.affiliate_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert clicks"
  ON public.affiliate_clicks FOR INSERT
  WITH CHECK (true);

-- Trigger updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_affiliate_offers_updated_at
  BEFORE UPDATE ON public.affiliate_offers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
