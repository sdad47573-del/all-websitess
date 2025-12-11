import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from './init.service';

export async function getAllSales() {
	let { data, error } = await supabaseBrowserClient
		.from('sales')
		.select('*, items(id, title)')
		.order('created_at', { ascending: false });

	if (error) {
		console.error('Error getting sales:', error);
	}

	return { data, error };
}

export async function insertSale(params: {
	item_id: number;
	amount: number;
	price_per_unit: number;
}) {
	const { data, error } = await supabaseBrowserClient
		.from('sales')
		.insert({
			...params,
		} as any)
		.select()
		.single();

	if (error) {
		console.error('Error inserting sell:', error);
	}

	return { data, error };
}

export async function getAllBuyedItemsPendingSales() {
	const { data, error } = await supabaseBrowserClient.rpc('get_items_stock');

	if (error) {
		console.error('Error getting buyed items pending sales:', error);
	}

	return { data, error };
}

export function useGetAllBuyedItemsPendingSales() {
	return useQuery({
		queryKey: ['totalsbuyeditems'],
		queryFn: async () => {
			const { data, error } = await getAllBuyedItemsPendingSales();
			if (error) throw error;
			return data;
		},
	});
}
