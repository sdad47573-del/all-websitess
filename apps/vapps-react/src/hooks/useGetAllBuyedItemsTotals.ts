import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';
import type { Database } from 'supabase-sdk';

export async function getAllBuyedItemsTotals() {
	return await supabaseBrowserClient.rpc('get_items_totals');
}

export function useGetAllBuyedItemsTotals() {
	return useSupabaseQuery<Database['public']['Functions']['get_items_totals']['Returns']>(
		['itemsTotals'],
		getAllBuyedItemsTotals,
	);
}
