import { atom, computed } from 'nanostores';
import type { User } from '@supabase/supabase-js';
import type { Profile } from 'supabase-sdk';
import { getCurrentUserWithProfile, onAuthStateChange } from '../services/auth.service';

// Atoms for auth state
export const $user = atom<User | null>(null);
export const $profile = atom<Profile | null>(null);
export const $isLoading = atom<boolean>(true);

// Computed values
export const $isAuthenticated = computed($user, (user) => user !== null);
export const $userRole = computed($profile, (profile) => profile?.role ?? null);
export const $isAdmin = computed($userRole, (role) => role === 'admin' || role === 'superadmin');

/**
 * Initialize auth state
 */
export async function initAuthStore() {
	$isLoading.set(true);

	try {
		const { user, profile, error } = await getCurrentUserWithProfile();
		if (error) {
			$user.set(null);
			$profile.set(null);
		} else {
			$user.set(user);
			$profile.set(profile);
		}
	} catch (error) {
		console.error('Error initializing auth store:', error);
		$user.set(null);
		$profile.set(null);
	} finally {
		$isLoading.set(false);
	}

	// Listen for auth changes
	const {
		data: { subscription },
	} = onAuthStateChange(async (user) => {
		$user.set(user);

		if (user) {
			const { getUserProfile } = await import('../services/auth.service');
			const { profile, error } = await getUserProfile(user.id);
			if (error) {
				$profile.set(null);
			} else {
				$profile.set(profile);
			}
		} else {
			$profile.set(null);
		}
	});

	return subscription;
}

/**
 * Clear auth state (on logout)
 */
export function clearAuthStore() {
	$user.set(null);
	$profile.set(null);
}
