import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from './init.service';
import { imageMap } from '../data/maps/img';
import { translateItem } from '../data/maps/spanish';

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
		// TODO: tmp hasta que meta las imagenes en supabase
		// select: (data) => data.map((item) => ({ ...item, image_url: imageMap[item.title] })),
		select: (data) =>
			data
				?.map((item: any) => ({
					...item,
					src: imageMap[item.title],
					title: translateItem(item.title),
				}))
				.sort((a, b) => b.amount - a.amount),
	});
}
