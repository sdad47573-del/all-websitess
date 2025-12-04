import { supabaseBrowserClient } from './init.service';

export async function getAllSales() {
	let { data, error } = await supabaseBrowserClient
		.from('sales')
		.select('*, vapers(id, title)')
		.order('created_at', { ascending: false });

	if (error) {
		console.error('Error getting sales:', error);
	}

	return { data, error };
}

export async function insertSale(params: {
	vaper_id: number;
	amount: number;
	price_per_unit: number;
}) {
	const { data, error } = await supabaseBrowserClient.from('sales').insert({
		...params,
	} as any);

	if (error) {
		console.error('Error inserting sell:', error);
	}

	return { data, error };
}
