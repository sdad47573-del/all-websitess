import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../lib/queryClient';
import { supabaseBrowserClient } from '../services/init.service';

export async function updateSalesCustomer(saleIds: number[], customerId: number | null) {
	const { data, error } = await supabaseBrowserClient
		.from('sales')
		.update({ customer_id: customerId })
		.in('id', saleIds);
	return { data, error };
}

export const useUpdateSalesCustomer = () => {
	return useMutation({
		mutationFn: ({ saleIds, customerId }: { saleIds: number[]; customerId: number | null }) =>
			updateSalesCustomer(saleIds, customerId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['salesGroupedByDate'] });
			queryClient.invalidateQueries({ queryKey: ['customerRanking'] });
			queryClient.invalidateQueries({ queryKey: ['customerItemsRanking'] });
		},
	});
};

