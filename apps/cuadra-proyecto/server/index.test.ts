import { beforeEach, describe, expect, test } from 'bun:test';

import { CATEGORY_KEYS } from '../src/lib/finance.js';
import { currentMonth, EXPENSE_CATEGORIES } from './categories.js';
import { getDb } from './db.js';
import app from './index.js';

/**
 * API tests.
 *
 * Run with `bun test`. Bun's built-in runner is used rather than vitest
 * because `bun:sqlite` is a Bun builtin that only resolves under Bun.
 *
 * The database is in-memory and the rows are cleared between tests, so each
 * test starts from a known state without reloading modules.
 */

process.env.DATABASE_PATH ??= ':memory:';

beforeEach(() => {
	getDb().exec('DELETE FROM expenses; DELETE FROM budgets; DELETE FROM id_sequence;');
});

/** Sends a request to the API and returns the raw response. */
function call(path: string, init?: RequestInit): Response | Promise<Response> {
	return app.request(`/api${path}`, init);
}

/** Sends a JSON body. */
function sendJson(method: string, path: string, body: unknown): Response | Promise<Response> {
	return call(path, {
		method,
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(body),
	});
}

const postJson = (path: string, body: unknown) => sendJson('POST', path, body);
const putJson = (path: string, body: unknown) => sendJson('PUT', path, body);

interface Expense {
	id: string;
	amount: number;
	category: string;
	description: string;
	date: string;
	paymentMethod?: string;
	notes?: string;
	createdAt: number;
}

interface Stats {
	total: number;
	count: number;
	average: number;
	topCategory: string | null;
	byCategory: { category: string; total: number; count: number }[];
	byDay: { date: string; total: number }[];
	month: string;
}

const month = currentMonth();
const date = `${month}-05`;

/** A valid body, spread over to test one field at a time. */
const valid = {
	amount: 12.5,
	category: 'comida',
	description: 'Almuerzo',
	date,
	paymentMethod: 'Efectivo',
};

describe('health', () => {
	test('reports ok', async () => {
		const response = await call('/health');

		expect(response.status).toBe(200);
		expect(await response.json()).toEqual({ ok: true });
	});
});

describe('categories', () => {
	test('accepts exactly the keys the picker offers', () => {
		// The server rejects unknown categories, so if the client list drifts the
		// user sees a validation error on a category the picker just offered.
		expect([...EXPENSE_CATEGORIES].sort()).toEqual([...CATEGORY_KEYS].sort());
	});

	test('returns the vocabulary the picker renders', async () => {
		const response = await call('/categories');

		expect(response.status).toBe(200);
		const categories = (await response.json()) as string[];
		expect(categories).toContain('comida');
		expect(categories).toContain('entretenimiento');
		expect(categories).toHaveLength(12);
	});
});

