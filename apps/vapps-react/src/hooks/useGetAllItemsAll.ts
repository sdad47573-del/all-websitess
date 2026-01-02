import { supabaseBrowserClient } from '../services/init.service';
import type { ItemProduct } from 'supabase-sdk';
import { translateItem } from '../data/maps/spanish';
import { getImageUrl } from '../utils/image.utils';
import { useSupabaseQuery } from './useSupabaseQuery';

export async function getAllItemsAll() {
	return await supabaseBrowserClient.from('items').select('*');
}

type TransformedItem = ItemProduct & { src: string; title: string };

export function useGetAllItemsAll() {
	return useSupabaseQuery<ItemProduct[], TransformedItem[]>(['items', 'all'], getAllItemsAll, {
		select: (data) =>
			data
				?.map((item) => ({
					...item,
					title: translateItem(item.title),
					src: getImageUrl(item.image_url),
				}))
				.sort((a, b) => b.amount - a.amount) ?? [],
	});
}
