import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useInsertItem } from '../useMutationInsertItem';
import { supabaseBrowserClient } from '../../services/init.service';
import { queryClient as importedClient } from '../../lib/queryClient';

vi.mock('../../services/init.service', () => ({
  supabaseBrowserClient: {
    from: vi.fn(),
  },
}));

describe('useInsertItem', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  function wrapper() {
    const client = new QueryClient();
    return ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
  }

  it('inserta item e invalida items y itemsStock', async () => {
    const invalidateSpy = vi.spyOn(importedClient, 'invalidateQueries');

    (supabaseBrowserClient.from as any).mockReturnValue({
      insert: vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          single: vi.fn().mockResolvedValue({ data: { id: 2, title: 'Item' }, error: null }),
        }),
      }),
    });

    const { result } = renderHook(() => useInsertItem(), { wrapper: wrapper() });
    await result.current.mutateAsync({ title: 'Item' } as any);

    expect(invalidateSpy).toHaveBeenCalledWith(expect.objectContaining({ queryKey: ['items'] }));
    expect(invalidateSpy).toHaveBeenCalledWith(expect.objectContaining({ queryKey: ['itemsStock'] }));
  });
});
