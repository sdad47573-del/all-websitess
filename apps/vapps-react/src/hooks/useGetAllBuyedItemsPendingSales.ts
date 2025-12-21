import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from '../services/init.service';

export type ItemsStockRow = {
	item_id: number;
	title: string;
	total_buyed: number;
	total_sold: number;
};

export async function getAllBuyedItemsPendingSales() {
	const { data, error } = await supabaseBrowserClient.rpc('get_items_stock');
	const typedData = data as ItemsStockRow[] | null;

	if (error) {
		console.error('Error getting buyed items pending sales:', error);
	}

	return { data: typedData, error };
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
