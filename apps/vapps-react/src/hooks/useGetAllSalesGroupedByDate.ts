import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from '../services/init.service';

export type SaleItemDetail = {
	item_id: number;
	item_title: string;
	amount: number;
	price_per_unit: number;
};

export type SalesByDateRow = {
	id: number;
	day: string;
	concept: string | null;
	total_amount: number;
	total_price: number;
	total_payment: number | null;
	items: SaleItemDetail[];
};

export async function getAllSalesGroupedByDate() {
	const { data, error } = await supabaseBrowserClient.rpc('group_by_day_concept_with_items');
	const typedData = data as SalesByDateRow[] | null;

	if (error) {
		console.error('Error getting sales grouped by date:', error);
	}
	return { data: typedData, error };
}

export function useGetAllSalesGroupedByDate() {
	return useQuery({
		queryKey: ['salesGroupedByDate'],
		queryFn: async () => {
			const { data, error } = await getAllSalesGroupedByDate();
			if (error) throw error;
			return data;
		},
	});
}
