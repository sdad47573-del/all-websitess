import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../lib/queryClient';
import { supabaseBrowserClient } from '../services/init.service';
import type { VapItemData } from '@react-components';

type InsertSaleParams = {
	item_id: number;
	seller_id?: string;
	amount: number;
	price_per_unit: number;
	concept?: string;
	payment?: number;
};

type InsertedSaleRow = {
	id: number;
	item_id: number;
	seller_id?: string;
	amount: number;
	price_per_unit: number;
	concept?: string | null;
	payment?: number | null;
	created_at: string;
};

export async function insertSale(params: InsertSaleParams) {
	const { data, error } = await supabaseBrowserClient
		.from('sales')
		.insert({
			...params,
		} as any)
		.select()
		.single();
	const typedData = data as InsertedSaleRow | null;

	if (error) {
		console.error('Error inserting sell:', error);
	}

	return { data: typedData, error };
}

export const useMutationInsertSale = () => {
	const mutation = useMutation({
		mutationFn: insertSale,
		// onSuccess: () => {
		// 	queryClient.invalidateQueries(['items']);
		// },
		onSuccess: (alteredSale) => {
			// TODO: aqui deberia ir el tipo de items??
			queryClient.setQueryData(['items'], (oldItems: VapItemData[] | undefined) => {
				if (!oldItems) return oldItems;

				return oldItems.map((item) =>
					item.id === alteredSale.data!.item_id
						? { ...item, amount: item.amount - alteredSale.data!.amount }
						: item,
				);
			});
		},
	});
	return mutation;
};
