import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from './init.service';

export async function getAllBuy() {
	const { data, error } = await supabaseBrowserClient.from('buyeditems').select(`
		buy_id,
		quantity,
		buy (id,eur,fecha,label),
		items (id,title)
		`);

	if (error) {
		console.error('Error getting buy:', error);
	}

	const grouped = data?.reduce((acc: any, curr: any) => {
		const buyId = curr.buy.id;

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
	const result = Object.values(grouped);

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

export async function getAllBuyedItemsTotals() {
	const { data, error } = await supabaseBrowserClient.rpc('get_items_totals');

	if (error) {
		console.error('Error getting buyed items totals:', error);
	}

	return { data, error };
}

export function useGetAllBuyedItemsTotals() {
	return useQuery({
		queryKey: ['totalsbuyeditems'],
		queryFn: async () => {
			const { data, error } = await getAllBuyedItemsTotals();
			if (error) throw error;
			return data;
		},
	});
}
