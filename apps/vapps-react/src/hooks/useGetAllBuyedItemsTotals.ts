import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';

export type ItemsTotalsRow = {
	item_id: number;
	title: string;
	brand: string;
	total_quantity?: number;
	total_buyed?: number;
	total_sold?: number;
};

export async function getAllBuyedItemsTotals() {
	return await supabaseBrowserClient.rpc('get_items_totals');
}

export function useGetAllBuyedItemsTotals() {
	return useSupabaseQuery<ItemsTotalsRow[]>(['itemsTotals'], getAllBuyedItemsTotals);
}
