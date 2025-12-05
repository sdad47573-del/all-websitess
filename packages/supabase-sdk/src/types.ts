export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			categories: {
				Row: {
					id: number;
					created_at: string;
					name: string;
					slug: string;
					active: boolean;
				};
				Insert: {
					id?: number;
					created_at?: string;
					name: string;
					slug: string;
					active?: boolean;
				};
				Update: {
					id?: number;
					created_at?: string;
					name?: string;
					slug?: string;
					active?: boolean;
				};
			};
			menu: {
				Row: {
					id: number;
					created_at: string;
					name: string;
					active: boolean;
					start_date: string | null;
					end_date: string | null;
				};
				Insert: {
					id?: number;
					created_at?: string;
					name: string;
					active?: boolean;
					start_date?: string | null;
					end_date?: string | null;
				};
				Update: {
					id?: number;
					created_at?: string;
					name?: string;
					active?: boolean;
					start_date?: string | null;
					end_date?: string | null;
				};
			};
			platos: {
				Row: {
					id: number;
					created_at: string;
					name: string;
					description: string | null;
					price: number;
					image_url: string | null;
					category_id: number | null;
					active: boolean;
					allergens: Json | null;
				};
				Insert: {
					id?: number;
					created_at?: string;
					name: string;
					description?: string | null;
					price: number;
					image_url?: string | null;
					category_id?: number | null;
					active?: boolean;
					allergens?: Json | null;
				};
				Update: {
					id?: number;
					created_at?: string;
					name?: string;
					description?: string | null;
					price?: number;
					image_url?: string | null;
					category_id?: number | null;
					active?: boolean;
					allergens?: Json | null;
				};
			};
			items: {
				Row: {
					id: number;
					created_at: string;
					title: string;
					amount: number;
					active: boolean;
				};
				Insert: {
					id?: number;
					created_at?: string;
					title: string;
					amount?: number;
					active?: boolean;
				};
				Update: {
					id?: number;
					created_at?: string;
					title?: string;
					amount?: number;
					active?: boolean;
				};
			};
			sales: {
				Row: {
					id: number;
					created_at: string;
					quantity: number;
					price: number;
				};
				Insert: {
					id?: number;
					created_at?: string;
					quantity: number;
					price: number;
				};
				Update: {
					id?: number;
					created_at?: string;
					quantity?: number;
					price?: number;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
	};
}

// Legacy exports for backward compatibility
export type Category = Database['public']['Tables']['categories']['Row'];
export type Menu = Database['public']['Tables']['menu']['Row'];
export type Plato = Database['public']['Tables']['platos']['Row'];
export type Item = Database['public']['Tables']['items']['Row'];

// Organized types by domain - Restaurant
export type RestaurantCategory = Database['public']['Tables']['categories']['Row'];
export type RestaurantCategoryInsert = Database['public']['Tables']['categories']['Insert'];
export type RestaurantCategoryUpdate = Database['public']['Tables']['categories']['Update'];

export type RestaurantMenu = Database['public']['Tables']['menu']['Row'];
export type RestaurantMenuInsert = Database['public']['Tables']['menu']['Insert'];
export type RestaurantMenuUpdate = Database['public']['Tables']['menu']['Update'];

export type RestaurantPlato = Database['public']['Tables']['platos']['Row'];
export type RestaurantPlatoInsert = Database['public']['Tables']['platos']['Insert'];
export type RestaurantPlatoUpdate = Database['public']['Tables']['platos']['Update'];

// Organized types by domain - Item Shop
export type ItemProduct = Database['public']['Tables']['items']['Row'];
export type ItemProductInsert = Database['public']['Tables']['items']['Insert'];
export type ItemProductUpdate = Database['public']['Tables']['items']['Update'];

// Organized types by domain - Sales
export type Sale = Database['public']['Tables']['sales']['Row'];
export type SaleInsert = Database['public']['Tables']['sales']['Insert'];
export type SaleUpdate = Database['public']['Tables']['sales']['Update'];
