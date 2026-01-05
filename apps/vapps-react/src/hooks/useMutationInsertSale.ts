import type { VapItemData } from '@react-components';
import { useMutation } from '@tanstack/react-query';
import type { TablesInsert } from 'supabase-sdk';
import { queryClient } from '../lib/queryClient';
import { playSound } from '../lib/sound';
import { supabaseBrowserClient } from '../services/init.service';
import { sanitizeDeep } from '../utils/sanitize';

export async function insertSale(params: TablesInsert<'sales'>) {
	const sanitized = sanitizeDeep(params);
	const { data, error } = await supabaseBrowserClient
		.from('sales')
		.insert(sanitized)
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
		onMutate: async (newSale) => {
			// Cancel any outgoing refetches (so they don't overwrite our optimistic update)
			await queryClient.cancelQueries({ queryKey: ['items'] });

			// Snapshot the previous value
			const previousItems = queryClient.getQueryData<VapItemData[]>(['items']);

			// Optimistically update to the new value
			queryClient.setQueryData(['items'], (oldItems: VapItemData[] | undefined) => {
				if (!oldItems) return oldItems;
				return oldItems.map((item) =>
					item.id === newSale.item_id
						? { ...item, amount: Math.max(0, item.amount - newSale.amount) }
						: item,
				);
			});

			// Return a context object with the snapshotted value
			return { previousItems };
		},
		onError: (err, _, context) => {
			// If the mutation fails, use the context returned from onMutate to roll back
			if (context?.previousItems) {
				queryClient.setQueryData(['items'], context.previousItems);
			}
			console.error('Error inserting sale:', err);
		},
		onSuccess: () => {
			playSound('success');
		},
		// sobrecarga las querys, hace una peticion falle o no la mutacion
		// onSettled: () => {
		// 	// Always refetch after error or success to guarantee we are in sync with the server
		// 	queryClient.invalidateQueries({ queryKey: ['items'] });
		// 	queryClient.invalidateQueries({ queryKey: ['sales'] });
		// },
	});
	return mutation;
};
