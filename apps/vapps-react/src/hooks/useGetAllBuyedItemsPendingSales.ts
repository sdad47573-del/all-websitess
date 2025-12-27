import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';

export type ItemsStockRow = {
	item_id: number;
	title: string;
	es_title: string;
	image_url: string | null;
	brand: string;
	amount: number;
	active: boolean;
	total_buyed: number;
	total_sold: number;
	stock_final: number;
};

export async function getAllBuyedItemsPendingSales() {
	return await supabaseBrowserClient.rpc('get_items_stock');
}

export function useGetAllBuyedItemsPendingSales() {
	return useSupabaseQuery<ItemsStockRow[]>(['itemsStock'], getAllBuyedItemsPendingSales);
}
