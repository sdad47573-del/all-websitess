import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';

type TopSellingItemRow = {
	title: string;
	es_title: string;
	image_url: string;
	// amount: number; // esto da error
};

export async function getBestSellingItem() {
	// return await supabaseBrowserClient.rpc('get_top_selling_item_40_days').single();
	const { data, error } = await supabaseBrowserClient.rpc('get_top_selling_item_40_days').single();
	return { data, error };
}

export function useGetBestSellingItem() {
	return useSupabaseQuery<TopSellingItemRow>(['bestSellingItem'], getBestSellingItem);
}
