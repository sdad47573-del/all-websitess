import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../lib/queryClient';
import { supabaseBrowserClient } from '../services/init.service';

export async function insertSale(params: {
	item_id: number;
	amount: number;
	price_per_unit: number;
}) {
	const { data, error } = await supabaseBrowserClient
		.from('sales')
		.insert({
			...params,
		} as any)
		.select()
		.single();

	if (error) {
		console.error('Error inserting sell:', error);
	}

	return { data, error };
}

export const useMutationInsertSale = () => {
	const mutation = useMutation({
		mutationFn: insertSale,
		// onSuccess: () => {
		// 	queryClient.invalidateQueries(['items']);
		// },
		onSuccess: (alteredSale: any) => {
			queryClient.setQueryData(['items'], (oldItems: any[]) => {
				if (!oldItems) return oldItems;

				return oldItems.map((item) =>
					item.id === alteredSale.data.item_id
						? { ...item, amount: item.amount - alteredSale.data.amount }
						: item,
				);
			});
		},
	});
	return mutation;
};
