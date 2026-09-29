/**
 * Development seed.
 *
 * Run with `bun run seed`. Fills the current month with a plausible set of
 * expenses plus a budget, so a freshly created database shows a populated
 * dashboard instead of empty states.
 *
 * Safe to re-run: it only adds rows when the `expenses` table is empty.
 */

import { currentMonth, type ExpenseCategory } from './categories.js';
import { getDb, nextId } from './db.js';

const db = getDb();

const existing = db.query<{ count: number }, []>('SELECT COUNT(*) AS count FROM expenses').get();

if ((existing?.count ?? 0) > 0) {
	console.log(`expenses already has ${existing?.count} rows, skipping seed`);
	process.exit(0);
}

const month = currentMonth();
const year = month.slice(0, 4);
const current = month.slice(5, 7);

/** Day of month, zero-padded. The seed only runs mid-month at the latest. */
const day = (n: number) => `${year}-${current}-${String(n).padStart(2, '0')}`;

const rows: {
	amount: number;
	category: ExpenseCategory;
	description: string;
	date: string;
	paymentMethod: string;
	notes?: string;
}[] = [
	{
		amount: 42.5,
		category: 'comida',
		description: 'Compra semanal del súper',
		date: day(2),
		paymentMethod: 'Tarjeta',
	},
	{
		amount: 8.9,
		category: 'transporte',
		description: 'Abono de transporte',
		date: day(2),
		paymentMethod: 'Efectivo',
	},
	{
		amount: 120,
		category: 'hogar',
		description: 'Factura de la luz',
		date: day(4),
		paymentMethod: 'Transferencia',
	},
	{
		amount: 15,
		category: 'entretenimiento',
		description: 'Cine el viernes',
		date: day(5),
		paymentMethod: 'Tarjeta',
	},
	{
		amount: 30,
		category: 'salud',
		description: 'Farmacia',
		date: day(7),
		paymentMethod: 'Tarjeta',
	},
	{
		amount: 24.99,
		category: 'servicios',
		description: 'Fibra y móvil',
		date: day(8),
		paymentMethod: 'Bizum',
	},
	{
		amount: 62,
		category: 'compras',
		description: 'Zapatillas de running',
		date: day(10),
		paymentMethod: 'Tarjeta',
	},
	{
		amount: 35,
		category: 'comida',
		description: 'Cena con amigos',
		date: day(11),
		paymentMethod: 'Efectivo',
	},
	{
		amount: 450,
		category: 'viajes',
		description: 'Escapada: alojamiento',
		date: day(14),
		paymentMethod: 'Tarjeta',
	},
	{
		amount: 18,
		category: 'mascotas',
		description: 'Comida y veterinario',
		date: day(15),
		paymentMethod: 'Efectivo',
	},
	{
		amount: 45,
		category: 'regalos',
		description: 'Regalo de cumpleaños',
		date: day(17),
		paymentMethod: 'Bizum',
	},
	{
		amount: 90,
		category: 'educacion',
		description: 'Curso de inglés',
		date: day(19),
		paymentMethod: 'Transferencia',
	},
	{
		amount: 27.4,
		category: 'comida',
		description: 'Desayuno y café',
		date: day(21),
		paymentMethod: 'Efectivo',
	},
	{
		amount: 12,
		category: 'otros',
		description: 'Pequeños imprevistos',
		date: day(22),
		paymentMethod: 'Efectivo',
	},
];

// Backdate the rows so the list shows a natural spread rather than one
// identical creation timestamp.
const now = Date.now();

for (const [index, row] of rows.entries()) {
	db.query(
		`INSERT INTO expenses
       (id, amount, category, description, date, payment_method, notes, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
	).run(
		nextId(db, 'expenses'),
		row.amount,
		row.category,
		row.description,
		row.date,
		row.paymentMethod,
		row.notes ?? null,
		now - (rows.length - index) * 3_600_000,
	);
}

db.query(
	`INSERT INTO budgets (month, amount, created_at) VALUES (?, ?, ?)
   ON CONFLICT(month) DO NOTHING`,
).run(month, 900, now);

console.log(`seeded ${rows.length} expenses and a ${900} budget for ${month}`);
