import type { Category } from 'supabase-sdk';
import { supabaseClient } from './init.service';

export async function getAllCategories() {
	const { data: categories, error } = await supabaseClient
		.from('categories')
		.select('*')
		.returns<Category[]>();

	if (error) {
		console.error('Error fetching categories:', error);
	}

	return { categories, error };
}
