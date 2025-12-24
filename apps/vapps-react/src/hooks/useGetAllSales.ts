import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from '../services/init.service';

type SaleRow = {
	id: number;
	created_at: string;
	quantity: number;
	price: number;
	items: { id: number; title: string };
};

export async function getAllSales() {
	const { data, error } = await supabaseBrowserClient
		.from('sales')
		.select('*, items(id, title)')
		.order('created_at', { ascending: false });

	const typedData = data as SaleRow[] | null;

	if (error) {
		console.error('Error getting sales:', error);
	}
	return { data: typedData, error };
}

export function useGetAllSales() {
	return useQuery({
		queryKey: ['sales'],
		queryFn: async () => {
			const { data, error } = await getAllSales();
			if (error) throw error;
			return data;
		},
	});
}
