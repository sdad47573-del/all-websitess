import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useGetAllBuyedItemsTotals } from '../useGetAllBuyedItemsTotals';
import { supabaseBrowserClient } from '../../services/init.service';

vi.mock('../../services/init.service', () => ({
  supabaseBrowserClient: {
    rpc: vi.fn(),
  },
}));

function wrapper() {
  const client = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
}

describe('useGetAllBuyedItemsTotals', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('retorna totales desde RPC', async () => {
    (supabaseBrowserClient.rpc as any).mockResolvedValue({
      data: [{ item_id: 2, total_buyed: 10 }],
      error: null,
    });
    const { result } = renderHook(() => useGetAllBuyedItemsTotals(), { wrapper: wrapper() });
    await waitFor(() => {
      expect(result.current.data).toEqual([{ item_id: 2, total_buyed: 10 }]);
    });
  });
});

