import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { HTTPException } from 'hono/http-exception';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

import { getDb, nextId } from './db.js';
import { createCheckoutSession, isStripeConfigured, retrievePayment } from './stripe.js';

/**
 * This app's HTTP API.
 *
 * The app used to run on Convex, with orders in a Convex table and the Stripe
 * calls in Convex actions. That is replaced by Hono routes over SQLite, and
 * Stripe now runs here, where the secret key can live in the environment.
 *
 * Routes are declared in one chained expression on purpose: Hono carries each
 * route in a type parameter, and only the value returned by the chain has it.
 * Declaring them as separate `app.get(...)` statements would leave `AppType`
 * empty and the frontend client untyped.
 *
 * There is no auth. Orders are placed by anonymous shoppers, so nothing here
 * checks who is asking; the only gate on an order is that a pending order can
 * only be paid through Stripe.
 */

/** A single line on an order. */
export interface OrderItem {
	label: string;
	amount: number;
}

/** An order as the API returns it. */
export interface Order {
	id: string;
	createdAt: number;
	status: 'pending' | 'paid' | 'cancelled';
	method: 'card' | 'whatsapp';
	items: OrderItem[];
	subtotal: number;
	shipping: number;
	total: number;
	name?: string;
	phone?: string;
	delivery: 'recogida' | 'domicilio';
	time?: string;
	notes?: string;
	stripeSessionId?: string;
}

/** Aggregate figures for the dashboard. */
export interface OrderStats {
	total: number;
	paid: number;
	totalEur: number;
}

const orderItems = z.array(
	z.object({ label: z.string().min(1), amount: z.number().nonnegative() }),
);

const createOrderBody = z.object({
	items: orderItems.min(1, 'El pedido no puede estar vacío.'),
	subtotal: z.number().nonnegative(),
	shipping: z.number().nonnegative(),
	total: z.number().positive(),
	name: z.string().trim().max(120).optional(),
	delivery: z.enum(['recogida', 'domicilio']),
	time: z.string().trim().max(80).optional(),
	notes: z.string().trim().max(500).optional(),
});

const checkoutBody = z.object({ origin: z.string().url() });

const confirmBody = z.object({
	sessionId: z.string().min(1),
	orderId: z.string().min(1),
});

/** Normalises validation failures to the same `{ error }` shape as everything else. */
function validationMessage(error: z.core.$ZodError): string {
	return error.issues
		.map((issue) => {
			const field = issue.path.join('.');
			return field ? `${field}: ${issue.message}` : issue.message;
		})
		.join(' ');
}

/** Raises a 400 with a readable message, from anywhere inside a handler. */
function badRequest(message: string): never {
	throw new HTTPException(400, { message });
}

/** Reads every order, newest first. */
function allOrders(): Order[] {
	const rows = getDb()
		.query<Order & { items: string }, []>(
			`SELECT id, created_at AS createdAt, status, method, items, subtotal,
              shipping, total, name, phone, delivery, time, notes,
              stripe_session_id AS stripeSessionId
       FROM orders
       ORDER BY created_at DESC, rowid DESC`,
		)
		.all();

	return rows.map((row) => ({
		...row,
		// `items` is stored as JSON text; a malformed value must not take the
		// whole listing down, so it degrades to an empty cart.
		items: parseItems(row.items),
	}));
}

/** Parses a stored items column. */
function parseItems(raw: string): OrderItem[] {
	try {
		const parsed: unknown = JSON.parse(raw);
		return Array.isArray(parsed) ? (parsed as OrderItem[]) : [];
	} catch {
		return [];
	}
}

