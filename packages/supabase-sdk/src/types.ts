export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type UserRole = 'admin' | 'seller' | 'superadmin';

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
			profiles: {
				Row: {
					id: string;
					role: UserRole;
					full_name: string;
					created_at: string;
					updated_at: string;
				};
				Insert: {
					id: string;
					role?: UserRole;
					full_name: string;
					created_at?: string;
					updated_at?: string;
				};
				Update: {
					id?: string;
					role?: UserRole;
					full_name?: string;
					created_at?: string;
					updated_at?: string;
				};
			};
			financial_records: {
				Row: {
					id: number;
					profile_id: string | null;
					type: 'income' | 'profit';
					label: string;
					amount: number;
					date: string;
					created_at: string;
				};
				Insert: {
					id?: number;
					profile_id?: string | null;
					type: 'income' | 'profit';
					label: string;
					amount: number;
					date: string;
					created_at?: string;
				};
				Update: {
					id?: number;
					profile_id?: string | null;
					type?: 'income' | 'profit';
					label?: string;
					amount?: number;
					date?: string;
					created_at?: string;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			get_user_role: {
				Args: Record<string, never>;
				Returns: UserRole;
			};
			has_role: {
				Args: { required_role: UserRole };
				Returns: boolean;
			};
		};
		Enums: {
			user_role: UserRole;
			financial_record_type: 'income' | 'profit';
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

// Organized types by domain - Auth & Profiles
export type Profile = Database['public']['Tables']['profiles']['Row'];
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert'];
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update'];

// Organized types by domain - Financials
export type FinancialRecord = Database['public']['Tables']['financial_records']['Row'];
export type FinancialRecordInsert = Database['public']['Tables']['financial_records']['Insert'];
export type FinancialRecordUpdate = Database['public']['Tables']['financial_records']['Update'];
