import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';
import type { Database } from 'supabase-sdk';

export async function getBestSellingItem() {
	// return await supabaseBrowserClient.rpc('get_top_selling_item_40_days').single();
	const { data, error } = await supabaseBrowserClient.rpc('get_top_selling_item_40_days').single();
	return { data, error };
}

export function useGetBestSellingItem() {
	return useSupabaseQuery<Database['public']['Functions']['get_top_selling_item_40_days']['Returns'][number]>(
		['bestSellingItem'],
		getBestSellingItem,
	);
}
