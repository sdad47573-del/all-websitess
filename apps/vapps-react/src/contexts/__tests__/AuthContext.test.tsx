import { render, screen, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AuthProvider, useAuth } from '../AuthContext';
import { supabaseBrowserClient } from '../../services/init.service';
import Cookies from 'js-cookie';
import Toastify from 'toastify-js';

// Mock Cookies
vi.mock('js-cookie', () => ({
    default: {
        set: vi.fn(),
        get: vi.fn(),
        remove: vi.fn(),
    }
}));

// Mock Toastify
vi.mock('toastify-js', () => ({
    default: vi.fn(() => ({
        showToast: vi.fn(),
    }))
}));

// Mock init.service
vi.mock('../../services/init.service', () => {
    const mockAuth = {
        getSession: vi.fn(() => Promise.resolve({ data: { session: null }, error: null })),
        onAuthStateChange: vi.fn((cb) => {
            // Save callback to trigger manually in tests
            (globalThis as any).triggerAuthChange = cb;
            return {
                data: { subscription: { unsubscribe: vi.fn() } }
            };
        }),
        signOut: vi.fn(() => Promise.resolve({ error: null }))
    };

    const mockFrom = vi.fn(() => ({
        select: vi.fn(() => ({
            eq: vi.fn(() => ({
                single: vi.fn(() => Promise.resolve({ data: { full_name: 'Test Profile' }, error: null }))
            }))
        }))
    }));

    return {
        supabaseBrowserClient: {
            auth: mockAuth,
            from: mockFrom
        }
    };
});

const TestComponent = () => {
    const { user, profile, loading, signOut } = useAuth();
    if (loading) return <div data-testid="loading">Loading...</div>;
    return (
        <div>
            <div data-testid="user-email">{user ? user.email : 'No User'}</div>
            <div data-testid="profile-name">{profile ? profile.full_name : 'No Profile'}</div>
            <button data-testid="sign-out-btn" onClick={signOut}>Sign Out</button>
        </div>
    );
};

describe('AuthContext Full Coverage', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        (globalThis as any).triggerAuthChange = null;
    });

    it('shows loading state and resolves "No User"', async () => {
        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
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
            refresh_token: 'refresh-token'
        };

        (supabaseBrowserClient.auth.getSession as any).mockResolvedValue({
            data: { session: mockSession },
            error: null
        });

        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        await waitFor(() => {
            expect(screen.getByTestId('user-email').textContent).toBe('session@test.com');
            expect(screen.getByTestId('profile-name').textContent).toBe('Test Profile');
        });

        expect(Cookies.set).toHaveBeenCalledWith('sb-access-token', 'valid-token', expect.any(Object));
        expect(Cookies.set).toHaveBeenCalledWith('sb-refresh-token', 'refresh-token', expect.any(Object));
    });

    it('responds to SIGNED_IN event', async () => {
        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());

        const mockSession = {
            user: { id: '456', email: 'event@test.com' },
            access_token: 'event-token',
            refresh_token: 'event-refresh'
        };

        await act(async () => {
            (globalThis as any).triggerAuthChange('SIGNED_IN', mockSession);
        });

        expect(screen.getByTestId('user-email').textContent).toBe('event@test.com');
        expect(Cookies.set).toHaveBeenCalledWith('sb-access-token', 'event-token', expect.any(Object));
    });

    it('responds to SIGNED_OUT event and removes cookies', async () => {
        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());

        await act(async () => {
            (globalThis as any).triggerAuthChange('SIGNED_OUT', null);
        });

        expect(screen.getByTestId('user-email').textContent).toBe('No User');
        expect(Cookies.remove).toHaveBeenCalledWith('sb-access-token', { path: '/' });
        expect(Cookies.remove).toHaveBeenCalledWith('sb-refresh-token', { path: '/' });
    });

    it('shows Toastify when session expires (SIGNED_OUT not manual)', async () => {
        // Mocking cookie to simulate transition
        (Cookies.get as any).mockReturnValue('some-token');

        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());

        await act(async () => {
            (globalThis as any).triggerAuthChange('SIGNED_OUT', null);
        });

        expect(Toastify).toHaveBeenCalled();
    });

    it('does NOT show Toastify on manual signOut', async () => {
        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());

        const signoutBtn = screen.getByTestId('sign-out-btn');
        await act(async () => {
            signoutBtn.click();
        });

        expect(supabaseBrowserClient.auth.signOut).toHaveBeenCalled();
        expect(Toastify).not.toHaveBeenCalled();
    });

    it('updates cookies on TOKEN_REFRESHED', async () => {
        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());

        const mockSession = {
            user: { id: '456', email: 'refresh@test.com' },
            access_token: 'new-token',
            refresh_token: 'new-refresh'
        };

        await act(async () => {
            (globalThis as any).triggerAuthChange('TOKEN_REFRESHED', mockSession);
        });

        expect(Cookies.set).toHaveBeenCalledWith('sb-access-token', 'new-token', expect.any(Object));
    });

    it('handles INITIAL_SESSION with no session', async () => {
        render(
            <AuthProvider>
                <TestComponent />
            </AuthProvider>
        );

        await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());

        await act(async () => {
            (globalThis as any).triggerAuthChange('INITIAL_SESSION', null);
        });

        expect(screen.getByTestId('user-email').textContent).toBe('No User');
    });

    it('throws error when useAuth is used outside Provider', () => {
        // Suppress console.error for this test as it's expected
        const spy = vi.spyOn(console, 'error').mockImplementation(() => { });

        expect(() => render(<TestComponent />)).toThrow('useAuth must be used within an AuthProvider');

        spy.mockRestore();
    });
});
