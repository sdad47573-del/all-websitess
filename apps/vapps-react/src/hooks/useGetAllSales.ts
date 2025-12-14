import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from '../services/init.service';

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
