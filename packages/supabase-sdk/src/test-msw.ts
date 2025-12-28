import { getClient } from './index.js';
import { server } from './mocks/server.js';

// Mock environment variables
const SUPABASE_URL = 'https://example.supabase.co';
const SUPABASE_KEY = 'example-key';

const client = getClient(SUPABASE_URL, SUPABASE_KEY);

// Start MSW server
server.listen();

async function testMocks() {
	console.log('Testing MSW Mocks...');

	// Test Categories
	const { data: categories, error: catError } = await (client as any).from('categories').select('*');
	if (catError) console.error('Categories Error:', catError);
	else console.log('Categories Mock:', categories?.length === 2 ? 'PASS' : 'FAIL', categories);

	// Test Menu
	const { data: menu, error: menuError } = await (client as any).from('menu').select('*');
	if (menuError) console.error('Menu Error:', menuError);
	else console.log('Menu Mock:', menu?.length === 1 ? 'PASS' : 'FAIL', menu);

	// Test Platos
	const { data: platos, error: platosError } = await (client as any).from('platos').select('*');
	if (platosError) console.error('Platos Error:', platosError);
	else console.log('Platos Mock:', platos?.length === 2 ? 'PASS' : 'FAIL', platos);

	server.close();
}

testMocks();
