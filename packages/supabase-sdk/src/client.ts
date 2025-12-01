import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import type { Database } from './types.js';

export const createClient = (supabaseUrl: string, supabaseAnonKey: string) => {
	return createSupabaseClient<Database>(supabaseUrl, supabaseAnonKey);
};

// Singleton instance holder if needed for client-side usage where env vars are global
let supabaseInstance: ReturnType<typeof createClient> | null = null;

export const getClient = (supabaseUrl?: string, supabaseAnonKey?: string) => {
	if (supabaseInstance) return supabaseInstance;

	if (!supabaseUrl || !supabaseAnonKey) {
		throw new Error('Supabase URL and Anon Key are required to initialize the client');
	}

	supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
	return supabaseInstance;
};
