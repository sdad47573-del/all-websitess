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

export async function getAllSalesGroupedByDate() {
	return await supabaseBrowserClient.rpc('group_by_day_concept_with_items');
}

type SalesByDateRpcRow = {
	day: string;
	concept: string;
	brand: string;
	total_amount: number;
	total_price: number;
	total_payment: number | null;
	items: unknown;
};

export type SalesByDateRow = SalesByDateRpcRow & {
	items: SaleItemDetail[];
};

export function useGetAllSalesGroupedByDate() {
	return useSupabaseQuery<SalesByDateRpcRow[], SalesByDateRow[]>(
		['salesGroupedByDate'],
		getAllSalesGroupedByDate,
		{
			select: (rows) =>
				rows?.map((row) => {
					const rawItems: SaleItemDetail[] = Array.isArray(row.items) ? (row.items as any[]) : [];

					return {
						day: row.day,
						concept: row.concept ?? null,
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
