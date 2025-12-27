import type { Session, User } from '@supabase/supabase-js';
import type { Profile, UserRole } from '../services/auth.service';
import * as authService from '../services/auth.service';
import { useSupabaseQuery } from './useSupabaseQuery';

export interface AuthData {
	session: Session | null;
	user: User | null;
	profile: Profile | null;
}

/**
 * Hook to get the current user
 */
export function useCurrentUser() {
	return useSupabaseQuery(['auth', 'user'], async () => {
		const { user, error } = await authService.getCurrentUser();
		return { data: user, error };
	});
}

/**
 * Hook to get the current session
 */
export function useSession() {
	return useSupabaseQuery(['auth', 'session'], async () => {
		const { session, error } = await authService.getSession();
		return { data: session, error };
	});
}

/**
 * Hook to get a user profile by ID
 */
export function useUserProfile(userId: string | undefined) {
	return useSupabaseQuery(
		['auth', 'profile', userId],
		async () => {
			const { profile, error } = await authService.getUserProfile(userId!);
			return { data: profile, error };
		},
		{ enabled: !!userId },
	);
}

/**
 * Hook to get the current user with their profile
 */
export function useCurrentUserWithProfile() {
	return useSupabaseQuery(['auth', 'user-profile'], async () => {
		const { user, profile, error } = await authService.getCurrentUserWithProfile();

		if (user && !profile && !error) {
			console.warn('[useCurrentUserWithProfile] Profile not found, attempting fallback creation');
			const { profile: newProfile, error: insertError } = await authService.createProfile(
				user.id,
				(user.user_metadata?.full_name as string) || 'Usuario',
				(user.user_metadata?.role as any) || 'seller',
			);

			if (insertError) {
				console.error('[useCurrentUserWithProfile] Error creating fallback profile:', insertError);
			} else {
				console.log('[useCurrentUserWithProfile] Fallback profile created');
				return { data: { user, profile: newProfile }, error: null };
			}
		}

		return { data: { user, profile }, error };
	});
}

/**
 * Hook to check if a user has a specific role
 */
export function useHasRole(userId: string | undefined, role: UserRole) {
	return useSupabaseQuery(
		['auth', 'has-role', userId, role],
		async () => {
			const result = await authService.hasRole(userId!, role);
			return { data: result, error: null };
		},
		{ enabled: !!userId },
	);
}

/**
 * Hook to get all auth data (session, user, profile) in a single consolidated query.
 * This prevents multiple redundant calls at startup and multiple "not logged in" error logs.
 */
export function useAuthData() {
	return useSupabaseQuery<AuthData>(['auth', 'all-data'], async () => {
		try {
			// First get the session
			const { session, error: sessionError } = await authService.getSession();
			if (sessionError || !session) {
				return { data: { session: null, user: null, profile: null }, error: null };
			}

			// Then get the user and profile
			const {
				user,
				profile,
				error: userProfileError,
			} = await authService.getCurrentUserWithProfile();

			// Fallback profile creation if user exists but profile doesn't
			if (user && !profile && !userProfileError) {
				console.warn('[useAuthData] Profile not found, attempting fallback creation');
				const { profile: newProfile, error: insertError } = await authService.createProfile(
					user.id,
					(user.user_metadata?.full_name as string) || 'Usuario',
					(user.user_metadata?.role as any) || 'seller',
				);

				if (!insertError) {
					console.log('[useAuthData] Fallback profile created');
					return { data: { session, user, profile: newProfile }, error: null };
				}
				console.error('[useAuthData] Error creating fallback profile:', insertError);
			}

			return { data: { session, user, profile }, error: userProfileError };
		} catch (error) {
			console.error('[useAuthData] Unexpected error fetching auth data:', error);
			return { data: { session: null, user: null, profile: null }, error };
		}
	});
}

/**
 * Hook to check if the current user is an admin
 */
export function useIsAdmin() {
	return useSupabaseQuery(['auth', 'is-admin'], async () => {
		const result = await authService.isAdmin();
		return { data: result, error: null };
	});
}
