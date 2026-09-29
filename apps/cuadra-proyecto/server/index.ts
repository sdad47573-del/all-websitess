import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { HTTPException } from 'hono/http-exception';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

import {
	currentMonth,
	EXPENSE_CATEGORIES,
	expenseCategorySchema,
	type ExpenseCategory,
} from './categories.js';
import { getDb, nextId } from './db.js';

/**
 * This app's HTTP API.
 *
 * The app used to run on Convex, with expenses and budgets in Convex tables
 * scoped to the signed-in user. That is replaced by Hono routes over SQLite.
 *
 * Auth is gone, which removes the per-user scoping: every row belongs to the one
 * implicit local user, and the `users` table and its indexes go with it.
 *
 * Routes are declared in one chained expression on purpose: Hono carries each
 * route in a type parameter, and only the value returned by the chain has it.
 * Declaring them separately would leave `AppType` empty and the frontend client
 * untyped.
 */

/** An expense as the API returns it. */
export interface Expense {
	id: string;
	amount: number;
	category: ExpenseCategory;
	description: string;
	date: string;
	paymentMethod?: string;
	notes?: string;
	createdAt: number;
}

/** A monthly spending limit. */
export interface Budget {
	month: string;
	amount: number;
}

/** Aggregates for one month. */
export interface Stats {
	total: number;
	count: number;
	average: number;
	topCategory: string | null;
	byCategory: { category: string; total: number; count: number }[];
	byDay: { date: string; total: number }[];
	month: string;
}

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'La fecha debe tener formato AAAA-MM-DD');

const month = z.string().regex(/^\d{4}-\d{2}$/, 'El mes debe tener formato AAAA-MM');

const expenseBody = z.object({
	amount: z.number().positive('La cantidad debe ser mayor que 0.'),
	category: expenseCategorySchema,
	description: z.string().trim().min(1, 'Añade una descripción.').max(120),
	date: isoDate,
	paymentMethod: z.string().trim().max(40).optional(),
	notes: z.string().trim().max(200).optional(),
});

const listQuery = z.object({
	month: month.optional(),
	category: expenseCategorySchema.optional(),
});

/** Normalises validation failures to the same `{ error }` shape as everything else. */
function validationMessage(error: z.ZodError): string {
	return error.issues
		.map((issue) => {
			const field = issue.path.join('.');
			return field ? `${field}: ${issue.message}` : issue.message;
		})
		.join(' ');
}

/**
 * A query validator that reports failures as `{ error }`.
 *
 * `zValidator`'s default is to return the raw `ZodError`, which the frontend's
 * `errorMessage` cannot read. Body validators pass the same handler inline, so
 * this keeps the two from drifting apart.
 */
function query<T extends z.ZodTypeAny>(schema: T) {
	return zValidator('query', schema, (result, c) => {
		if (!result.success) {
			return c.json({ error: validationMessage(result.error) }, 400);
		}
	});
}

/** Reads expenses for a month, newest first, with optional filters. */
function readExpenses(filters: { month?: string; category?: string }): Expense[] {
	const db = getDb();
	const conditions: string[] = [];
	const params: string[] = [];

	if (filters.month) {
		// `date` is YYYY-MM-DD, so the month prefix matches the month.
		conditions.push('date LIKE ?');
		params.push(`${filters.month}-%`);
	}
	if (filters.category) {
		conditions.push('category = ?');
		params.push(filters.category);
	}

	const where = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

	return db
		.query<Expense & { payment_method: string | null }, string[]>(
			`SELECT id, amount, category, description, date,
              payment_method, notes, created_at AS createdAt
       FROM expenses
       ${where}
       ORDER BY date DESC, rowid DESC`,
		)
		.all(...params)
		.map((row) => ({
			id: row.id,
			amount: row.amount,
			category: row.category,
			description: row.description,
			date: row.date,
			paymentMethod: row.payment_method ?? undefined,
			notes: row.notes ?? undefined,
			createdAt: row.createdAt,
		}));
}

