import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from './init.service';

export async function getAllItems() {
	const { data, error } = await supabaseBrowserClient.from('items').select('*').eq('active', true);

	if (error) {
		console.error('Error getting items:', error);
	}

	return { data, error };
}

export function useGetAllItems() {
	return useQuery({
		queryKey: ['items'],
		queryFn: async () => {
			const { data, error } = await getAllItems();
			if (error) throw error;
			return data;
		},
	});
}
