import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';
import type { Database } from 'supabase-sdk';

type BrandRow = Database['public']['Tables']['brands']['Row'];

export async function getAllBrands() {
	return await supabaseBrowserClient.from('brands').select('*').order('name', { ascending: true });
}

export function useGetAllBrands() {
	return useSupabaseQuery<BrandRow[]>(['brands'], getAllBrands);
}

