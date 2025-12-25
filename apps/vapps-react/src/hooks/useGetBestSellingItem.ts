import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';

type TopSellingItemRow = {
	title: string;
	es_title: string;
	amount: number;
};

export async function getBestSellingItem() {
	return await supabaseBrowserClient.rpc('get_top_selling_item_40_days').single();
}

export function useGetBestSellingItem() {
	return useSupabaseQuery<TopSellingItemRow>(['bestSellingItem'], getBestSellingItem);
}
