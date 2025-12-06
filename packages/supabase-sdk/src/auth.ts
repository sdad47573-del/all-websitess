import type { SupabaseClient, User } from '@supabase/supabase-js';
import type { Database, Profile, UserRole } from './types.js';

export type AuthClient = SupabaseClient<Database>;

/**
 * Sign in with email and password
 */
export async function signIn(client: AuthClient, email: string, password: string) {
	const { data, error } = await client.auth.signInWithPassword({
		email,
		password,
	});

	return { data, error };
}

/**
 * Sign out the current user
 */
export async function signOut(client: AuthClient) {
	const { error } = await client.auth.signOut();
	return { error };
}

/**
 * Sign up a new user with email and password
 */
export async function signUp(
	client: AuthClient,
	email: string,
	password: string,
	fullName: string,
	role: UserRole = 'seller',
) {
	const { data, error } = await client.auth.signUp({
		email,
		password,
		options: {
			data: {
				full_name: fullName,
				role,
			},
		},
	});

	return { data, error };
}

/**
 * Get the current authenticated user
 */
export async function getCurrentUser(
	client: AuthClient,
): Promise<{ user: User | null; error: Error | null }> {
	const {
		data: { user },
		error,
	} = await client.auth.getUser();

	return { user, error };
}

/**
 * Get the current session
 */
export async function getSession(client: AuthClient) {
	const {
		data: { session },
		error,
	} = await client.auth.getSession();

	return { session, error };
}

/**
 * Get user profile with role information
 */
export async function getUserProfile(
	client: AuthClient,
	userId: string,
): Promise<{ profile: Profile | null; error: Error | null }> {
	const { data, error } = await client.from('profiles').select('*').eq('id', userId).single();

	return { profile: data, error };
}

/**
 * Get current user with profile
 */
export async function getCurrentUserWithProfile(client: AuthClient) {
	const { user, error: userError } = await getCurrentUser(client);

	if (userError || !user) {
		return { user: null, profile: null, error: userError };
	}

	const { profile, error: profileError } = await getUserProfile(client, user.id);

	return { user, profile, error: profileError };
}

/**
 * Check if a user has a specific role
 */
export async function hasRole(
	client: AuthClient,
	userId: string,
	role: UserRole,
): Promise<boolean> {
	const { profile, error } = await getUserProfile(client, userId);

	if (error || !profile) {
		return false;
	}

	return profile.role === role;
}

/**
 * Check if current user is admin
 */
export async function isAdmin(client: AuthClient): Promise<boolean> {
	const { user } = await getCurrentUser(client);

	if (!user) {
		return false;
	}

	return hasRole(client, user.id, 'admin');
}

/**
 * Update user profile
 */
export async function updateProfile(client: AuthClient, userId: string, updates: Partial<Profile>) {
	const { data, error } = await client
		.from('profiles')
		.update(updates)
		.eq('id', userId)
		.select()
		.single();

	return { profile: data, error };
}

/**
 * Listen to auth state changes
 */
export function onAuthStateChange(client: AuthClient, callback: (user: User | null) => void) {
	return client.auth.onAuthStateChange((_event, session) => {
		callback(session?.user ?? null);
	});
}
