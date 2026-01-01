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
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      brands: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      buy: {
        Row: {
          created_at: string
          eur: number
          fecha: string
          id: number
          label: string
          payed: boolean
        }
        Insert: {
          created_at?: string
          eur: number
          fecha: string
          id?: number
          label: string
          payed?: boolean
        }
        Update: {
          created_at?: string
          eur?: number
          fecha?: string
          id?: number
          label?: string
          payed?: boolean
        }
        Relationships: []
      }
      buyeditems: {
        Row: {
          buy_id: number
          id: number
          item_id: number
          quantity: number
        }
        Insert: {
          buy_id: number
          id?: number
          item_id: number
          quantity: number
        }
        Update: {
          buy_id?: number
          id?: number
          item_id?: number
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "buyeditems_buy_id_fkey"
            columns: ["buy_id"]
            isOneToOne: false
            referencedRelation: "buy"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "buyeditems_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      DEPRECATED_beneficios: {
        Row: {
          eur: number
          fecha: string
          id: number
          label: string
        }
        Insert: {
          eur: number
          fecha: string
          id?: never
          label: string
        }
        Update: {
          eur?: number
          fecha?: string
          id?: never
          label?: string
        }
        Relationships: []
      }
      DEPRECATED_ingresos: {
        Row: {
          eur: number
          fecha: string
          id: number
          label: string
        }
        Insert: {
          eur: number
          fecha: string
          id?: never
          label: string
        }
        Update: {
          eur?: number
          fecha?: string
          id?: never
          label?: string
        }
        Relationships: []
      }
      financial_records: {
        Row: {
          amount: number
          created_at: string
          date: string
          id: number
          label: string
          profile_id: string
          type: Database["public"]["Enums"]["financial_record_type"]
        }
        Insert: {
          amount: number
          created_at?: string
          date: string
          id?: never
          label: string
          profile_id: string
          type: Database["public"]["Enums"]["financial_record_type"]
        }
        Update: {
          amount?: number
          created_at?: string
          date?: string
          id?: never
          label?: string
          profile_id?: string
          type?: Database["public"]["Enums"]["financial_record_type"]
        }
        Relationships: [
          {
            foreignKeyName: "financial_records_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      items: {
        Row: {
          active: boolean
          amount: number
          brand: string | null
          created_at: string
          es_title: string
          id: number
          image_url: string | null
          model_id: number | null
          title: string
        }
        Insert: {
          active?: boolean
          amount?: number
          brand?: string | null
          created_at?: string
          es_title: string
          id?: number
          image_url?: string | null
          model_id?: number | null
          title: string
        }
        Update: {
          active?: boolean
          amount?: number
          brand?: string | null
          created_at?: string
          es_title?: string
          id?: number
          image_url?: string | null
          model_id?: number | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "items_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "models"
            referencedColumns: ["id"]
          },
        ]
      }
      models: {
        Row: {
          brand_id: number | null
          created_at: string
          id: number
          name: string
        }
        Insert: {
          brand_id?: number | null
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          brand_id?: number | null
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "models_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          full_name: string
          id: string
          image_url: string | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          full_name: string
          id: string
          image_url?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          full_name?: string
          id?: string
          image_url?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Relationships: []
      }
      sales: {
        Row: {
          active: boolean
          amount: number
          concept: string
          created_at: string
          customer_id: number | null
          id: number
          item_id: number
          payment: number | null
          price_per_unit: number
          seller_id: string
        }
        Insert: {
          active?: boolean
          amount: number
          concept: string
          created_at?: string
          customer_id?: number | null
          id?: number
          item_id: number
          payment?: number | null
          price_per_unit: number
          seller_id: string
        }
        Update: {
          active?: boolean
          amount?: number
          concept?: string
          created_at?: string
          customer_id?: number | null
          id?: number
          item_id?: number
          payment?: number | null
          price_per_unit?: number
          seller_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sales_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_items_stock: {
        Args: never
        Returns: {
          active: boolean
          amount: number
          brand: string
          es_title: string
          image_url: string
          item_id: number
          stock_final: number
          title: string
          total_buyed: number
          total_sold: number
        }[]
      }
      get_items_totals: {
        Args: never
        Returns: {
          active: boolean
          amount: number
          brand: string
          es_title: string
          image_url: string
          item_id: number
          title: string
          total_quantity: number
        }[]
      }
      get_top_selling_item_40_days: {
        Args: never
        Returns: {
          active: boolean
          es_title: string
          image_url: string
          item_id: number
          title: string
          total_revenue: number
          total_units_sold: number
        }[]
      }
      get_user_role: {
        Args: never
        Returns: Database["public"]["Enums"]["user_role"]
      }
      group_by_day_concept_with_items: {
        Args: never
        Returns: {
          brand: string
          concept: string
          day: string
          items: Json
          total_amount: number
          total_payment: number
          total_price: number
        }[]
      }
      has_role: {
        Args: { required_role: Database["public"]["Enums"]["user_role"] }
        Returns: boolean
      }
      is_admin: { Args: { uid: string }; Returns: boolean }
    }
    Enums: {
      financial_record_type: "income" | "profit"
      user_role: "admin" | "seller" | "superadmin"
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
      financial_record_type: ["income", "profit"],
      user_role: ["admin", "seller", "superadmin"],
    },
  },
} as const
