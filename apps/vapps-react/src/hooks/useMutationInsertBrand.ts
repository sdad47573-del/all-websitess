import { useMutation } from '@tanstack/react-query';
import type { Database } from 'supabase-sdk';
import { supabaseBrowserClient } from '../services/init.service';
import { sanitizeDeep } from '../utils/sanitize';
import { queryClient } from '../lib/queryClient';

type BrandInsert = Database['public']['Tables']['brands']['Insert'];
type BrandRow = Database['public']['Tables']['brands']['Row'];

export async function insertBrand(params: BrandInsert) {
	const sanitized = sanitizeDeep(params);
	const { data, error } = await (supabaseBrowserClient as any)
		.from('brands')
		.insert(sanitized)
		.select()
		.single();
	return { data: data as BrandRow | null, error };
}

export function useInsertBrand() {
	return useMutation({
		mutationFn: (params: BrandInsert) => insertBrand(params),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['brands'] });
		},
	});
}

