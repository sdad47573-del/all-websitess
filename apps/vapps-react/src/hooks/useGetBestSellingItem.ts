import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from '../services/init.service';

type TopSellingItemRow = {
	title: string;
	es_title: string;
	amount: number;
};

export async function getBestSellingItem() {
	const { data, error } = await supabaseBrowserClient.rpc('get_top_selling_item_40_days').single();
	const typedData = data as TopSellingItemRow | null;

	if (error) {
		console.error('Error getting best selling item:', error);
	}

	return { data: typedData, error };
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
