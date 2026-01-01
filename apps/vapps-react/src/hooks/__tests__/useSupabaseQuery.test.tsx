import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useSupabaseQuery } from '../useSupabaseQuery';

function createWrapper() {
	const client = new QueryClient();
	return ({ children }: { children: React.ReactNode }) => (
		<QueryClientProvider client={client}>{children}</QueryClientProvider>
	);
}

describe('useSupabaseQuery', () => {
	it('retorna datos en éxito', async () => {
		const queryFn = vi.fn().mockResolvedValue({ data: 123, error: null });
		const { result } = renderHook(
			() => useSupabaseQuery<number>(['test', 'ok'], async () => queryFn()),
			{ wrapper: createWrapper() },
		);
		await waitFor(() => {
			expect(result.current.data).toBe(123);
		});
	});

	it('expone error cuando queryFn falla', async () => {
		const error = new Error('fail');
		const queryFn = vi.fn().mockResolvedValue({ data: null, error });
		const { result } = renderHook(
			() => useSupabaseQuery<number>(['test', 'error'], async () => queryFn(), { retry: false }),
			{ wrapper: createWrapper() },
		);
		await waitFor(() => {
			expect(result.current.error).toBeTruthy();
		});
	});
});
