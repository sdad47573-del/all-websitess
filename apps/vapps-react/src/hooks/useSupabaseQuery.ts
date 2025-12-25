import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

export interface SupabaseResponse<T> {
	data: T | null | undefined;
	error: unknown;
}

/**
 * A generic hook to wrap Supabase queries with TanStack Query.
 * Reduces boilerplate for error handling and query function definition.
 */
export function useSupabaseQuery<TQueryFnData, TData = TQueryFnData | null | undefined>(
	queryKey: unknown[],
	queryFn: () => Promise<SupabaseResponse<TQueryFnData>>,
	options?: Omit<
		UseQueryOptions<TQueryFnData | null | undefined, unknown, TData, unknown[]>,
		'queryKey' | 'queryFn'
	>,
) {
	return useQuery({
		queryKey,
		queryFn: async () => {
			const { data, error } = await queryFn();
			if (error) {
				console.error(`Error in query [${queryKey.join(', ')}]:`, error);
				throw error;
			}
			return data;
		},
		...options,
	});
}
