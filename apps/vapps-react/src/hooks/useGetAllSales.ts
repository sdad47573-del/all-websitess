import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';

type SaleRow = {
	id: number;
	created_at: string;
	quantity: number;
	price: number;
	items: { id: number; title: string };
};

export async function getAllSales() {
	return await supabaseBrowserClient
		.from('sales')
		.select('*, items(id, title)')
		.order('created_at', { ascending: false });
}

export function useGetAllSales() {
	return useSupabaseQuery<SaleRow[]>(['sales'], getAllSales);
}