const app = new Hono()
	// The Vite dev server runs on another port, so the browser needs CORS in
	// development. In production everything is served from one origin.
	.use(
		'/api/*',
		cors({
			origin: (origin) => origin ?? '*',
			allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		}),
	)
	.onError((error, c) => {
		if (error instanceof HTTPException) {
			return c.json({ error: error.message }, error.status as 400);
		}
		console.error('[api] unhandled error:', error);
		return c.json({ error: 'Internal server error' }, 500);
	})
	/** Health check. */
	.get('/api/health', (c) => c.json({ ok: true }))
	/** The category vocabulary, so the picker cannot drift from the API. */
	.get('/api/categories', (c) => c.json(EXPENSE_CATEGORIES))
	/** Lists expenses, newest first, optionally filtered by month and category. */
	.get('/api/expenses', query(listQuery), (c) => {
		return c.json(readExpenses(c.req.valid('query')));
	})
	/** Aggregates for a month. */
	.get('/api/expenses/stats', query(z.object({ month: month.optional() })), (c) => {
		const { month: selected } = c.req.valid('query');
		const anchor = selected ?? currentMonth();
		const expenses = readExpenses({ month: anchor });

		const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
		const count = expenses.length;

		const byCategoryMap = new Map<string, { total: number; count: number }>();
		for (const expense of expenses) {
			const entry = byCategoryMap.get(expense.category) ?? { total: 0, count: 0 };
			entry.total += expense.amount;
			entry.count += 1;
			byCategoryMap.set(expense.category, entry);
		}
		const byCategory = [...byCategoryMap.entries()]
			.map(([category, value]) => ({ category, ...value }))
			.sort((a, b) => b.total - a.total);

		const byDayMap = new Map<string, number>();
		for (const expense of expenses) {
			byDayMap.set(expense.date, (byDayMap.get(expense.date) ?? 0) + expense.amount);
		}
		const byDay = [...byDayMap.entries()]
			.map(([date, dayTotal]) => ({ date, total: dayTotal }))
			.sort((a, b) => a.date.localeCompare(b.date));

		const stats: Stats = {
			total,
			count,
			average: count > 0 ? total / count : 0,
			topCategory: byCategory[0]?.category ?? null,
			byCategory,
			byDay,
			month: anchor,
		};
		return c.json(stats);
	})
	/** Adds an expense. */
	.post(
		'/api/expenses',
		zValidator('json', expenseBody, (result, c) => {
			if (!result.success) {
				return c.json({ error: validationMessage(result.error) }, 400);
			}
		}),
		(c) => {
			const body = c.req.valid('json');
			const db = getDb();
			const id = nextId(db, 'expenses');

			db.query(
				`INSERT INTO expenses
           (id, amount, category, description, date, payment_method, notes, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
			).run(
				id,
				body.amount,
				body.category,
				body.description,
				body.date,
				body.paymentMethod ?? null,
				body.notes ?? null,
				Date.now(),
			);

			const expense: Expense = {
				id,
				amount: body.amount,
				category: body.category,
				description: body.description,
				date: body.date,
				paymentMethod: body.paymentMethod,
				notes: body.notes,
				createdAt: Date.now(),
			};
			return c.json(expense, 201);
		},
	)
	/** Updates an expense. */
	.put(
		'/api/expenses/:id',
		zValidator('json', expenseBody, (result, c) => {
			if (!result.success) {
				return c.json({ error: validationMessage(result.error) }, 400);
			}
		}),
		(c) => {
			const id = c.req.param('id');
			const body = c.req.valid('json');

			const result = getDb()
				.query(
					`UPDATE expenses
           SET amount = ?, category = ?, description = ?, date = ?,
               payment_method = ?, notes = ?
           WHERE id = ?`,
				)
				.run(
					body.amount,
					body.category,
					body.description,
					body.date,
					body.paymentMethod ?? null,
					body.notes ?? null,
					id,
				);

			if (result.changes === 0) {
				throw new HTTPException(404, { message: 'Gasto no encontrado.' });
			}
			return c.json({ id });
		},
	)
	/** Deletes an expense. */
	.delete('/api/expenses/:id', (c) => {
		const result = getDb().query('DELETE FROM expenses WHERE id = ?').run(c.req.param('id'));

		if (result.changes === 0) {
			throw new HTTPException(404, { message: 'Gasto no encontrado.' });
		}
		return c.body(null, 204);
	})
	/** The budget for a month, or `null` when none is set. */
	.get('/api/budget', query(z.object({ month: month.optional() })), (c) => {
		const anchor = c.req.valid('query').month ?? currentMonth();
		const budget = getDb()
			.query<
				{ month: string; amount: number },
				[string]
			>('SELECT month, amount FROM budgets WHERE month = ?')
			.get(anchor);
		return c.json(budget ?? null);
	})
	/** Sets the budget for a month, replacing any existing value. */
	.put(
		'/api/budget',
		zValidator(
			'json',
			z.object({ month, amount: z.number().nonnegative('El presupuesto no puede ser negativo.') }),
			(result, c) => {
				if (!result.success) {
					return c.json({ error: validationMessage(result.error) }, 400);
				}
			},
		),
		(c) => {
			const body = c.req.valid('json');

			// One budget per month, so this replaces rather than accumulates.
			getDb()
				.query(
					`INSERT INTO budgets (month, amount, created_at) VALUES (?, ?, ?)
           ON CONFLICT(month) DO UPDATE SET amount = excluded.amount`,
				)
				.run(body.month, body.amount, Date.now());

			return c.json(body);
		},
	);

export default app;

/** The API's shape, for the frontend to build a typed client. */
export type AppType = typeof app;
