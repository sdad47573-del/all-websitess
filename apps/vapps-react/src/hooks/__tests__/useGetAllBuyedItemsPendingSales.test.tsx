import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useGetAllBuyedItemsPendingSales } from '../useGetAllBuyedItemsPendingSales';
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

describe('useGetAllBuyedItemsPendingSales', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('retorna items pendientes de venta desde RPC', async () => {
    (supabaseBrowserClient.rpc as any).mockResolvedValue({
      data: [{ item_id: 1, stock_final: 3 }],
      error: null,
    });
    const { result } = renderHook(() => useGetAllBuyedItemsPendingSales(), { wrapper: wrapper() });
    await waitFor(() => {
      expect(result.current.data).toEqual([{ item_id: 1, stock_final: 3 }]);
    });
  });
});

