import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';
import type { Tables } from 'supabase-sdk';

export async function getAllCustomers() {
	return await supabaseBrowserClient
		.from('customers')
		.select('*')
		.order('name', { ascending: true });
}

export function useGetAllCustomers() {
	return useSupabaseQuery<Tables<'customers'>[]>(['customers'], getAllCustomers);
}
