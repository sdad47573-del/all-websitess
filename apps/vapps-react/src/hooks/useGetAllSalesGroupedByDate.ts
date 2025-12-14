import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from '../services/init.service';

export async function getAllSalesGroupedByDate() {
	const { data, error } = await supabaseBrowserClient.rpc('group_by_day_concept_with_items');

	if (error) {
		console.error('Error getting best selling item:', error);
	}
	return { data, error };
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
