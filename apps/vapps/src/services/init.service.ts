import { getClient } from 'supabase-sdk';

/**
 * Initialize MSW server if in staging environment
 */
export function initMockServer() {
	if (process.env.NODE_ENV === 'staging') {
		// server.listen();
		console.log('⚡ MSW Server corriendo en staging');
	}
}

export const supabaseBrowserClient = (() => {
	return getClient(import.meta.env.PUBLIC_SUPABASE_URL, import.meta.env.PUBLIC_SERVICE_ROLE_KEY);
})();

export const supabaseServerClient = (() => {
	return getClient(import.meta.env.PUBLIC_SUPABASE_URL, import.meta.env.PUBLIC_SUPABASE_SECRET_KEY);
})();
