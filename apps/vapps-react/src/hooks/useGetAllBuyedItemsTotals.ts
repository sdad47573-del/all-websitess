import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from '../services/init.service';

export async function getAllBuyedItemsTotals() {
	const { data, error } = await supabaseBrowserClient.rpc('get_items_totals');

	if (error) {
		console.error('Error getting buyed items totals:', error);
	}

	return { data, error };
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
