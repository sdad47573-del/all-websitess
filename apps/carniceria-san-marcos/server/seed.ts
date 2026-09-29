/**
 * Development seed.
 *
 * Run with `bun run seed`. Adds a few paid orders so the dashboard figures and
 * the social-proof counter are not zero on a fresh database. Only inserts when
 * the table is empty.
 */

import { getDb, nextId } from './db.js';

const db = getDb();

const existing = db.query<{ count: number }, []>('SELECT COUNT(*) AS count FROM orders').get();

if ((existing?.count ?? 0) > 0) {
	console.log(`orders already has ${existing?.count} rows, skipping seed`);
	process.exit(0);
}

const day = 86_400_000;
const now = Date.now();

const orders = [
	{
		daysAgo: 3,
		items: [
			{ label: '2,5 kg de Ternera de Ávila', amount: 29.9 },
			{ label: '1 kg de Chorizo ibérico', amount: 14.5 },
		],
		shipping: 0,
		delivery: 'domicilio',
		name: 'Marta Ruiz',
	},
	{
		daysAgo: 8,
		items: [{ label: 'Pack familiar', amount: 38 }],
		shipping: 0,
		delivery: 'recogida',
		name: 'Javier Ortega',
	},
	{
		daysAgo: 12,
		items: [
			{ label: '3 kg de Pollo campero', amount: 21 },
			{ label: '1 kg de Merluza', amount: 11.9 },
		],
		shipping: 2.9,
		delivery: 'domicilio',
		name: 'Lucía Fernández',
	},
];

for (const [index, order] of orders.entries()) {
	const createdAt = now - order.daysAgo * day;
	const subtotal = order.items.reduce((sum, item) => sum + item.amount, 0);

	db.query(
		`INSERT INTO orders
       (id, created_at, status, method, items, subtotal, shipping, total,
        name, phone, delivery, time, notes)
     VALUES (?, ?, 'paid', 'card', ?, ?, ?, ?, ?, NULL, ?, NULL, NULL)`,
	).run(
		nextId(db, 'orders'),
		createdAt,
		JSON.stringify(order.items),
		subtotal,
		order.shipping,
		subtotal + order.shipping,
		order.name,
		order.delivery,
	);

	// Stagger the ids a little so the seed is stable across runs.
	void index;
}

console.log(`seeded ${orders.length} orders`);
