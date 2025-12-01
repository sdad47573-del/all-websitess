import { type Category, getClient, type Menu, type Plato } from './src/index.js';

// Mock environment variables for testing types
const SUPABASE_URL = 'https://example.supabase.co';
const SUPABASE_KEY = 'example-key';

const client = getClient(SUPABASE_URL, SUPABASE_KEY);

async function testTypes() {
	// Test Plato type
	const plato: Plato = {
		id: 1,
		created_at: new Date().toISOString(),
		name: 'Test Plato',
		description: 'Test Description',
		price: 10,
		image_url: null,
		category_id: 1,
		active: true,
		allergens: null,
	};

	// Test Category type
	const category: Category = {
		id: 1,
		created_at: new Date().toISOString(),
		name: 'Test Category',
		slug: 'test-category',
		active: true,
	};

	// Test Menu type
	const menu: Menu = {
		id: 1,
		created_at: new Date().toISOString(),
		name: 'Test Menu',
		active: true,
		start_date: null,
		end_date: null,
	};

	console.log('Types verified:', { plato, category, menu });

	// Verify client methods exist (static check)
	// We won't run this as we don't have real credentials
	// const { data, error } = await client.from('platos').select('*');
}

testTypes();
