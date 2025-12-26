import type { User } from '@supabase/supabase-js';
import * as auth from 'supabase-sdk';
import { supabaseBrowserClient } from './init.service';

/**
 * Sign in with email and password
 */
export async function signIn(email: string, password: string) {
	return auth.signIn(supabaseBrowserClient, email, password);
}

/**
 * Sign out the current user
 */
export async function signOut() {
	return auth.signOut(supabaseBrowserClient);
}

/**
 * Sign up a new user
 */
export async function signUp(
	email: string,
	password: string,
	fullName: string,
	role?: auth.UserRole,
) {
	return auth.signUp(supabaseBrowserClient, email, password, fullName, role);
}

/**
 * Get the current authenticated user
 */
export async function getCurrentUser() {
	return auth.getCurrentUser(supabaseBrowserClient);
}

/**
 * Get the current session
 */
export async function getSession() {
	return auth.getSession(supabaseBrowserClient);
}

/**
 * Get user profile with role information
 */
export async function getUserProfile(userId: string) {
	return auth.getUserProfile(supabaseBrowserClient, userId);
}

/**
 * Get current user with profile
 */
export async function getCurrentUserWithProfile() {
	return auth.getCurrentUserWithProfile(supabaseBrowserClient);
}

/**
 * Check if a user has a specific role
 */
export async function hasRole(userId: string, role: auth.UserRole) {
	return auth.hasRole(supabaseBrowserClient, userId, role);
}

/**
 * Check if current user is admin
 */
export async function isAdmin() {
	return auth.isAdmin(supabaseBrowserClient);
}

/**
 * Create a new user profile
 */
export async function createProfile(
	userId: string,
	fullName: string,
	role: auth.UserRole = 'seller',
) {
	return auth.createProfile(supabaseBrowserClient, userId, fullName, role);
}

/**
 * Update user profile
 */
export async function updateProfile(userId: string, updates: Partial<auth.Profile>) {
	return auth.updateProfile(supabaseBrowserClient, userId, updates);
}

/**
 * Listen to auth state changes
 */
export function onAuthStateChange(callback: (user: User | null) => void) {
	return auth.onAuthStateChange(supabaseBrowserClient, callback);
}

export type { User } from '@supabase/supabase-js';
// Re-export types for convenience
export type { Profile, UserRole } from 'supabase-sdk';
