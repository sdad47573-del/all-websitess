import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, screen, waitFor } from '@testing-library/react';
import Toastify from 'toastify-js';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AuthProvider, useAuth } from '../AuthContext';

// Mock Toastify
vi.mock('toastify-js', () => ({
	default: vi.fn(() => ({
		showToast: vi.fn(),
	})),
}));

// Mock auth.service
vi.mock('../../services/auth.service', () => ({
	getCurrentUserWithProfile: vi.fn(() =>
		Promise.resolve({ user: null, profile: null, error: null }),
	),
	getSession: vi.fn(() => Promise.resolve({ session: null, error: null })),
	signOut: vi.fn(() => Promise.resolve({ error: null })),
}));

// Mock init.service
vi.mock('../../services/init.service', () => {
	return {
		supabaseBrowserClient: {
			auth: {
				onAuthStateChange: vi.fn((cb) => {
					(globalThis as any).triggerAuthChange = cb;
					return {
						data: { subscription: { unsubscribe: vi.fn() } },
					};
				}),
				signOut: vi.fn(() => Promise.resolve({ error: null })),
			},
		},
	};
});

import * as authService from '../../services/auth.service';

const TestComponent = () => {
	const { user, profile, loading, signOut } = useAuth();
	if (loading) return <div data-testid="loading">Loading...</div>;
	return (
		<div>
			<div data-testid="user-email">{user ? user.email : 'No User'}</div>
			<div data-testid="profile-name">{profile ? profile.full_name : 'No Profile'}</div>
			<button data-testid="sign-out-btn" onClick={() => signOut()}>
				Sign Out
			</button>
		</div>
	);
};

const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});

describe('AuthContext Full Coverage', () => {
	let queryClient: QueryClient;

	beforeEach(() => {
		vi.clearAllMocks();
		(globalThis as any).triggerAuthChange = null;
		queryClient = createTestQueryClient();
		vi.mocked(authService.getSession).mockResolvedValue({ session: null, error: null });
		vi.mocked(authService.getCurrentUserWithProfile).mockResolvedValue({
			user: null,
			profile: null,
			error: null,
		});
	});

	it('shows loading state and resolves "No User"', async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<TestComponent />
				</AuthProvider>
			</QueryClientProvider>,
		);
		expect(screen.getByTestId('loading')).toBeDefined();

		await waitFor(() => {
			expect(screen.queryByTestId('loading')).toBeNull();
		});
		expect(screen.getByTestId('user-email').textContent).toBe('No User');
	});

	it('handles initial session and fetches profile', async () => {
		const mockSession = {
			user: { id: '123', email: 'session@test.com' },
			access_token: 'valid-token',
			refresh_token: 'refresh-token',
		};

		vi.mocked(authService.getSession).mockResolvedValue({
			session: mockSession as any,
			error: null,
		});
		vi.mocked(authService.getCurrentUserWithProfile).mockResolvedValue({
			user: mockSession.user as any,
			profile: { full_name: 'Test Profile' } as any,
			error: null,
		});

		render(
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<TestComponent />
				</AuthProvider>
			</QueryClientProvider>,
		);

		await waitFor(() => {
			expect(screen.getByTestId('user-email').textContent).toBe('session@test.com');
			expect(screen.getByTestId('profile-name').textContent).toBe('Test Profile');
		});
	});

	it('responds to SIGNED_IN event', async () => {
		const mockSession = {
			user: { id: '456', email: 'event@test.com' },
			access_token: 'event-token',
			refresh_token: 'event-refresh',
		};

		render(
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<TestComponent />
				</AuthProvider>
			</QueryClientProvider>,
		);

		await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());

		vi.mocked(authService.getSession).mockResolvedValue({
			session: mockSession as any,
			error: null,
		});
		vi.mocked(authService.getCurrentUserWithProfile).mockResolvedValue({
			user: mockSession.user as any,
			profile: { full_name: 'Test Profile' } as any,
			error: null,
		});

		await act(async () => {
			(globalThis as any).triggerAuthChange('SIGNED_IN', mockSession);
		});

		await waitFor(() => {
			expect(screen.getByTestId('user-email').textContent).toBe('event@test.com');
		});
	});

	it('responds to SIGNED_OUT event and removes cookies', async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<TestComponent />
				</AuthProvider>
			</QueryClientProvider>,
		);

		await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());

		await act(async () => {
			(globalThis as any).triggerAuthChange('SIGNED_OUT', null);
		});

		expect(screen.getByTestId('user-email').textContent).toBe('No User');
	});

	it('shows Toastify when session expires (SIGNED_OUT not manual)', async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<TestComponent />
				</AuthProvider>
			</QueryClientProvider>,
		);

		await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());

		await act(async () => {
			(globalThis as any).triggerAuthChange('SIGNED_OUT', null);
		});

		expect(Toastify).toHaveBeenCalled();
	});

	it('does NOT show Toastify on manual signOut', async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<TestComponent />
				</AuthProvider>
			</QueryClientProvider>,
		);

		await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());

		const signoutBtn = screen.getByTestId('sign-out-btn');
		await act(async () => {
			signoutBtn.click();
		});

		expect(authService.signOut).toHaveBeenCalled();
		expect(Toastify).not.toHaveBeenCalled();
	});

	it('responds to TOKEN_REFRESHED', async () => {
		const mockSession = {
			user: { id: '456', email: 'refresh@test.com' },
			access_token: 'new-token',
			refresh_token: 'new-refresh',
		};

		render(
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<TestComponent />
				</AuthProvider>
			</QueryClientProvider>,
		);

		await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());

		vi.mocked(authService.getSession).mockResolvedValue({
			session: mockSession as any,
			error: null,
		});
		vi.mocked(authService.getCurrentUserWithProfile).mockResolvedValue({
			user: mockSession.user as any,
			profile: { full_name: 'Test Profile' } as any,
			error: null,
		});

		await act(async () => {
			(globalThis as any).triggerAuthChange('TOKEN_REFRESHED', mockSession);
		});

		await waitFor(() => {
			expect(screen.getByTestId('user-email').textContent).toBe('refresh@test.com');
		});
	});

	it('handles INITIAL_SESSION with no session', async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<TestComponent />
				</AuthProvider>
			</QueryClientProvider>,
		);

		await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());

		await act(async () => {
			(globalThis as any).triggerAuthChange('INITIAL_SESSION', null);
		});

		expect(screen.getByTestId('user-email').textContent).toBe('No User');
	});

	it('throws error when useAuth is used outside Provider', () => {
		// Suppress console.error for this test as it's expected
		const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

		expect(() => render(<TestComponent />)).toThrow('useAuth must be used within an AuthProvider');

		spy.mockRestore();
	});
});
