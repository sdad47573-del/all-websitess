import { useMutation } from '@tanstack/react-query';
import type { TablesInsert } from 'supabase-sdk';
import { supabaseBrowserClient } from '../services/init.service';
import { sanitizeDeep } from '../utils/sanitize';
import { queryClient } from '../lib/queryClient';

export async function insertModel(params: TablesInsert<'models'>) {
	const sanitized = sanitizeDeep(params);
	const { data, error } = await supabaseBrowserClient
		.from('models')
		.insert(sanitized)
		.select()
		.single();
	return { data, error };
}

export function useInsertModel() {
	return useMutation({
		mutationFn: (params: TablesInsert<'models'>) => insertModel(params),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['models'] });
		},
	});
}

