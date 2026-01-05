import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';
import type { Database } from 'supabase-sdk';

export type SaleItemDetail = {
	sale_id: number;
	item_id: number;
	item_title: string;
	image_url: string | null;
	brand: string;
	amount: number;
	price_per_unit: number;
};

export type SalesByDateRow = Database['public']['Functions']['group_by_day_concept_with_items']['Returns'][number] & {
	items: SaleItemDetail[];
};

export async function getAllSalesGroupedByDate() {
	return await supabaseBrowserClient.rpc('group_by_day_concept_with_items');
}

export function useGetAllSalesGroupedByDate() {
	return useSupabaseQuery<
		Database['public']['Functions']['group_by_day_concept_with_items']['Returns'],
		SalesByDateRow[]
	>(['salesGroupedByDate'], getAllSalesGroupedByDate, {
			select: (rows) =>
				rows?.map((row) => {
					const rawItems: SaleItemDetail[] = Array.isArray(row.items) ? (row.items as any[]) : [];

					return {
						day: row.day,
						concept: row.concept ?? '',
						brand: row.brand,
						total_amount: row.total_amount,
						total_price: row.total_price,
						total_payment: row.total_payment,
						items: rawItems,
					};
				}) ?? [],
		},
	);
}
