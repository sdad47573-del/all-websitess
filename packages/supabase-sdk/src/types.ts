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

export type Category = Database['public']['Tables']['categories']['Row'];
export type Menu = Database['public']['Tables']['menu']['Row'];
export type Plato = Database['public']['Tables']['platos']['Row'];
