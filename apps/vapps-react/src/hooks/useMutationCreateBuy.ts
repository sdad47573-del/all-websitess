import { useMutation } from '@tanstack/react-query';
import type { TablesInsert } from 'supabase-sdk';
import { supabaseBrowserClient } from '../services/init.service';
import { sanitizeDeep } from '../utils/sanitize';
import { queryClient } from '../lib/queryClient';

export async function createBuyWithItems(
	buy: TablesInsert<'buy'>,
	items: Omit<TablesInsert<'buyeditems'>, 'buy_id'>[],
) {
	const sanitizedBuy = sanitizeDeep(buy);
	const { data: newBuy, error: buyError } = await supabaseBrowserClient
		.from('buy')
		.insert(sanitizedBuy)
		.select()
		.single();

	if (buyError || !newBuy) {
		return { buy: null, error: buyError || new Error('No se pudo crear la compra') };
	}

	if (items.length === 0) {
		return { buy: newBuy, error: null };
	}

	const payload = items.map((it) => ({ ...sanitizeDeep(it), buy_id: newBuy.id }));
	const { error: itemsError } = await supabaseBrowserClient.from('buyeditems').insert(payload);
	return { buy: newBuy, error: itemsError || null };
}

export function useCreateBuyWithItems() {
	return useMutation({
		mutationFn: (params: Parameters<typeof createBuyWithItems>) => createBuyWithItems(...params),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['buy'] });
			queryClient.invalidateQueries({ queryKey: ['itemsTotals'] });
			queryClient.invalidateQueries({ queryKey: ['itemsStock'] });
		},
	});
}

