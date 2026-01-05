import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';
import type { Tables } from 'supabase-sdk';

export async function getAllBrands() {
	return await supabaseBrowserClient.from('brands').select('*').order('name', { ascending: true });
}

export function useGetAllBrands() {
	return useSupabaseQuery<Tables<'brands'>[]>(['brands'], getAllBrands);
}

