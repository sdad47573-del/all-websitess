import { useMutation } from '@tanstack/react-query';
import type { Database } from 'supabase-sdk';
import { supabaseBrowserClient } from '../services/init.service';
import { sanitizeDeep } from '../utils/sanitize';
import { queryClient } from '../lib/queryClient';

type BuyInsert = Database['public']['Tables']['buy']['Insert'];
type BuyRow = Database['public']['Tables']['buy']['Row'];
type BuyedItemInsert = Database['public']['Tables']['buyeditems']['Insert'];

export async function createBuyWithItems(buy: BuyInsert, items: Omit<BuyedItemInsert, 'buy_id'>[]) {
	const sanitizedBuy = sanitizeDeep(buy);
	const { data: newBuy, error: buyError } = await (supabaseBrowserClient as any)
		.from('buy')
		.insert(sanitizedBuy)
		.select()
		.single();

	if (buyError || !newBuy) {
		return { buy: null as BuyRow | null, error: buyError || new Error('No se pudo crear la compra') };
	}

	if (items.length === 0) {
		return { buy: newBuy as BuyRow, error: null };
	}

	const payload = items.map((it) => ({ ...sanitizeDeep(it), buy_id: newBuy.id }));
	const { error: itemsError } = await (supabaseBrowserClient as any).from('buyeditems').insert(payload);
	return { buy: newBuy as BuyRow, error: itemsError || null };
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

