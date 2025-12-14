import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from '../services/init.service';

export async function getAllBuyedItemsPendingSales() {
	const { data, error } = await supabaseBrowserClient.rpc('get_items_stock');

	if (error) {
		console.error('Error getting buyed items pending sales:', error);
	}

	return { data, error };
}

export function useGetAllBuyedItemsPendingSales() {
	return useQuery({
		queryKey: ['itemsStock'],
		queryFn: async () => {
			const { data, error } = await getAllBuyedItemsPendingSales();
			if (error) throw error;
			return data;
		},
	});
}
