import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';
import type { Database } from 'supabase-sdk';

export async function getAllBuyedItemsPendingSales() {
	return await supabaseBrowserClient.rpc('get_items_stock');
}

export function useGetAllBuyedItemsPendingSales() {
	return useSupabaseQuery<Database['public']['Functions']['get_items_stock']['Returns']>(
		['itemsStock'],
		getAllBuyedItemsPendingSales,
	);
}
