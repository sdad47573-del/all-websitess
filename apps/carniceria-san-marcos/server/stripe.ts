/**
 * Card payments through Stripe.
 *
 * The Stripe secret key lives here, on the server, and is read from
 * `STRIPE_SECRET_KEY`. This is the part that could not exist while the backend
 * was Convex-hosted, where the key would have to be a deployment env var.
 *
 * The client is created lazily and memoised: constructing it at module load
 * would throw on start-up when the key is not configured, which would make the
 * rest of the API unstartable for anyone who just wants to browse.
 */

import Stripe from 'stripe';

import type { Order, OrderItem } from './index.js';

let client: Stripe | null = null;

/** Whether a Stripe secret key is configured. */
export function isStripeConfigured(): boolean {
	return Boolean(process.env.STRIPE_SECRET_KEY);
}

/** Returns the Stripe client, or `null` when no key is configured. */
export function stripeClient(): Stripe | null {
	if (!isStripeConfigured()) return null;
	if (!client) {
		client = new Stripe(process.env.STRIPE_SECRET_KEY as string);
	}
	return client;
}

/**
 * Creates a Stripe Checkout session for a pending order.
 *
 * `origin` is used to build the return URLs, so the customer lands back on the
 * shop whether it is running on localhost or a deployed domain.
 */
export async function createCheckoutSession(
	order: Order,
	origin: string,
): Promise<{ url: string; sessionId: string }> {
	const stripe = stripeClient();
	if (!stripe) {
		throw new Error(
			'Stripe no está configurado. Define STRIPE_SECRET_KEY para cobrar con tarjeta.',
		);
	}

	const session = await stripe.checkout.sessions.create({
		mode: 'payment',
		line_items: [
			...order.items.map((item) => ({
				price_data: {
					currency: 'eur',
					product_data: { name: item.label },
					// Stripe works in cents, and the shop's amounts are in euros.
					unit_amount: Math.round(item.amount * 100),
				},
				quantity: 1,
			})),
			// Shipping is a line item rather than a separate charge so the Stripe
			// total always matches the order total shown to the customer.
			...(order.shipping > 0
				? [
						{
							price_data: {
								currency: 'eur',
								product_data: { name: 'Envío' },
								unit_amount: Math.round(order.shipping * 100),
							},
							quantity: 1,
						},
					]
				: []),
		],
		success_url: `${origin}/pago?session_id={CHECKOUT_SESSION_ID}&order=${order.id}`,
		cancel_url: `${origin}/?cancelado=1#catalogo`,
		metadata: { orderId: order.id },
	});

	if (!session.url) {
		throw new Error('Stripe no devolvió una URL de pago.');
	}

	return { url: session.url, sessionId: session.id };
}

/** What Stripe says about a checkout session. */
export interface PaymentState {
	paid: boolean;
	amountTotal: number | null;
}

/**
 * Reads the payment state of a session from Stripe.
 *
 * The session is fetched from the provider rather than trusted from the query
 * string, so a customer cannot mark their own order as paid by editing a URL.
 */
export async function retrievePayment(sessionId: string): Promise<PaymentState> {
	const stripe = stripeClient();
	if (!stripe) {
		throw new Error('Stripe no está configurado.');
	}

	const session = await stripe.checkout.sessions.retrieve(sessionId);
	return {
		paid: session.payment_status === 'paid',
		amountTotal: session.amount_total === null ? null : session.amount_total / 100,
	};
}

/** Convenience for building a line item list in tests. */
export type { OrderItem };
