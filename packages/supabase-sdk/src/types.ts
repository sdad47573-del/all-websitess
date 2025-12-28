import type { Database } from './supabase.js';
import type { Json } from './supabase.js';

export type UserRole = Database['public']['Enums']['user_role'];

// Tipos legacy (Restaurant) – interfaces independientes
export interface Category {
	id: number;
	created_at: string;
	name: string;
	slug: string;
	active: boolean;
}

export interface Menu {
	id: number;
	created_at: string;
	name: string;
	active: boolean;
	start_date: string | null;
	end_date: string | null;
}

export interface Plato {
	id: number;
	created_at: string;
	name: string;
	description: string | null;
	price: number;
	image_url: string | null;
	category_id: number | null;
	active: boolean;
	allergens: Json | null;
}

export type Item = Database['public']['Tables']['items']['Row'];

// Organized types by domain - Restaurant
export type RestaurantCategory = Category;
export type RestaurantCategoryInsert = Omit<Category, 'id' | 'created_at'> & {
	id?: number;
	created_at?: string;
};
export type RestaurantCategoryUpdate = Partial<Category>;

export type RestaurantMenu = Menu;
export type RestaurantMenuInsert = Omit<Menu, 'id' | 'created_at' | 'active'> & {
	id?: number;
	created_at?: string;
	active?: boolean;
};
export type RestaurantMenuUpdate = Partial<Menu>;

export type RestaurantPlato = Plato;
export type RestaurantPlatoInsert = Omit<Plato, 'id' | 'created_at' | 'active'> & {
	id?: number;
	created_at?: string;
	active?: boolean;
};
export type RestaurantPlatoUpdate = Partial<Plato>;

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
