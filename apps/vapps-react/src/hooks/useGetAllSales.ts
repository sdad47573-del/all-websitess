import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';
import type { Tables } from 'supabase-sdk';

type SaleWithItems = Tables<'sales'> & {
	items: Pick<Tables<'items'>, 'id' | 'title'> | null;
};

export async function getAllSales() {
	return await supabaseBrowserClient
		.from('sales')
		.select('*, items(id, title)')
		.order('created_at', { ascending: false });
}

export function useGetAllSales() {
	return useSupabaseQuery<SaleWithItems[]>(['sales'], getAllSales);
}
