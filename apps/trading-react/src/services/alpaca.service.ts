const BASE_URL = 'https://paper-api.alpaca.markets/v2';

const headers = {
	'APCA-API-KEY-ID': import.meta.env.VITE_ALPACA_API_KEY || '',
	'APCA-API-SECRET-KEY': import.meta.env.VITE_ALPACA_SECRET_KEY || '',
	'Content-Type': 'application/json',
};

async function request(endpoint: string, options: RequestInit = {}) {
	const response = await fetch(`${BASE_URL}${endpoint}`, {
		...options,
		headers: { ...headers, ...options.headers },
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(error.message || 'Alpaca API Request Failed');
	}

	return response.json();
}

export const alpacaService = {
	getAccount: () => request('/account'),
	getPositions: () => request('/positions'),
	getAssets: () => request('/assets'),
	getOrders: () => request('/orders'),
	submitOrder: (order: {
		symbol: string;
		qty: number;
		side: 'buy' | 'sell';
		type: 'market' | 'limit';
		time_in_force: 'day' | 'gtc';
		limit_price?: number;
	}) =>
		request('/orders', {
			method: 'POST',
			body: JSON.stringify(order),
		}),
};
