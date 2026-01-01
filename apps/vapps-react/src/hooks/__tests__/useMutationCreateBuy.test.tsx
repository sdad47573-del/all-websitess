import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useCreateBuyWithItems } from '../useMutationCreateBuy';
import { supabaseBrowserClient } from '../../services/init.service';
import { queryClient as importedClient } from '../../lib/queryClient';

vi.mock('../../services/init.service', () => ({
  supabaseBrowserClient: {
    from: vi.fn(),
  },
}));

describe('useMutationCreateBuy', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  function wrapper() {
    const client = new QueryClient();
    return ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
  }

  it('crea compra sin items e invalida queries', async () => {
    const invalidateSpy = vi.spyOn(importedClient, 'invalidateQueries');

    (supabaseBrowserClient.from as any)
      .mockReturnValueOnce({
        insert: vi.fn().mockReturnValue({
          select: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({ data: { id: 10 }, error: null }),
          }),
        }),
      });

    const { result } = renderHook(() => useCreateBuyWithItems(), { wrapper: wrapper() });
    await result.current.mutateAsync([{ id: 10 } as any, []]);

    expect(invalidateSpy).toHaveBeenCalledWith(expect.objectContaining({ queryKey: ['buy'] }));
    expect(invalidateSpy).toHaveBeenCalledWith(expect.objectContaining({ queryKey: ['itemsTotals'] }));
    expect(invalidateSpy).toHaveBeenCalledWith(expect.objectContaining({ queryKey: ['itemsStock'] }));
  });

  it('crea compra con items e invalida queries', async () => {
    const invalidateSpy = vi.spyOn(importedClient, 'invalidateQueries');

    (supabaseBrowserClient.from as any)
      .mockReturnValueOnce({
        insert: vi.fn().mockReturnValue({
          select: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({ data: { id: 11 }, error: null }),
          }),
        }),
      })
      .mockReturnValueOnce({
        insert: vi.fn().mockResolvedValue({ error: null }),
      });

    const { result } = renderHook(() => useCreateBuyWithItems(), { wrapper: wrapper() });
    await result.current.mutateAsync([
      { id: 11 } as any,
      [{ item_id: 1, quantity: 2, price_per_unit: 10 } as any],
    ]);

    expect(invalidateSpy).toHaveBeenCalledWith(expect.objectContaining({ queryKey: ['buy'] }));
    expect(invalidateSpy).toHaveBeenCalledWith(expect.objectContaining({ queryKey: ['itemsTotals'] }));
    expect(invalidateSpy).toHaveBeenCalledWith(expect.objectContaining({ queryKey: ['itemsStock'] }));
  });
});

