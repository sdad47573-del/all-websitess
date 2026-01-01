import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
	useAuthData,
	useCurrentUser,
	useCurrentUserWithProfile,
	useHasRole,
	useIsAdmin,
	useSession,
	useUserProfile,
} from '../useAuthQueries';
import * as authService from '../../services/auth.service';

vi.mock('../../services/auth.service', () => ({
	getCurrentUser: vi.fn(() =>
		Promise.resolve({ user: { id: 'u1', email: 'u1@test.com' } as any, error: null }),
	),
	getSession: vi.fn(() => Promise.resolve({ session: null, error: null })),
	getUserProfile: vi.fn((userId: string) =>
		Promise.resolve({ profile: { id: userId, full_name: 'User' } as any, error: null }),
	),
	getCurrentUserWithProfile: vi.fn(() =>
		Promise.resolve({
			user: { id: 'u1', email: 'u1@test.com' } as any,
			profile: { id: 'u1', full_name: 'User' } as any,
			error: null,
		}),
	),
	createProfile: vi.fn((userId: string, name: string) =>
		Promise.resolve({ profile: { id: userId, full_name: name } as any, error: null }),
	),
	hasRole: vi.fn(() => Promise.resolve(true)),
	isAdmin: vi.fn(() => Promise.resolve(true)),
}));

function createWrapper() {
	const client = new QueryClient({
		defaultOptions: {
			queries: { retry: false },
		},
	});
	return ({ children }: { children: React.ReactNode }) => (
		<QueryClientProvider client={client}>{children}</QueryClientProvider>
	);
}

