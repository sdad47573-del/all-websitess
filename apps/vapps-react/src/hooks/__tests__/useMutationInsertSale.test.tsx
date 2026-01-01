import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useMutationInsertSale } from '../useMutationInsertSale';
import { supabaseBrowserClient } from '../../services/init.service';
import { queryClient as importedClient } from '../../lib/queryClient';

vi.mock('../../services/init.service', () => ({
	supabaseBrowserClient: {
		from: vi.fn(),
	},
}));

vi.mock('../../lib/sound', () => ({
	playSound: vi.fn(),
}));

describe('useMutationInsertSale', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		importedClient.setQueryData(['items'], [
			{ id: 1, amount: 10, title: 'A' },
			{ id: 2, amount: 5, title: 'B' },
		] as any);
	});

	function wrapper() {
		const client = new QueryClient();
		return ({ children }: { children: React.ReactNode }) => (
			<QueryClientProvider client={client}>{children}</QueryClientProvider>
		);
	}

	it('aplica actualización optimista y reproduce sonido en éxito', async () => {
		(supabaseBrowserClient.from as any).mockReturnValue({
			insert: vi.fn().mockReturnValue({
				select: vi.fn().mockReturnValue({
					single: vi.fn().mockResolvedValue({ data: { id: 99 }, error: null }),
				}),
			}),
		});

		const { playSound } = await import('../../lib/sound');

		const { result } = renderHook(() => useMutationInsertSale(), { wrapper: wrapper() });
		await result.current.mutateAsync({
			item_id: 1,
			amount: 3,
			price_per_unit: 10,
			seller_id: 'X',
			concept: 'C',
			payment: 30,
		} as any);

		const items = importedClient.getQueryData(['items']) as any[];
		expect(items.find((i) => i.id === 1).amount).toBe(7);
		expect(playSound).toHaveBeenCalledWith('success');
	});
});