describe('expenses', () => {
	test('starts empty', async () => {
		const response = await call('/expenses');

		expect(response.status).toBe(200);
		expect(await response.json()).toEqual([]);
	});

	test('creates an expense and returns the stored row', async () => {
		const response = await postJson('/expenses', valid);

		expect(response.status).toBe(201);
		const created = (await response.json()) as Expense;
		expect(created.id).toBe('expenses_1');
		expect(created.amount).toBe(12.5);
		expect(created.description).toBe('Almuerzo');
		expect(created.paymentMethod).toBe('Efectivo');
		expect(created.createdAt).toBeTypeOf('number');
	});

	test('omits optional fields rather than storing empty strings', async () => {
		const response = await postJson('/expenses', {
			amount: 5,
			category: 'transporte',
			description: 'Taxi',
			date,
		});

		expect(response.status).toBe(201);
		const created = (await response.json()) as Expense;
		expect(created.paymentMethod).toBeUndefined();
		expect(created.notes).toBeUndefined();
	});

	test('trims the description', async () => {
		const response = await postJson('/expenses', { ...valid, description: '  Almuerzo  ' });

		const created = (await response.json()) as Expense;
		expect(created.description).toBe('Almuerzo');
	});

	test('lists newest first by date', async () => {
		await postJson('/expenses', { ...valid, date: `${month}-01`, description: 'primera' });
		await postJson('/expenses', { ...valid, date: `${month}-20`, description: 'segunda' });

		const expenses = (await (await call('/expenses')).json()) as Expense[];
		expect(expenses.map((e) => e.description)).toEqual(['segunda', 'primera']);
	});

	test('keeps order stable for expenses on the same day', async () => {
		await postJson('/expenses', { ...valid, description: 'primero' });
		await postJson('/expenses', { ...valid, description: 'segundo' });

		const expenses = (await (await call('/expenses')).json()) as Expense[];
		expect(expenses.map((e) => e.description)).toEqual(['segundo', 'primero']);
	});

	test('filters by month', async () => {
		await postJson('/expenses', { ...valid, date: '2024-01-05', description: 'otro mes' });
		await postJson('/expenses', { ...valid, date, description: 'este mes' });

		const expenses = (await (await call(`/expenses?month=${month}`)).json()) as Expense[];
		expect(expenses).toHaveLength(1);
		expect(expenses[0]?.description).toBe('este mes');
	});

	test('filters by category', async () => {
		await postJson('/expenses', { ...valid, description: 'comida' });
		await postJson('/expenses', { ...valid, category: 'salud', description: 'farmacia' });

		const expenses = (await (await call('/expenses?category=salud')).json()) as Expense[];
		expect(expenses).toHaveLength(1);
		expect(expenses[0]?.description).toBe('farmacia');
	});

	test('updates an expense', async () => {
		const created = (await (await postJson('/expenses', valid)).json()) as Expense;

		const response = await putJson(`/expenses/${created.id}`, {
			...valid,
			amount: 20,
			description: 'Almuerzo actualizado',
		});

		expect(response.status).toBe(200);
		const expenses = (await (await call('/expenses')).json()) as Expense[];
		expect(expenses[0]?.amount).toBe(20);
		expect(expenses[0]?.description).toBe('Almuerzo actualizado');
	});

	test('deletes an expense', async () => {
		const created = (await (await postJson('/expenses', valid)).json()) as Expense;

		const response = await call(`/expenses/${created.id}`, { method: 'DELETE' });
		expect(response.status).toBe(204);
		expect(await (await call('/expenses')).json()).toEqual([]);
	});

	test('404s when updating or deleting an unknown expense', async () => {
		const update = await putJson('/expenses/expenses_999', valid);
		expect(update.status).toBe(404);
		expect(((await update.json()) as { error: string }).error).toBe('Gasto no encontrado.');

		const remove = await call('/expenses/expenses_999', { method: 'DELETE' });
		expect(remove.status).toBe(404);
	});
});

describe('validation', () => {
	test('rejects a non-positive amount', async () => {
		const response = await postJson('/expenses', { ...valid, amount: 0 });

		expect(response.status).toBe(400);
		expect(((await response.json()) as { error: string }).error).toContain('mayor que 0');
	});

	test('rejects a category outside the vocabulary', async () => {
		const response = await postJson('/expenses', { ...valid, category: 'vivienda' });

		expect(response.status).toBe(400);
		expect(((await response.json()) as { error: string }).error).toContain('category');
	});

	test('rejects a malformed date', async () => {
		const response = await postJson('/expenses', { ...valid, date: '05/05/2025' });

		expect(response.status).toBe(400);
		expect(((await response.json()) as { error: string }).error).toContain('AAAA-MM-DD');
	});

	test('rejects an empty description', async () => {
		const response = await postJson('/expenses', { ...valid, description: '   ' });

		expect(response.status).toBe(400);
	});

	test('errors are always an { error } object, never a raw ZodError', async () => {
		const response = await postJson('/expenses', {});

		expect(response.status).toBe(400);
		const body = (await response.json()) as Record<string, unknown>;
		expect(typeof body.error).toBe('string');
		expect(body.issues).toBeUndefined();
	});

	// A query validator with no error handler answers with hono's default raw
	// ZodError, which `errorMessage` on the client cannot read. This caught all
	// four query routes returning the wrong shape at once.
	test('a bad query param is an { error } object on every query route', async () => {
		for (const path of [
			'/expenses?month=septiembre',
			'/expenses?category=vivienda',
			'/expenses/stats?month=septiembre',
			'/budget?month=septiembre',
		]) {
			const response = await call(path);

			expect(response.status).toBe(400);
			const body = (await response.json()) as Record<string, unknown>;
			// The path is in the message so a failure names the offending route.
			expect(typeof body.error, path).toBe('string');
			expect(body.issues).toBeUndefined();
		}
	});
});