describe('useAuthQueries', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('useCurrentUser retorna usuario', async () => {
		const { result } = renderHook(() => useCurrentUser(), { wrapper: createWrapper() });
		await waitFor(() => {
			expect((result.current.data as any)?.id).toBe('u1');
		});
	});

	it('useHasRole retorna boolean', async () => {
		const { result } = renderHook(() => useHasRole('u1', 'admin' as any), {
			wrapper: createWrapper(),
		});
		await waitFor(() => {
			expect(result.current.data).toBe(true);
		});
	});

	it('useHasRole no ejecuta cuando userId es undefined', async () => {
		const spy = vi.spyOn(authService, 'hasRole');
		const { result } = renderHook(() => useHasRole(undefined, 'admin' as any), {
			wrapper: createWrapper(),
		});
		expect(spy).not.toHaveBeenCalled();
		expect(result.current.data).toBeUndefined();
		spy.mockRestore();
	});

	it('useSession retorna sesión', async () => {
		vi.mocked(authService.getSession).mockResolvedValueOnce({
			session: { access_token: 't', user: { id: 'u1', email: 'u1@test.com' } } as any,
			error: null,
		});
		const { result } = renderHook(() => useSession(), { wrapper: createWrapper() });
		await waitFor(() => {
			expect((result.current.data as any)?.access_token).toBe('t');
		});
	});

	it('useUserProfile retorna perfil cuando userId está definido', async () => {
		vi.mocked(authService.getUserProfile).mockResolvedValueOnce({
			profile: { id: 'u1', full_name: 'User' } as any,
			error: null,
		});
		const { result } = renderHook(() => useUserProfile('u1'), { wrapper: createWrapper() });
		await waitFor(() => {
			expect((result.current.data as any)?.id).toBe('u1');
		});
	});

	it('useUserProfile no ejecuta cuando userId es undefined', () => {
		const spy = vi.spyOn(authService, 'getUserProfile');
		const { result } = renderHook(() => useUserProfile(undefined), { wrapper: createWrapper() });
		expect(spy).not.toHaveBeenCalled();
		expect(result.current.data).toBeUndefined();
		spy.mockRestore();
	});

	it('useCurrentUserWithProfile retorna usuario y perfil', async () => {
		vi.mocked(authService.getCurrentUserWithProfile).mockResolvedValueOnce({
			user: { id: 'u1', email: 'u1@test.com' } as any,
			profile: { id: 'u1', full_name: 'User' } as any,
			error: null,
		});
		const { result } = renderHook(() => useCurrentUserWithProfile(), { wrapper: createWrapper() });
		await waitFor(() => {
			const data = result.current.data as any;
			expect(data.user.id).toBe('u1');
			expect(data.profile.id).toBe('u1');
		});
	});

	it('useCurrentUserWithProfile crea perfil de respaldo cuando falta', async () => {
		const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
		vi.mocked(authService.getCurrentUserWithProfile).mockResolvedValueOnce({
			user: {
				id: 'u2',
				email: 'u2@test.com',
				user_metadata: { full_name: 'Name', role: 'seller' },
			} as any,
			profile: null,
			error: null,
		});
		vi.mocked(authService.createProfile).mockResolvedValueOnce({
			profile: { id: 'u2', full_name: 'Name' } as any,
			error: null,
		});
		const { result } = renderHook(() => useCurrentUserWithProfile(), { wrapper: createWrapper() });
		await waitFor(() => {
			const data = result.current.data as any;
			expect(data.user.id).toBe('u2');
			expect(data.profile.id).toBe('u2');
		});
		expect(warnSpy).toHaveBeenCalled();
		expect(logSpy).toHaveBeenCalled();
		warnSpy.mockRestore();
		logSpy.mockRestore();
	});

	it('useAuthData retorna todo nulo si no hay sesión', async () => {
		vi.mocked(authService.getSession).mockResolvedValueOnce({ session: null, error: null });
		const { result } = renderHook(() => useAuthData(), { wrapper: createWrapper() });
		await waitFor(() => {
			const data = result.current.data as any;
			expect(data.session).toBeNull();
			expect(data.user).toBeNull();
			expect(data.profile).toBeNull();
		});
	});

	it('useAuthData retorna sesión, usuario y perfil cuando existen', async () => {
		const session = { access_token: 't', user: { id: 'u3', email: 'u3@test.com' } } as any;
		vi.mocked(authService.getSession).mockResolvedValueOnce({ session, error: null });
		vi.mocked(authService.getCurrentUserWithProfile).mockResolvedValueOnce({
			user: session.user,
			profile: { id: 'u3', full_name: 'User3' } as any,
			error: null,
		});
		const { result } = renderHook(() => useAuthData(), { wrapper: createWrapper() });
		await waitFor(() => {
			const data = result.current.data as any;
			expect(data.session.access_token).toBe('t');
			expect(data.user.id).toBe('u3');
			expect(data.profile.id).toBe('u3');
		});
	});

	it('useAuthData crea perfil de respaldo cuando falta', async () => {
		const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
		const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
		const session = {
			access_token: 't',
			user: { id: 'u4', email: 'u4@test.com', user_metadata: { full_name: 'U4', role: 'seller' } },
		} as any;
		vi.mocked(authService.getSession).mockResolvedValueOnce({ session, error: null });
		vi.mocked(authService.getCurrentUserWithProfile).mockResolvedValueOnce({
			user: session.user,
			profile: null,
			error: null,
		});
		vi.mocked(authService.createProfile).mockResolvedValueOnce({
			profile: { id: 'u4', full_name: 'U4' } as any,
			error: null,
		});
		const { result } = renderHook(() => useAuthData(), { wrapper: createWrapper() });
		await waitFor(() => {
			const data = result.current.data as any;
			expect(data.session.access_token).toBe('t');
			expect(data.user.id).toBe('u4');
			expect(data.profile.id).toBe('u4');
		});
		expect(warnSpy).toHaveBeenCalled();
		expect(logSpy).toHaveBeenCalled();
		warnSpy.mockRestore();
		logSpy.mockRestore();
	});

	it('useAuthData captura error inesperado y expone error', async () => {
		const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
		const session = { access_token: 't', user: { id: 'u5', email: 'u5@test.com' } } as any;
		vi.mocked(authService.getSession).mockResolvedValueOnce({ session, error: null });
		vi.mocked(authService.getCurrentUserWithProfile).mockRejectedValueOnce(new Error('fail'));
		const { result } = renderHook(() => useAuthData(), { wrapper: createWrapper() });
		await waitFor(() => {
			expect(result.current.error).toBeTruthy();
		});
		expect(errorSpy).toHaveBeenCalled();
		errorSpy.mockRestore();
	});

	it('useIsAdmin retorna boolean', async () => {
		vi.mocked(authService.isAdmin).mockResolvedValueOnce(true);
		const { result } = renderHook(() => useIsAdmin(), { wrapper: createWrapper() });
		await waitFor(() => {
			expect(result.current.data).toBe(true);
		});
	});
});
