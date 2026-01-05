import { supabaseBrowserClient } from '../services/init.service';
import type { Tables } from 'supabase-sdk';
import { translateItem } from '../data/maps/spanish';
import { getImageUrl } from '../utils/image.utils';
import { useSupabaseQuery } from './useSupabaseQuery';

export async function getAllItems() {
	return await supabaseBrowserClient.from('items').select('*').eq('active', true);
}

type TransformedItem = Tables<'items'> & { src: string; title: string };

export function useGetAllItems() {
	return useSupabaseQuery<Tables<'items'>[], TransformedItem[]>(['items'], getAllItems, {
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
