import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';

type SalesBasicRow = {
	customer_id: number | null;
	amount: number;
	payment: number | null;
	customers: { name: string } | null;
};

export type CustomerRankingRow = {
	customer_id: number | null;
	name: string;
	total_items: number;
	total_paid: number;
};

export async function getCustomerRankingSource() {
	return await supabaseBrowserClient
		.from('sales')
		.select('customer_id, amount, payment, customers(name)')
		.eq('active', true);
}

export function useGetCustomerRanking() {
	return useSupabaseQuery<SalesBasicRow[], CustomerRankingRow[]>(
		['customerRanking'],
		getCustomerRankingSource,
		{
			select: (rows) => {
				const acc = new Map<
					string,
					{ customer_id: number | null; name: string; total_items: number; total_paid: number }
				>();

				console.log(rows);

				(rows ?? []).forEach((r) => {
					const key = String(r.customer_id ?? 'null');
					const name = r.customers?.name ?? 'Sin cliente';
					const prev = acc.get(key);
					const items = Number(r.amount ?? 0);
					const paid = Number(r.payment ?? 0);
					if (prev) {
						prev.total_items += items;
						prev.total_paid += paid;
					} else {
						acc.set(key, {
							customer_id: r.customer_id ?? null,
							name,
							total_items: items,
							total_paid: paid,
						});
					}
				});

				return Array.from(acc.values()).sort((a, b) => b.total_paid - a.total_paid);
			},
		},
	);
}
