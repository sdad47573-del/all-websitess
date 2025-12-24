import type { Session, User } from '@supabase/supabase-js';
import Cookies from 'js-cookie';
import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState, useRef } from 'react';
import Toastify from 'toastify-js';
import type { Database } from 'supabase-sdk';
import { supabaseBrowserClient } from '../services/init.service';

type Profile = Database['public']['Tables']['profiles']['Row'];

interface AuthContextType {
	user: User | null;
	session: Session | null;
	profile: Profile | null;
	loading: boolean;
	signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [session, setSession] = useState<Session | null>(null);
	const [profile, setProfile] = useState<Profile | null>(null);
	const [loading, setLoading] = useState(true);
	const isManualSignOut = useRef(false);

	useEffect(() => {
		// Get initial session
		supabaseBrowserClient.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
			setUser(session?.user ?? null);

			// Store tokens in cookies
			if (session) {
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

				// Fetch user profile
				supabaseBrowserClient
					.from('profiles')
					.select('*')
					.eq('id', session.user.id)
					.single()
					.then(({ data }) => {
						setProfile(data);
						setLoading(false);
					});
			} else {
				setLoading(false);
			}
		});

		// Listen for auth changes
		const {
			data: { subscription },
		} = supabaseBrowserClient.auth.onAuthStateChange((event, session) => {
			setSession(session);
			setUser(session?.user ?? null);

			if (session) {
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

				// Fetch user profile
				supabaseBrowserClient
					.from('profiles')
					.select('*')
					.eq('id', session.user.id)
					.single()
					.then(({ data }) => {
						setProfile(data);
					});
			} else {
				// If session was lost (event SIGNED_OUT or TOKEN_REFRESHED failed)
				if (event === 'SIGNED_OUT' || (event === 'INITIAL_SESSION' && !session)) {
					// We only show toast if there was a previous session or if it's an explicit signed out event
					// and it's NOT a manual sign out
					const token = Cookies.get('sb-access-token');
					if (token && event === 'SIGNED_OUT' && !isManualSignOut.current) {
						Toastify({
							text: 'Tu sesión ha caducado. Por favor, vuelve a entrar.',
							duration: 5000,
							gravity: 'top',
							position: 'right',
							style: {
								background: 'linear-gradient(to right, #f59e0b, #d97706)',
							},
							className: 'rounded-lg shadow-lg font-medium',
						}).showToast();
					}
				}

				Cookies.remove('sb-access-token', { path: '/' });
				Cookies.remove('sb-refresh-token', { path: '/' });
				setProfile(null);
			}
		});

		return () => subscription.unsubscribe();
	}, []);

	const signOut = async () => {
		isManualSignOut.current = true;
		await supabaseBrowserClient.auth.signOut();
		Cookies.remove('sb-access-token', { path: '/' });
		Cookies.remove('sb-refresh-token', { path: '/' });
		setUser(null);
		setSession(null);
		setProfile(null);
	};

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
