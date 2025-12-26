import type { Session, User } from '@supabase/supabase-js';
import { useQueryClient } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { createContext, useCallback, useContext, useEffect, useRef } from 'react';
import type { Database } from 'supabase-sdk';
import Toastify from 'toastify-js';
import { useCurrentUserWithProfile, useSession, useSignOut } from '../hooks';
import { supabaseBrowserClient } from '../services/init.service';

type Profile = Database['public']['Tables']['profiles']['Row'];

interface AuthContextType {
	user: User | null;
	session: Session | null;
	profile: Profile | null;
	loading: boolean;
	signOut: (manual?: boolean) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const queryClient = useQueryClient();
	const isManualSignOut = useRef(false);

	const { data: authData, isLoading: authLoading } = useCurrentUserWithProfile();
	const { data: session, isLoading: sessionLoading } = useSession();
	const signOutMutation = useSignOut();

	const user = authData?.user ?? null;
	const profile = authData?.profile ?? null;
	const loading = authLoading || sessionLoading;

	const signOut = useCallback(
		async (manual = true) => {
			isManualSignOut.current = manual;
			await signOutMutation.mutateAsync();
		},
		[signOutMutation],
	);

	useEffect(() => {
		const handleAuthError = (e: Event) => {
			const error = (e as CustomEvent).detail;
			if (error?.message === 'JWT expired' || error?.code === 'PGRST303') {
				signOut(false);
			}
		};

		window.addEventListener('supabase-auth-error', handleAuthError);
		return () => window.removeEventListener('supabase-auth-error', handleAuthError);
	}, [signOut]);

	// Handle cookies and invalidation on auth changes
	useEffect(() => {
		const {
			data: { subscription },
		} = supabaseBrowserClient.auth.onAuthStateChange(async (event, session) => {
			console.log('[AuthContext] Auth state change:', event);

			if (event === 'SIGNED_OUT' && !session && !isManualSignOut.current) {
				Toastify({
					text: 'Tu sesión ha caducado. Por favor, vuelve a entrar.',
					duration: 5000,
					gravity: 'top',
					position: 'right',
					style: { background: 'linear-gradient(to right, #f59e0b, #d97706)' },
					className: 'rounded-lg shadow-lg font-medium',
				}).showToast();
			}

			if (
				event === 'SIGNED_IN' ||
				event === 'SIGNED_OUT' ||
				event === 'USER_UPDATED' ||
				event === 'TOKEN_REFRESHED'
			) {
				queryClient.invalidateQueries({ queryKey: ['auth'] });
			}
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [queryClient]);

	return (
		<AuthContext.Provider value={{ user, session: session ?? null, profile, loading, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}
