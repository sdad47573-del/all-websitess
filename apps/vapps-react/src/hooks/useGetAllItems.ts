import { useQuery } from '@tanstack/react-query';
import { imageBrandMap, imageMap } from '../data/maps/img';
import { translateItem } from '../data/maps/spanish';
import { supabaseBrowserClient } from '../services/init.service';
import type { ItemProduct } from 'supabase-sdk';

export async function getAllItems() {
	const { data, error } = await supabaseBrowserClient.from('items').select('*').eq('active', true);

	const typedData = data as ItemProduct[] | null;

	if (error) {
		console.error('Error getting items:', error);
	}

	return { data: typedData, error };
}

export function useGetAllItems() {
	return useQuery({
		queryKey: ['items'],
		queryFn: async () => {
			const { data, error } = await getAllItems();
			if (error) throw error;
			return data;
		},
		// TODO: tmp hasta que meta las imagenes en supabase
		// select: (data) => data.map((item) => ({ ...item, image_url: imageMap[item.title] })),
		select: (data) =>
			data
				?.map((item) => ({
					id: item.id,
					title: translateItem(item.title),
					src: item.brand === 'VAPSOLO' ? imageMap[item.title] : imageBrandMap[item.brand],
					amount: item.amount,
				}))
				.sort((a, b) => b.amount - a.amount),
	});
}
