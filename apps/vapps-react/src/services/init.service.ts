import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from 'supabase-sdk';
import { getClient } from 'supabase-sdk';

/**
 * Initialize MSW server if in staging environment
 */
// export function initMockServer() {
// 	if (process.env.NODE_ENV === 'staging') {
// 		// server.listen();
// 		console.log('⚡ MSW Server corriendo en staging');
// 	}
// }

// export function initMock() {
// 	if (import.meta.env.NODE_ENV === 'staging') {
// 		// server.listen();
// 		console.log('⚡ MSW Server corriendo en staging');
// 	}
// }
export const supabaseBrowserClient: SupabaseClient<Database> = (() => {
	return getClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);
})();

export const supabaseServerClient: SupabaseClient<Database> = (() => {
	return getClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_SECRET_KEY);
})();
