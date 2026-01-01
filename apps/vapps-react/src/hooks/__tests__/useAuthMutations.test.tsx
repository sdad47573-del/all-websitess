import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useSignIn, useSignOut, useSignUp } from '../useAuthMutations';

vi.mock('../../services/auth.service', () => ({
	signIn: vi.fn(() => Promise.resolve({ error: null })),
	signOut: vi.fn(() => Promise.resolve({ error: null })),
	signUp: vi.fn(() => Promise.resolve({ error: null })),
}));

function createClient() {
	return new QueryClient();
}

function createWrapper(client: QueryClient) {
	return ({ children }: { children: React.ReactNode }) => (
		<QueryClientProvider client={client}>{children}</QueryClientProvider>
	);
}

describe('useAuthMutations', () => {
	it('useSignIn invalida queries de auth en éxito', async () => {
		const client = createClient();
		const invalidateSpy = vi.spyOn(client, 'invalidateQueries');

		const { result } = renderHook(() => useSignIn(), { wrapper: createWrapper(client) });
		await result.current.mutateAsync(['email@example.com', 'secret'] as any);

		expect(invalidateSpy).toHaveBeenCalledWith(expect.objectContaining({ queryKey: ['auth'] }));
	});

	it('useSignOut limpia cache de auth e invalida auth', async () => {
		const client = createClient();
		const invalidateSpy = vi.spyOn(client, 'invalidateQueries');
		const setQueryDataSpy = vi.spyOn(client, 'setQueryData');

		const { result } = renderHook(() => useSignOut(), { wrapper: createWrapper(client) });
		await result.current.mutateAsync();

		expect(setQueryDataSpy).toHaveBeenCalledWith(['auth', 'user'], null);
		expect(setQueryDataSpy).toHaveBeenCalledWith(['auth', 'session'], null);
		expect(setQueryDataSpy).toHaveBeenCalledWith(['auth', 'profile'], null);
		expect(setQueryDataSpy).toHaveBeenCalledWith(['auth', 'user-profile'], null);
		expect(invalidateSpy).toHaveBeenCalledWith(expect.objectContaining({ queryKey: ['auth'] }));
	});

	it('useSignUp invalida queries de auth en éxito', async () => {
		const client = createClient();
		const invalidateSpy = vi.spyOn(client, 'invalidateQueries');

		const { result } = renderHook(() => useSignUp(), { wrapper: createWrapper(client) });
		await result.current.mutateAsync([{ email: 'e', password: 'p' }] as any);

		expect(invalidateSpy).toHaveBeenCalledWith(expect.objectContaining({ queryKey: ['auth'] }));
	});
});
