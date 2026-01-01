import { QueryClientProvider, useMutation, useQuery } from '@tanstack/react-query';
import { render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { queryClient } from '../queryClient';
import { useEffect } from 'react';

function ErrorQueryComponent({ error }: { error: any }) {
	useQuery({
		queryKey: ['error-test', error?.code || error?.message],
		queryFn: async () => {
			throw error;
		},
		retry: false,
	});
	return null;
}

function ErrorMutationComponent({ error }: { error: any }) {
	const mutation = useMutation({
		mutationFn: async () => {
			throw error;
		},
	});
	useEffect(() => {
		mutation.mutate({});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return null;
}

function UnauthorizedQueryComponent({ onCall }: { onCall: () => void }) {
	useQuery({
		queryKey: ['401-test'],
		queryFn: async () => {
			onCall();
			const err: any = new Error('Unauthorized');
			err.status = 401;
			throw err;
		},
	});
	return null;
}

describe('queryClient error handling', () => {
	it('dispatches supabase-auth-error on JWT expired message', async () => {
		const dispatchSpy = vi.spyOn(window, 'dispatchEvent');
		render(
			<QueryClientProvider client={queryClient}>
				<ErrorQueryComponent error={{ message: 'JWT expired' }} />
			</QueryClientProvider>,
		);
		await waitFor(() => {
			expect(dispatchSpy).toHaveBeenCalledWith(expect.any(CustomEvent));
			const event = dispatchSpy.mock.calls[0][0] as CustomEvent;
			expect(event.type).toBe('supabase-auth-error');
		});
		dispatchSpy.mockRestore();
	});

	it('dispatches supabase-auth-error on PGRST303 code', async () => {
		const dispatchSpy = vi.spyOn(window, 'dispatchEvent');
		render(
			<QueryClientProvider client={queryClient}>
				<ErrorQueryComponent error={{ code: 'PGRST303' }} />
			</QueryClientProvider>,
		);
		await waitFor(() => {
			expect(dispatchSpy).toHaveBeenCalledWith(expect.any(CustomEvent));
			const event = dispatchSpy.mock.calls[0][0] as CustomEvent;
			expect(event.type).toBe('supabase-auth-error');
		});
		dispatchSpy.mockRestore();
	});

	it('dispatches supabase-auth-error for mutation errors (JWT expired)', async () => {
		const dispatchSpy = vi.spyOn(window, 'dispatchEvent');
		render(
			<QueryClientProvider client={queryClient}>
				<ErrorMutationComponent error={{ message: 'JWT expired' }} />
			</QueryClientProvider>,
		);
		await waitFor(() => {
			expect(dispatchSpy).toHaveBeenCalledWith(expect.any(CustomEvent));
			const event = dispatchSpy.mock.calls[0][0] as CustomEvent;
			expect(event.type).toBe('supabase-auth-error');
		});
		dispatchSpy.mockRestore();
	});

	it('does not retry queries on 401 errors', async () => {
		let count = 0;
		render(
			<QueryClientProvider client={queryClient}>
				<UnauthorizedQueryComponent
					onCall={() => {
						count += 1;
					}}
				/>
			</QueryClientProvider>,
		);
		await waitFor(() => {
			expect(count).toBe(1);
		});
	});
});
