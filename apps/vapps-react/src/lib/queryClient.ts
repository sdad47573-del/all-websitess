import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';

export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error: any) => {
			// PGRST303 is the code for JWT expired in PostgREST (Supabase)
			if (error?.message === 'JWT expired' || error?.code === 'PGRST303') {
				window.dispatchEvent(new CustomEvent('supabase-auth-error', { detail: error }));
			}
		},
	}),
	mutationCache: new MutationCache({
		onError: (error: any) => {
			if (error?.message === 'JWT expired' || error?.code === 'PGRST303') {
				window.dispatchEvent(new CustomEvent('supabase-auth-error', { detail: error }));
			}
		},
	}),
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5, // 5 minutes
			gcTime: 1000 * 60 * 60 * 24, // 24 hours
			refetchOnWindowFocus: false,
			retry: (failureCount, error: any) => {
				if (error?.message === 'JWT expired' || error?.code === 'PGRST303') {
					return false;
				}
				if (error?.status === 401) {
					return false;
				}
				return failureCount < 3;
			},
			retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
		},
	},
});
