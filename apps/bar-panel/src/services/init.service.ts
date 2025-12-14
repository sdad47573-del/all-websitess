import { getClient } from 'supabase-sdk';

/**
 * Initialize MSW server if in staging environment
 */
export function initMockServer() {
	if (process.env.NODE_ENV === 'staging') {
		// TODO: hacer mocks con msw para no depender de supabase
		// server.listen();
		console.log('⚡ MSW Server corriendo en staging');
	}
}

export const supabaseClient = (() => {
	initMockServer();
	return getClient(import.meta.env.PUBLIC_SUPABASE_URL, import.meta.env.SUPABASE_SECRET_KEY);
})();
