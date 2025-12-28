import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import type { Database } from './supabase.js';

export const createClient = (supabaseUrl: string, supabaseAnonKey: string) => {
	return createSupabaseClient<Database>(supabaseUrl, supabaseAnonKey);
};

export const getClient = (supabaseUrl?: string, supabaseAnonKey?: string) => {
	if (!supabaseUrl || !supabaseAnonKey) {
		throw new Error('Supabase URL and Anon Key are required to initialize the client');
	}

	return createClient(supabaseUrl, supabaseAnonKey);
};
