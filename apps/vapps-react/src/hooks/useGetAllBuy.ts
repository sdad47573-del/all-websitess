import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from '../services/init.service';

type BuyedItemRow = {
	buy_id: number;
	quantity: number;
	buy: { id: number; eur: number; fecha: string; label: string };
	items: { id: number; title: string };
};

export type GroupedBuyItem = { id: number; title: string; quantity: number };
export type GroupedBuyEntry = {
	id: number;
	eur: number;
	fecha: string;
	label: string;
	items: GroupedBuyItem[];
	total: number;
};
export type GroupedBuy = GroupedBuyEntry[];

export async function getAllBuy() {
	const { data, error } = await supabaseBrowserClient.from('buyeditems').select(
		`
		buy_id,
		quantity,
		buy (id,eur,fecha,label),
		items (id,title)
		`,
	);
	const typedData = data as BuyedItemRow[] | null;

	if (error) {
		console.error('Error getting buy:', error);
	}

	const grouped = typedData?.reduce<Record<number, GroupedBuyEntry>>((acc, curr) => {
		const buyId = curr.buy.id!;

		if (!acc[buyId]) {
			// aplanamos los atributos de buy directamente en el objeto
			acc[buyId] = { ...curr.buy, items: [], total: 0 };
		}

		// agregamos quantity junto al item
		acc[buyId].items.push({
			...curr.items,
			quantity: curr.quantity,
		});

		// sumamos quantity al total
		acc[buyId].total += curr.quantity;

		return acc;
	}, {});

	// Convertimos a array si queremos
	const result: GroupedBuy | undefined = grouped
		? Object.values(grouped).sort(
				(a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime(),
			)
		: undefined;
	return { data: result, error };
}

export function useGetAllBuy() {
	return useQuery({
		queryKey: ['buy'],
		queryFn: async () => {
			const { data, error } = await getAllBuy();
			if (error) throw error;
			return data;
		},
	});
}
