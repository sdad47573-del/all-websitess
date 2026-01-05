import { useSupabaseQuery } from './useSupabaseQuery';
import { supabaseBrowserClient } from '../services/init.service';
import { translateItem } from '../data/maps/spanish';
import type { Tables } from 'supabase-sdk';

type SalesWithItemRow = Pick<Tables<'sales'>, 'customer_id' | 'amount'> & {
	customers: Pick<Tables<'customers'>, 'name'> | null;
	items: Pick<Tables<'items'>, 'id' | 'title' | 'image_url'> | null;
};

export type CustomerItems = {
	customer_id: number | null;
	name: string;
	items: { id: number; title: string; image_url: string | null; amount: number }[];
};

export const useCustomerRankingItems = () => {
	return useSupabaseQuery<SalesWithItemRow[], CustomerItems[]>(
		['customerItemsRanking'],
		async () =>
			await supabaseBrowserClient
				.from('sales')
				.select('customer_id, amount, customers(name), items(id, title, image_url)')
				.eq('active', true),
		{
			select: (rows) => {
				const acc = new Map<string, CustomerItems>();
				(rows ?? []).forEach((r) => {
					const key = String(r.customer_id ?? 'null');
					const name = r.customers?.name ?? 'Sin cliente';
					const item = r.items;
					if (!item) return;
					const amount = Number(r.amount ?? 0);
					const existing = acc.get(key);
					if (!existing) {
						acc.set(key, {
							customer_id: r.customer_id ?? null,
							name,
							items: [
								{
									id: item.id,
									title: translateItem(item.title),
									image_url: item.image_url,
									amount,
								},
							],
						});
					} else {
						const found = existing.items.find((i) => i.id === item.id);
						if (found) {
							found.amount += amount;
						} else {
							existing.items.push({
								id: item.id,
								title: translateItem(item.title),
								image_url: item.image_url,
								amount,
							});
						}
					}
				});
				return Array.from(acc.values()).map((c) => ({
					...c,
					items: c.items.sort((a, b) => b.amount - a.amount),
				}));
			},
		},
	);
};