describe('stats', () => {
	test('is zeroed for a month with no expenses', async () => {
		const response = await call(`/expenses/stats?month=${month}`);

		expect(response.status).toBe(200);
		const stats = (await response.json()) as Stats;
		expect(stats.total).toBe(0);
		expect(stats.count).toBe(0);
		expect(stats.average).toBe(0);
		expect(stats.topCategory).toBeNull();
		expect(stats.byCategory).toEqual([]);
	});

	test('totals, averages and groups by category', async () => {
		await postJson('/expenses', { ...valid, amount: 10, category: 'comida', description: 'a' });
		await postJson('/expenses', { ...valid, amount: 30, category: 'comida', description: 'b' });
		await postJson('/expenses', { ...valid, amount: 20, category: 'salud', description: 'c' });

		const stats = (await (await call(`/expenses/stats?month=${month}`)).json()) as Stats;

		expect(stats.total).toBe(60);
		expect(stats.count).toBe(3);
		expect(stats.average).toBe(20);
		expect(stats.topCategory).toBe('comida');
		// Sorted by total, descending.
		expect(stats.byCategory.map((c) => c.category)).toEqual(['comida', 'salud']);
		expect(stats.byCategory[0]).toEqual({ category: 'comida', total: 40, count: 2 });
	});

	test('groups by day, in date order', async () => {
		await postJson('/expenses', { ...valid, amount: 5, date: `${month}-20` });
		await postJson('/expenses', { ...valid, amount: 7, date: `${month}-02` });

		const stats = (await (await call(`/expenses/stats?month=${month}`)).json()) as Stats;

		expect(stats.byDay).toEqual([
			{ date: `${month}-02`, total: 7 },
			{ date: `${month}-20`, total: 5 },
		]);
	});

	test('ignores expenses from other months', async () => {
		await postJson('/expenses', { ...valid, amount: 99, date: '2024-01-05' });

		const stats = (await (await call(`/expenses/stats?month=${month}`)).json()) as Stats;
		expect(stats.total).toBe(0);
	});

	test('defaults to the current month', async () => {
		const response = await call('/expenses/stats');

		const stats = (await response.json()) as Stats;
		expect(stats.month).toBe(month);
	});
});

describe('budget', () => {
	test('is null when unset', async () => {
		const response = await call(`/budget?month=${month}`);

		expect(response.status).toBe(200);
		expect(await response.json()).toBeNull();
	});

	test('sets a budget for a month', async () => {
		const response = await putJson('/budget', { month, amount: 500 });

		expect(response.status).toBe(200);
		const budget = (await (await call(`/budget?month=${month}`)).json()) as {
			month: string;
			amount: number;
		};
		expect(budget.amount).toBe(500);
	});

	test('replaces rather than accumulates on a second write', async () => {
		await putJson('/budget', { month, amount: 500 });
		await putJson('/budget', { month, amount: 800 });

		const budget = (await (await call(`/budget?month=${month}`)).json()) as {
			amount: number;
		};
		expect(budget.amount).toBe(800);

		const rows = getDb()
			.query<{ count: number }, []>('SELECT COUNT(*) AS count FROM budgets')
			.get();
		expect(rows?.count).toBe(1);
	});

	test('keeps budgets for different months apart', async () => {
		await putJson('/budget', { month, amount: 500 });
		await putJson('/budget', { month: '2024-01', amount: 300 });

		const other = (await (await call('/budget?month=2024-01')).json()) as { amount: number };
		expect(other.amount).toBe(300);
	});

	test('defaults to the current month', async () => {
		await putJson('/budget', { month, amount: 500 });

		const budget = (await (await call('/budget')).json()) as { month: string };
		expect(budget.month).toBe(month);
	});

	test('rejects a negative budget', async () => {
		const response = await putJson('/budget', { month, amount: -1 });

		expect(response.status).toBe(400);
		expect(((await response.json()) as { error: string }).error).toContain('negativo');
	});

	test('rejects a malformed month', async () => {
		const response = await putJson('/budget', { month: 'septiembre', amount: 100 });

		expect(response.status).toBe(400);
		expect(((await response.json()) as { error: string }).error).toContain('AAAA-MM');
	});
});
