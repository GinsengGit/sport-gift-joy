export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      affiliate_clicks: {
        Row: {
          clicked_at: string
          clickref: string | null
          id: string
          offer_id: string
        }
        Insert: {
          clicked_at?: string
          clickref?: string | null
          id?: string
          offer_id: string
        }
        Update: {
          clicked_at?: string
          clickref?: string | null
          id?: string
          offer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_clicks_offer_id_fkey"
            columns: ["offer_id"]
            isOneToOne: false
            referencedRelation: "affiliate_offers"
            referencedColumns: ["id"]
          },
        ]
      }
      affiliate_offers: {
        Row: {
          advertiser_id: string | null
          advertiser_name: string
          category: string
          created_at: string
          description: string | null
          discount_type: string
          discount_value: number
          end_date: string
          id: string
          is_active: boolean
          is_featured: boolean
          is_popular: boolean
          landing_page_url: string
          logo_emoji: string | null
          start_date: string
          title: string
          updated_at: string
          voucher_code: string | null
        }
        Insert: {
          advertiser_id?: string | null
          advertiser_name: string
          category?: string
          created_at?: string
          description?: string | null
          discount_type?: string
          discount_value: number
          end_date?: string
          id?: string
          is_active?: boolean
          is_featured?: boolean
          is_popular?: boolean
          landing_page_url: string
          logo_emoji?: string | null
          start_date?: string
          title: string
          updated_at?: string
          voucher_code?: string | null
        }
        Update: {
          advertiser_id?: string | null
          advertiser_name?: string
          category?: string
          created_at?: string
          description?: string | null
          discount_type?: string
          discount_value?: number
          end_date?: string
          id?: string
          is_active?: boolean
          is_featured?: boolean
          is_popular?: boolean
          landing_page_url?: string
          logo_emoji?: string | null
          start_date?: string
          title?: string
          updated_at?: string
          voucher_code?: string | null
        }
        Relationships: []
      }
      card_usage_requests: {
        Row: {
          beneficiary_card_number: string | null
          beneficiary_email: string
          beneficiary_first_name: string
          beneficiary_last_name: string
          beneficiary_phone: string | null
          created_at: string
          id: string
          listing_id: string | null
          message: string | null
          pro_activity: string | null
          pro_address: string | null
          pro_city: string | null
          pro_email: string | null
          pro_name: string
          pro_phone: string | null
          status: Database["public"]["Enums"]["usage_request_status"]
          updated_at: string
        }
        Insert: {
          beneficiary_card_number?: string | null
          beneficiary_email: string
          beneficiary_first_name: string
          beneficiary_last_name: string
          beneficiary_phone?: string | null
          created_at?: string
          id?: string
          listing_id?: string | null
          message?: string | null
          pro_activity?: string | null
          pro_address?: string | null
          pro_city?: string | null
          pro_email?: string | null
          pro_name: string
          pro_phone?: string | null
          status?: Database["public"]["Enums"]["usage_request_status"]
          updated_at?: string
        }
        Update: {
          beneficiary_card_number?: string | null
          beneficiary_email?: string
          beneficiary_first_name?: string
          beneficiary_last_name?: string
          beneficiary_phone?: string | null
          created_at?: string
          id?: string
          listing_id?: string | null
          message?: string | null
          pro_activity?: string | null
          pro_address?: string | null
          pro_city?: string | null
          pro_email?: string | null
          pro_name?: string
          pro_phone?: string | null
          status?: Database["public"]["Enums"]["usage_request_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "card_usage_requests_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "sport_listings"
            referencedColumns: ["id"]
          },
        ]
      }
      sport_categories: {
        Row: {
          created_at: string
          display_order: number
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_order?: number
          id?: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_order?: number
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      sport_listings: {
        Row: {
          activity: string
          address: string | null
          category_id: string | null
          city: string | null
          country: string
          created_at: string
          department: string | null
          description: string | null
          email: string | null
          favorites_count: number
          featured: boolean
          id: string
          is_published: boolean
          kadosport_score: number | null
          kadosport_used_count: number
          latitude: number | null
          longitude: number | null
          name: string
          phone: string | null
          photos: string[]
          postal_code: string | null
          premium: boolean
          reviews_avg: number | null
          reviews_count: number
          slug: string
          updated_at: string
          website: string | null
        }
        Insert: {
          activity: string
          address?: string | null
          category_id?: string | null
          city?: string | null
          country?: string
          created_at?: string
          department?: string | null
          description?: string | null
          email?: string | null
          favorites_count?: number
          featured?: boolean
          id?: string
          is_published?: boolean
          kadosport_score?: number | null
          kadosport_used_count?: number
          latitude?: number | null
          longitude?: number | null
          name: string
          phone?: string | null
          photos?: string[]
          postal_code?: string | null
          premium?: boolean
          reviews_avg?: number | null
          reviews_count?: number
          slug: string
          updated_at?: string
          website?: string | null
        }
        Update: {
          activity?: string
          address?: string | null
          category_id?: string | null
          city?: string | null
          country?: string
          created_at?: string
          department?: string | null
          description?: string | null
          email?: string | null
          favorites_count?: number
          featured?: boolean
          id?: string
          is_published?: boolean
          kadosport_score?: number | null
          kadosport_used_count?: number
          latitude?: number | null
          longitude?: number | null
          name?: string
          phone?: string | null
          photos?: string[]
          postal_code?: string | null
          premium?: boolean
          reviews_avg?: number | null
          reviews_count?: number
          slug?: string
          updated_at?: string
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sport_listings_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "sport_categories"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      usage_request_status:
        | "nouveau"
        | "a_contacter"
        | "contacte"
        | "en_cours"
        | "active"
        | "refus"
        | "termine"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      usage_request_status: [
        "nouveau",
        "a_contacter",
        "contacte",
        "en_cours",
        "active",
        "refus",
        "termine",
      ],
    },
  },
} as const
