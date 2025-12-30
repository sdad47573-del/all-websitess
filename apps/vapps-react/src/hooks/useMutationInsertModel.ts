import { useMutation } from '@tanstack/react-query';
import type { Database } from 'supabase-sdk';
import { supabaseBrowserClient } from '../services/init.service';
import { sanitizeDeep } from '../utils/sanitize';
import { queryClient } from '../lib/queryClient';

type ModelInsert = Database['public']['Tables']['models']['Insert'];
type ModelRow = Database['public']['Tables']['models']['Row'];

export async function insertModel(params: ModelInsert) {
	const sanitized = sanitizeDeep(params);
	const { data, error } = await (supabaseBrowserClient as any)
		.from('models')
		.insert(sanitized)
		.select()
		.single();
	return { data: data as ModelRow | null, error };
}

export function useInsertModel() {
	return useMutation({
		mutationFn: (params: ModelInsert) => insertModel(params),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['models'] });
		},
	});
}

