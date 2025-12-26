import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as authService from '../services/auth.service';

/**
 * Hook for user sign-in
 */
export function useSignIn() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (args: Parameters<typeof authService.signIn>) => authService.signIn(...args),
		onSuccess: (response) => {
			if (!response.error) {
				queryClient.invalidateQueries({ queryKey: ['auth'] });
			}
		},
	});
}

/**
 * Hook for user sign-out
 */
export function useSignOut() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: () => authService.signOut(),
		onSuccess: (response) => {
			if (!response.error) {
				queryClient.setQueryData(['auth', 'user'], null);
				queryClient.setQueryData(['auth', 'session'], null);
				queryClient.setQueryData(['auth', 'profile'], null);
				queryClient.setQueryData(['auth', 'user-profile'], null);
				queryClient.invalidateQueries({ queryKey: ['auth'] });
			}
		},
	});
}

/**
 * Hook for user sign-up
 */
export function useSignUp() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (params: Parameters<typeof authService.signUp>) => authService.signUp(...params),
		onSuccess: (response) => {
			if (!response.error) {
				queryClient.invalidateQueries({ queryKey: ['auth'] });
			}
		},
	});
}
