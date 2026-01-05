import { useMutation } from '@tanstack/react-query';
import type { TablesInsert } from 'supabase-sdk';
import { supabaseBrowserClient } from '../services/init.service';
import { sanitizeDeep } from '../utils/sanitize';
import { queryClient } from '../lib/queryClient';

export async function insertItem(params: TablesInsert<'items'>) {
	const sanitized = sanitizeDeep(params);
	const { data, error } = await supabaseBrowserClient
		.from('items')
		.insert(sanitized)
		.select()
		.single();

	if (error) {
		console.error('Error inserting item:', error);
	}

	return { data, error };
}

export function useInsertItem() {
	return useMutation({
		mutationFn: (params: TablesInsert<'items'>) => insertItem(params),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['items'] });
			queryClient.invalidateQueries({ queryKey: ['itemsStock'] });
		},
	});
}

