import { getClient, server } from 'supabase-sdk';

/**
 * Initialize MSW server if in staging environment
 */
export function initMockServer() {
	if (process.env.NODE_ENV === 'staging') {
		server.listen();
		console.log('⚡ MSW Server corriendo en staging');
	}
}

export const supabaseClient = (() => {
	initMockServer();
	return getClient(import.meta.env.PUBLIC_SUPABASE_URL, import.meta.env.SUPABASE_SECRET_KEY);
})();
