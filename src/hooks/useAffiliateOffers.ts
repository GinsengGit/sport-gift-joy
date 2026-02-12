import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface AffiliateOffer {
  id: string;
  advertiser_name: string;
  advertiser_id: string | null;
  logo_emoji: string;
  title: string;
  description: string | null;
  discount_value: number;
  discount_type: string;
  voucher_code: string | null;
  landing_page_url: string;
  category: string;
  is_popular: boolean;
  is_featured: boolean;
  start_date: string;
  end_date: string;
}

export const useAffiliateOffers = (options?: { featuredOnly?: boolean; limit?: number }) => {
  return useQuery({
    queryKey: ["affiliate-offers", options],
    queryFn: async () => {
      let query = supabase
        .from("affiliate_offers")
        .select("*")
        .eq("is_active", true)
        .order("is_popular", { ascending: false });

      if (options?.featuredOnly) {
        query = query.eq("is_featured", true);
      }
      if (options?.limit) {
        query = query.limit(options.limit);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as AffiliateOffer[];
    },
  });
};

export const trackAffiliateClick = async (offerId: string, clickref?: string) => {
  await supabase.from("affiliate_clicks").insert({
    offer_id: offerId,
    clickref: clickref || null,
  });
};