const app = new Hono()
	// The Vite dev server runs on another port, so the browser needs CORS in
	// development. In production everything is served from one origin.
	.use(
		'/api/*',
		cors({
			origin: (origin) => origin ?? '*',
			allowMethods: ['GET', 'POST', 'OPTIONS'],
		}),
	)
	.onError((error, c) => {
		if (error instanceof HTTPException) {
			return c.json({ error: error.message }, error.status as 400);
		}
		console.error('[api] unhandled error:', error);
		return c.json({ error: 'Internal server error' }, 500);
	})
	/** Health check, also reports whether card payments are usable. */
	.get('/api/health', (c) => c.json({ ok: true, stripe: isStripeConfigured() }))
	/** Lists orders, newest first. */
	.get('/api/orders', (c) => c.json(allOrders()))
	/** Aggregate figures for the dashboard. */
	.get('/api/orders/stats', (c) => {
		const orders = allOrders();
		const paid = orders.filter((order) => order.status === 'paid');
		const stats: OrderStats = {
			total: orders.length,
			paid: paid.length,
			totalEur: Math.round(paid.reduce((sum, order) => sum + order.total, 0)),
		};
		return c.json(stats);
	})
	/** Creates a pending order. */
	.post(
		'/api/orders',
		zValidator('json', createOrderBody, (result, c) => {
			if (!result.success) {
				return c.json({ error: validationMessage(result.error) }, 400);
			}
		}),
		(c) => {
			const body = c.req.valid('json');

			// The client computes the total from the cart. Re-checking it here stops
			// a tampered cart from being charged a different amount than quoted.
			const quoted = Math.round((body.subtotal + body.shipping) * 100);
			if (quoted !== Math.round(body.total * 100)) {
				badRequest('El total no coincide con los productos del pedido.');
			}

			const db = getDb();
			const order: Order = {
				id: nextId(db, 'orders'),
				createdAt: Date.now(),
				status: 'pending',
				method: 'card',
				items: body.items,
				subtotal: body.subtotal,
				shipping: body.shipping,
				total: body.total,
				name: body.name,
				delivery: body.delivery,
				time: body.time,
				notes: body.notes,
			};

			db.query(
				`INSERT INTO orders
           (id, created_at, status, method, items, subtotal, shipping, total,
            name, phone, delivery, time, notes)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
			).run(
				order.id,
				order.createdAt,
				order.status,
				order.method,
				JSON.stringify(order.items),
				order.subtotal,
				order.shipping,
				order.total,
				order.name ?? null,
				null,
				order.delivery,
				order.time ?? null,
				order.notes ?? null,
			);

			return c.json(order, 201);
		},
	)
	/** Starts a Stripe checkout for a pending order and returns the URL. */
	.post(
		'/api/orders/:id/checkout',
		zValidator('json', checkoutBody, (result, c) => {
			if (!result.success) {
				return c.json({ error: validationMessage(result.error) }, 400);
			}
		}),
		async (c) => {
			const id = c.req.param('id');
			const { origin } = c.req.valid('json');

			const order = allOrders().find((row) => row.id === id);
			if (!order) return c.json({ error: 'Pedido no encontrado.' }, 404);
			if (order.status !== 'pending') {
				return c.json({ error: 'Este pedido ya no admite pago.' }, 409);
			}

			// Reported as a 503 with a readable message so the shop can show the
			// customer "pide por WhatsApp" instead of a generic failure.
			if (!isStripeConfigured()) {
				return c.json(
					{
						error: 'El pago con tarjeta no está disponible. Pide por WhatsApp y te lo preparamos.',
					},
					503,
				);
			}

			const session = await createCheckoutSession(order, origin);

			getDb()
				.query('UPDATE orders SET stripe_session_id = ? WHERE id = ?')
				.run(session.sessionId, id);

			return c.json({ url: session.url });
		},
	)
	/** Confirms a payment by asking Stripe, then marks the order paid. */
	.post(
		'/api/orders/:id/confirm',
		zValidator('json', confirmBody, (result, c) => {
			if (!result.success) {
				return c.json({ error: validationMessage(result.error) }, 400);
			}
		}),
		async (c) => {
			const id = c.req.param('id');
			const { sessionId } = c.req.valid('json');

			const order = allOrders().find((row) => row.id === id);
			if (!order) return c.json({ error: 'Pedido no encontrado.' }, 404);

			// The session must be the one this order was given. Without this check a
			// customer could pay for a cheap order and claim a dear one as paid.
			if (order.stripeSessionId && order.stripeSessionId !== sessionId) {
				return c.json({ error: 'La sesión de pago no corresponde a este pedido.' }, 400);
			}

			if (!isStripeConfigured()) {
				return c.json({ error: 'El pago con tarjeta no está disponible.' }, 503);
			}

			const payment = await retrievePayment(sessionId);

			if (payment.paid) {
				getDb().query("UPDATE orders SET status = 'paid' WHERE id = ?").run(id);
			}

			return c.json({ paid: payment.paid, amountTotal: payment.amountTotal });
		},
	);

export default app;

/** The API's shape, for the frontend to build a typed client. */
export type AppType = typeof app;
