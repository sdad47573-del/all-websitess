import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';

export type ItemsStockRow = {
	item_id: number;
	title: string;
	brand: string;
	total_buyed: number;
	total_sold: number;
};

// TODO: revisar que es correcto el calculo
export async function getAllBuyedItemsPendingSales() {
	return await supabaseBrowserClient.rpc('get_items_stock');
}

export function useGetAllBuyedItemsPendingSales() {
	return useSupabaseQuery<ItemsStockRow[]>(['itemsStock'], getAllBuyedItemsPendingSales);
}
