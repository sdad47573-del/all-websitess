import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';

type BuyedItemRow = {
	buy_id: number;
	quantity: number;
	eur: number;
	buy: { id: number; eur: number; fecha: string; label: string; payed: boolean };
	items: { id: number; title: string; brand: string };
};

export type GroupedBuyItem = { id: number; title: string; brand: string; quantity: number };
export type GroupedBuyEntry = {
	id: number;
	eur: number;
	fecha: string;
	label: string;
	payed: boolean;
	items: GroupedBuyItem[];
	total: number;
};
export type GroupedBuy = GroupedBuyEntry[];

export async function getAllBuy() {
	const { data, error } = await supabaseBrowserClient.from('buyeditems').select(
		`
		buy_id,
		quantity,
		buy (*),
		items (id,title,brand)
		`,
	);

	if (error) return { data: undefined, error };

	const typedData = data as BuyedItemRow[] | null;

	const grouped = typedData?.reduce<Record<number, GroupedBuyEntry>>((acc, curr) => {
		const buyId = curr.buy.id;

		if (!acc[buyId]) {
			acc[buyId] = { ...curr.buy, items: [], total: 0 };
		}

		acc[buyId].items.push({
			...curr.items,
			quantity: curr.quantity,
		});

		acc[buyId].total += curr.quantity;

		return acc;
	}, {});

	const result = grouped
		? Object.values(grouped).sort(
				(a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime(),
			)
		: undefined;

	return { data: result, error };
}

export function useGetAllBuy() {
	return useSupabaseQuery<GroupedBuy>(['buy'], getAllBuy);
}
