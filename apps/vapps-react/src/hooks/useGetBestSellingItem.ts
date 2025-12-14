import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from '../services/init.service';

export async function getBestSellingItem() {
	const { data, error } = await supabaseBrowserClient.rpc('get_top_selling_item_40_days').single();

	if (error) {
		console.error('Error getting best selling item:', error);
	}

	return { data, error };
}

export function useGetBestSellingItem() {
	return useQuery({
		queryKey: ['bestSellingItem'],
		queryFn: async () => {
			const { data, error } = await getBestSellingItem();
			if (error) throw error;
			return { data, error };
		},
	});
}
