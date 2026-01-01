import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useInsertModel } from '../useMutationInsertModel';
import { supabaseBrowserClient } from '../../services/init.service';
import { queryClient as importedClient } from '../../lib/queryClient';

vi.mock('../../services/init.service', () => ({
  supabaseBrowserClient: {
    from: vi.fn(),
  },
}));

describe('useInsertModel', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  function wrapper() {
    const client = new QueryClient();
    return ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
  }

  it('inserta modelo e invalida models', async () => {
    const invalidateSpy = vi.spyOn(importedClient, 'invalidateQueries');

    (supabaseBrowserClient.from as any).mockReturnValue({
      insert: vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          single: vi.fn().mockResolvedValue({ data: { id: 3, name: 'M' }, error: null }),
        }),
      }),
    });

    const { result } = renderHook(() => useInsertModel(), { wrapper: wrapper() });
    await result.current.mutateAsync({ name: 'M', brand_id: 1 } as any);

    expect(invalidateSpy).toHaveBeenCalledWith(expect.objectContaining({ queryKey: ['models'] }));
  });
});
