import React, { createContext, useContext, useEffect, useState } from 'react';
import { type User, type Session } from '@supabase/supabase-js';
import { supabaseBrowserClient } from '../services/init.service';
import Cookies from 'js-cookie';
import type { Database } from 'supabase-sdk';

type Profile = Database['public']['Tables']['profiles']['Row'];

interface AuthContextType {
	user: User | null;
	session: Session | null;
	profile: Profile | null;
	loading: boolean;
	signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [session, setSession] = useState<Session | null>(null);
	const [profile, setProfile] = useState<Profile | null>(null);
	const [loading, setLoading] = useState(true);

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
		} = supabaseBrowserClient.auth.onAuthStateChange((_event, session) => {
			setSession(session);
			setUser(session?.user ?? null);

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
					});
			} else {
				Cookies.remove('sb-access-token', { path: '/' });
				Cookies.remove('sb-refresh-token', { path: '/' });
				setProfile(null);
			}
		});

		return () => subscription.unsubscribe();
	}, []);

	const signOut = async () => {
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
