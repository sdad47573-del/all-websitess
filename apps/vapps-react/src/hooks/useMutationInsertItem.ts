import { useMutation } from '@tanstack/react-query';
import type { ItemProduct, ItemProductInsert } from 'supabase-sdk';
import { supabaseBrowserClient } from '../services/init.service';
import { sanitizeDeep } from '../utils/sanitize';
import { queryClient } from '../lib/queryClient';

export async function insertItem(params: ItemProductInsert) {
	const sanitized = sanitizeDeep(params);
	const { data, error } = await (supabaseBrowserClient as any)
		.from('items')
		.insert(sanitized)
		.select()
		.single();

	if (error) {
		console.error('Error inserting item:', error);
	}

	return { data: data as ItemProduct | null, error };
}

export function useInsertItem() {
	return useMutation({
		mutationFn: (params: ItemProductInsert) => insertItem(params),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['items'] });
			queryClient.invalidateQueries({ queryKey: ['itemsStock'] });
		},
	});
}

