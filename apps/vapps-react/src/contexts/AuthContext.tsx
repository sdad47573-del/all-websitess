import type { Session, User } from '@supabase/supabase-js';
import Cookies from 'js-cookie';
import type { ReactNode } from 'react';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import type { Database } from 'supabase-sdk';
import Toastify from 'toastify-js';
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
	const [user, setUser] = useState<User | null>(null);
	const [session, setSession] = useState<Session | null>(null);
	const [profile, setProfile] = useState<Profile | null>(null);
	const [loading, setLoading] = useState(true);
	const isManualSignOut = useRef(false);

	const signOut = useCallback(async (manual = true) => {
		isManualSignOut.current = manual;
		await supabaseBrowserClient.auth.signOut();
		Cookies.remove('sb-access-token', { path: '/' });
		Cookies.remove('sb-refresh-token', { path: '/' });
		setUser(null);
		setSession(null);
		setProfile(null);
	}, []);

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

	useEffect(() => {
		let mounted = true;
		const initialized = { current: false };

		const loadProfile = async (userId: string, userMetadata?: Record<string, any>) => {
			console.log('[AuthContext] Loading profile for:', userId);
			try {
				const { data, error } = await supabaseBrowserClient
					.from('profiles')
					.select('*')
					.eq('id', userId)
					.maybeSingle();

				if (error) {
					console.error('[AuthContext] Error loading profile:', error);
					return null;
				}

				if (data) {
					console.log('[AuthContext] Profile loaded successfully');
					return data;
				}

				console.warn('[AuthContext] Profile not found, attempting fallback creation');
				const { data: newProfile, error: insertError } = await (
					supabaseBrowserClient.from('profiles') as any
				)
					.insert({
						id: userId,
						full_name: (userMetadata?.full_name as string) || 'Usuario',
						role: (userMetadata?.role as any) || 'seller',
					})
					.select()
					.maybeSingle();

				if (insertError) {
					console.error('[AuthContext] Error creating fallback profile:', insertError);
					return null;
				}

				console.log('[AuthContext] Fallback profile created');
				return newProfile;
			} catch (error) {
				console.error('[AuthContext] Unexpected error loading profile:', error);
				return null;
			}
		};

		const handleSession = async (session: Session | null) => {
			if (!mounted) return;

			setSession(session);
			setUser(session?.user ?? null);

			if (session) {
				console.log('[AuthContext] Session found, loading profile');
				isManualSignOut.current = false;
				Cookies.set('sb-access-token', session.access_token, {
					path: '/',
					expires: 365,
					sameSite: 'lax',
					secure: import.meta.env.PROD,
				});
				Cookies.set('sb-refresh-token', session.refresh_token, {
					path: '/',
					expires: 365,
					sameSite: 'lax',
					secure: import.meta.env.PROD,
				});

				const profileData = await loadProfile(session.user.id, session.user.user_metadata);
				if (mounted) {
					if (!profileData) {
						console.error('[AuthContext] Failed to load or create profile');
						signOut(false);
						Toastify({
							text: 'No se pudo cargar tu perfil. Contacta con soporte.',
							duration: 5000,
							gravity: 'top',
							position: 'right',
							style: { background: '#ef4444' },
						}).showToast();
					} else {
						setProfile(profileData);
					}
					setLoading(false);
				}
			} else {
				console.log('[AuthContext] No session found');
				Cookies.remove('sb-access-token', { path: '/' });
				Cookies.remove('sb-refresh-token', { path: '/' });
				setProfile(null);
				setLoading(false);
			}
		};

		// Initial Check
		const init = async () => {
			console.log('[AuthContext] Initializing auth...');
			try {
				const {
					data: { session },
				} = await supabaseBrowserClient.auth.getSession();
				if (!initialized.current) {
					await handleSession(session);
					initialized.current = true;
				}
			} catch (error) {
				console.error('[AuthContext] Init error:', error);
				if (mounted) setLoading(false);
			}
		};

		init();

		// Listen for changes
		const {
			data: { subscription },
		} = supabaseBrowserClient.auth.onAuthStateChange(async (event, session) => {
			console.log('[AuthContext] Auth state change:', event);
			if (!mounted) return;

			if (event === 'SIGNED_OUT' || (event === 'INITIAL_SESSION' && !session)) {
				const token = Cookies.get('sb-access-token');
				if (token && event === 'SIGNED_OUT' && !isManualSignOut.current) {
					Toastify({
						text: 'Tu sesión ha caducado. Por favor, vuelve a entrar.',
						duration: 5000,
						gravity: 'top',
						position: 'right',
						style: { background: 'linear-gradient(to right, #f59e0b, #d97706)' },
						className: 'rounded-lg shadow-lg font-medium',
					}).showToast();
				}
			}

			if (
				event === 'SIGNED_IN' ||
				event === 'TOKEN_REFRESHED' ||
				(event === 'INITIAL_SESSION' && session)
			) {
				if (!initialized.current || event !== 'INITIAL_SESSION') {
					setLoading(true);
					await handleSession(session);
					initialized.current = true;
				}
			} else if (event === 'SIGNED_OUT') {
				await handleSession(null);
				initialized.current = true;
			}
		});

		return () => {
			mounted = false;
			subscription.unsubscribe();
		};
	}, [signOut]);

	return (
		<AuthContext.Provider value={{ user, session, profile, loading, signOut }}>
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
