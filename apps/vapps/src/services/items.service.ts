import { supabaseServerClient } from './init.service';

export async function getAllItems() {
	const { data, error } = await supabaseServerClient.from('vapers').select('*').eq('active', true);

	if (error) {
		console.error('Error getting items:', error);
	}

	return { data, error };
}
