import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';

export type SaleItemDetail = {
	sale_id: number;
	item_id: number;
	item_title: string;
	brand: string;
	amount: number;
	price_per_unit: number;
};

export type SalesByDateRow = {
	day: string;
	concept: string | null;
	brand: string;
	total_amount: number;
	total_price: number;
	total_payment: number | null;
	items: SaleItemDetail[];
};

export async function getAllSalesGroupedByDate() {
	return await supabaseBrowserClient.rpc('group_by_day_concept_with_items');
}

export function useGetAllSalesGroupedByDate() {
	return useSupabaseQuery<SalesByDateRow[]>(['salesGroupedByDate'], getAllSalesGroupedByDate);
}
