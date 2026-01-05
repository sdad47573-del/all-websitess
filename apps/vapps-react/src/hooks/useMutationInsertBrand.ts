import { useMutation } from '@tanstack/react-query';
import type { TablesInsert } from 'supabase-sdk';
import { supabaseBrowserClient } from '../services/init.service';
import { sanitizeDeep } from '../utils/sanitize';
import { queryClient } from '../lib/queryClient';

export async function insertBrand(params: TablesInsert<'brands'>) {
	const sanitized = sanitizeDeep(params);
	const { data, error } = await supabaseBrowserClient
		.from('brands')
		.insert(sanitized)
		.select()
		.single();
	return { data, error };
}

export function useInsertBrand() {
	return useMutation({
		mutationFn: (params: TablesInsert<'brands'>) => insertBrand(params),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['brands'] });
		},
	});
}

