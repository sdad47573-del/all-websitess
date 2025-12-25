import { supabaseBrowserClient } from '../services/init.service';
import type { ItemProduct } from 'supabase-sdk';
import { translateItem } from '../data/maps/spanish';
import { getItemImageUrl } from '../utils/image.utils';
import { useSupabaseQuery } from './useSupabaseQuery';

export async function getAllItems() {
	return await supabaseBrowserClient.from('items').select('*').eq('active', true);
}

type TransformedItem = ItemProduct & { src: string; title: string };

export function useGetAllItems() {
	return useSupabaseQuery<ItemProduct[], TransformedItem[]>(['items'], getAllItems, {
		select: (data) =>
			data
				?.map((item) => ({
					...item,
					title: translateItem(item.title),
					src: getItemImageUrl(item.title, item.brand),
				}))
				.sort((a, b) => b.amount - a.amount) ?? [],
	});
}
