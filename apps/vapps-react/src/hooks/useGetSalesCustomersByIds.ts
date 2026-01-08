import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';
import type { Tables } from 'supabase-sdk';

type SalesCustomerRow = Pick<Tables<'sales'>, 'id' | 'customer_id'> & {
	customers: Pick<Tables<'customers'>, 'name'> | null;
};

export async function getSalesCustomersByIds(ids: number[]) {
	if (!ids || ids.length === 0) {
		return { data: null, error: null };
	}
	return await supabaseBrowserClient
		.from('sales')
		.select('id, customer_id, customers(name)')
		.in('id', ids);
}

export function useGetSalesCustomersByIds(ids: number[] | undefined) {
	return useSupabaseQuery<SalesCustomerRow[] | null>(
		['salesCustomersByIds', ...(ids ?? [])],
		() => getSalesCustomersByIds(ids ?? []),
		{ enabled: !!ids && ids.length > 0 },
	);
}
