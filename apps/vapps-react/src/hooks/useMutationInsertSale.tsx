import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../lib/queryClient';
import { insertSale } from '../services/sales.service';

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
