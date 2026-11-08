import { beforeEach, describe, expect, test } from 'bun:test';

import { getDb } from './db.js';
import app from './index.js';

/**
 * API tests.
 *
 * Run with `bun test`. `bun:sqlite` is a Bun builtin, so Bun's own runner is
 * used rather than vitest.
 *
 * Card payments are covered by the validation and ownership rules; the Stripe
 * calls themselves need a real key and a network call, so they are not exercised
 * here. What matters without a key is that the API reports payments as
 * unavailable rather than pretending they succeeded.
 */

process.env.DATABASE_PATH ??= ':memory:';

beforeEach(() => {
	getDb().exec('DELETE FROM orders; DELETE FROM id_sequence;');
});

function call(path: string, init?: RequestInit): Response | Promise<Response> {
	return app.request(`/api${path}`, init);
}

function postJson(path: string, body: unknown): Response | Promise<Response> {
	return call(path, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(body),
	});
}

interface Order {
	id: string;
	status: string;
	method: string;
	total: number;
	items: { label: string; amount: number }[];
}

const validOrder = {
	items: [{ label: '1 kg de Ternera', amount: 20 }],
	subtotal: 20,
	shipping: 0,
	total: 20,
	delivery: 'recogida',
};

/** The shape `/orders/stats` returns. */
interface Stats {
	total: number;
	paid: number;
	totalEur: number;
}

describe('health', () => {
	test('reports whether Stripe is configured', async () => {
		const response = await call('/health');
		const body = (await response.json()) as { ok: boolean; stripe: boolean };

		expect(response.status).toBe(200);
		expect(body.ok).toBe(true);
		// The suite runs without a key, so this must report false rather than
		// claiming card payments work.
		expect(typeof body.stripe).toBe('boolean');
	});
});

describe('orders', () => {
	test('starts empty', async () => {
		const response = await call('/orders');

		expect(response.status).toBe(200);
		expect(await response.json()).toEqual([]);
	});

	test('creates a pending order', async () => {
		const response = await postJson('/orders', validOrder);

		expect(response.status).toBe(201);
		const created = (await response.json()) as Order;
		expect(created.status).toBe('pending');
		expect(created.method).toBe('card');
		expect(created.items).toEqual(validOrder.items);
	});

	test('returns the stored items as a list, not as JSON text', async () => {
		await postJson('/orders', validOrder);

		const orders = (await (await call('/orders')).json()) as Order[];
		expect(Array.isArray(orders[0]?.items)).toBe(true);
		expect(orders[0]?.items[0]?.label).toBe('1 kg de Ternera');
	});

	test('lists newest first', async () => {
		const first = (await (await postJson('/orders', validOrder)).json()) as Order;
		const second = (await (
			await postJson('/orders', { ...validOrder, total: 30, subtotal: 30 })
		).json()) as Order;

		const orders = (await (await call('/orders')).json()) as Order[];
		expect(orders.map((order) => order.id)).toEqual([second.id, first.id]);
	});

	test('rejects a total that does not match the items', async () => {
		// The client quotes the total; a mismatch means the cart was tampered with.
		const response = await postJson('/orders', {
			...validOrder,
			subtotal: 20,
			shipping: 5,
			total: 20,
		});

		expect(response.status).toBe(400);
		expect(await response.json()).toEqual({
			error: expect.stringContaining('no coincide'),
		});
	});

	test('accepts a total that includes shipping', async () => {
		const response = await postJson('/orders', {
			...validOrder,
			subtotal: 20,
			shipping: 2.9,
			total: 22.9,
		});

		expect(response.status).toBe(201);
	});

	test('rejects an empty cart', async () => {
		const response = await postJson('/orders', { ...validOrder, items: [] });

		expect(response.status).toBe(400);
	});

	test('rejects an unknown delivery method', async () => {
		const response = await postJson('/orders', {
			...validOrder,
			delivery: 'teletransporte',
		});

		expect(response.status).toBe(400);
	});

	test('rejects a negative amount', async () => {
		const response = await postJson('/orders', {
			...validOrder,
			items: [{ label: 'x', amount: -5 }],
		});

		expect(response.status).toBe(400);
	});
});

