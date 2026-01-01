import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useGetAllSalesGroupedByDate } from '../useGetAllSalesGroupedByDate';
import { supabaseBrowserClient } from '../../services/init.service';

vi.mock('../../services/init.service', () => ({
  supabaseBrowserClient: {
    rpc: vi.fn(),
  },
}));

function createWrapper() {
  const client = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
}

describe('useGetAllSalesGroupedByDate', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('transforma items y expone datos', async () => {
    (supabaseBrowserClient.rpc as any).mockResolvedValue({
      data: [
        {
          day: '2025-01-01',
          concept: 'Venta',
          brand: 'VAPSOLO',
          total_amount: 3,
          total_price: 60,
          total_payment: 60,
          items: [
            { sale_id: 1, item_id: 1, item_title: 'A', image_url: null, brand: 'V', amount: 2, price_per_unit: 20 },
            { sale_id: 1, item_id: 2, item_title: 'B', image_url: null, brand: 'V', amount: 1, price_per_unit: 20 },
          ],
        },
      ],
      error: null,
    });

    const { result } = renderHook(() => useGetAllSalesGroupedByDate(), { wrapper: createWrapper() });

    await waitFor(() => {
      const data = result.current.data as any[];
      expect(data[0].day).toBe('2025-01-01');
      expect(Array.isArray(data[0].items)).toBe(true);
      expect(data[0].items.length).toBe(2);
    });
  });
});

