import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from '../services/init.service';

export type ItemsTotalsRow = {
	item_id: number;
	title: string;
	total_quantity?: number;
	total_buyed?: number;
	total_sold?: number;
};

export async function getAllBuyedItemsTotals() {
	const { data, error } = await supabaseBrowserClient.rpc('get_items_totals');

	const typedData = data as ItemsTotalsRow[] | null;

	if (error) {
		console.error('Error getting buyed items totals:', error);
	}

	return { data: typedData, error };
}

export function useGetAllBuyedItemsTotals() {
	return useQuery({
		queryKey: ['itemsTotals'],
		queryFn: async () => {
			const { data, error } = await getAllBuyedItemsTotals();
			if (error) throw error;
			return data;
		},
	});
}