describe('order stats', () => {
	test('counts nothing on an empty store', async () => {
		const response = await call('/orders/stats');

		expect(response.status).toBe(200);
		expect(await response.json()).toEqual({ total: 0, paid: 0, totalEur: 0 });
	});

	test('counts only paid orders towards revenue', async () => {
		await postJson('/orders', validOrder);
		await postJson('/orders', { ...validOrder, subtotal: 30, total: 30 });

		const pending = (await (await call('/orders/stats')).json()) as Stats;
		expect(pending).toEqual({ total: 2, paid: 0, totalEur: 0 });

		// Mark one as paid the way a confirmed Stripe payment would.
		const orders = (await (await call('/orders')).json()) as Order[];
		getDb().query("UPDATE orders SET status = 'paid' WHERE id = ?").run(orders[0]!.id);

		const paid = (await (await call('/orders/stats')).json()) as Stats;
		expect(paid.total).toBe(2);
		expect(paid.paid).toBe(1);
		expect(paid.totalEur).toBe(30);
	});
});

describe('checkout', () => {
	test('reports a missing order', async () => {
		const response = await postJson('/orders/orders_999/checkout', {
			origin: 'http://localhost:5173',
		});

		expect(response.status).toBe(404);
	});

	test('does not pretend a payment succeeded without Stripe', async () => {
		const created = (await (await postJson('/orders', validOrder)).json()) as Order;

		const response = await postJson(`/orders/${created.id}/checkout`, {
			origin: 'http://localhost:5173',
		});

		// Without STRIPE_SECRET_KEY this must fail loudly and readably, rather than
		// returning a fake checkout URL that would strand the customer.
		expect(response.status).toBe(503);
		const body = (await response.json()) as { error: string };
		expect(body.error).toContain('WhatsApp');
	});

	test('rejects a non-absolute origin', async () => {
		const created = (await (await postJson('/orders', validOrder)).json()) as Order;

		const response = await postJson(`/orders/${created.id}/checkout`, {
			origin: 'not-a-url',
		});

		expect(response.status).toBe(400);
	});
});

describe('payment confirmation', () => {
	test('rejects a session that does not belong to the order', async () => {
		const created = (await (await postJson('/orders', validOrder)).json()) as Order;
		getDb()
			.query('UPDATE orders SET stripe_session_id = ? WHERE id = ?')
			.run('cs_real_session', created.id);

		const response = await postJson(`/orders/${created.id}/confirm`, {
			sessionId: 'cs_someone_elses_session',
			orderId: created.id,
		});

		// Checked before any Stripe call, so this is a 400 even with no key.
		expect(response.status).toBe(400);
		expect(await response.json()).toEqual({
			error: expect.stringContaining('no corresponde'),
		});
	});

	test('reports a missing order', async () => {
		const response = await postJson('/orders/orders_999/confirm', {
			sessionId: 'cs_test',
			orderId: 'orders_999',
		});

		expect(response.status).toBe(404);
	});

	test('reports payments as unavailable without Stripe', async () => {
		const created = (await (await postJson('/orders', validOrder)).json()) as Order;

		const response = await postJson(`/orders/${created.id}/confirm`, {
			sessionId: 'cs_test',
			orderId: created.id,
		});

		expect(response.status).toBe(503);
	});
});

describe('migrations', () => {
	test('creates the orders table', () => {
		const tables = getDb()
			.query<{ name: string }, []>("SELECT name FROM sqlite_master WHERE type = 'table'")
			.all()
			.map((row) => row.name);

		expect(tables).toContain('orders');
		expect(tables).toContain('id_sequence');
	});
});
