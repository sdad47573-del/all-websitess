import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';

type BuyedItemRow = {
	buy_id: number;
	quantity: number;
	// eur: number; // da error
	buy: {
		id: number;
		eur: number;
		fecha: string;
		label: string;
		payed: boolean;
		facture_url?: string | null;
	};
	items: { id: number; title: string; brand: string | null; image_url: string | null };
};

export type GroupedBuyItem = {
	id: number;
	title: string;
	brand: string;
	image_url: string | null;
	quantity: number;
};
export type GroupedBuyEntry = {
	id: number;
	eur: number;
	fecha: string;
	label: string;
	payed: boolean;
	facture_url?: string | null;
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
		items (id,title,brand,image_url)
		`,
	);

	if (error) return { data: undefined, error };

	const typedData = data as BuyedItemRow[] | null;

	const grouped = typedData?.reduce<Record<number, GroupedBuyEntry>>((acc, curr) => {
		const buyRow = curr.buy as any;
		const itemRow = curr.items as any;
		if (!buyRow || !itemRow) {
			return acc;
		}
		const buyId = buyRow.id;

		if (!acc[buyId]) {
			acc[buyId] = { ...buyRow, items: [], total: 0 };
		}

		acc[buyId].items.push({
			...itemRow,
			brand: itemRow.brand ?? '',
			image_url: itemRow.image_url,
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
