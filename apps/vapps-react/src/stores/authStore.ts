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
export const $isAdmin = computed($userRole, (role) => role === 'admin');

/**
 * Initialize auth state
 */
export async function initAuthStore() {
	$isLoading.set(true);

	try {
		const { user, profile } = await getCurrentUserWithProfile();
		$user.set(user);
		$profile.set(profile);
	} catch (error) {
		console.error('Error initializing auth store:', error);
		$user.set(null);
		$profile.set(null);
	} finally {
		$isLoading.set(false);
	}

	// Listen for auth changes
	onAuthStateChange(async (user) => {
		$user.set(user);

		if (user) {
			const { getUserProfile } = await import('../services/auth.service');
			const { profile } = await getUserProfile(user.id);
			$profile.set(profile);
		} else {
			$profile.set(null);
		}
	});
}

/**
 * Clear auth state (on logout)
 */
export function clearAuthStore() {
	$user.set(null);
	$profile.set(null);
}
