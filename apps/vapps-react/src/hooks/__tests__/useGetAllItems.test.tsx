import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useGetAllItems } from '../useGetAllItems';
import { supabaseBrowserClient } from '../../services/init.service';

vi.mock('../../services/init.service', () => ({
  supabaseBrowserClient: {
    from: vi.fn(),
  },
}));

function createWrapper() {
  const client = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
}

describe('useGetAllItems', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('retorna listado transformado y ordenado', async () => {
    (supabaseBrowserClient.from as any).mockReturnValue({
      select: vi.fn().mockReturnValue({
        eq: vi.fn().mockResolvedValue({
          data: [
            { id: 1, title: 'A', image_url: 'img1', amount: 2, active: true, brand: 'X' },
            { id: 2, title: 'B', image_url: null, amount: 1, active: true, brand: 'Y' },
          ],
          error: null,
        }),
      }),
    });

    const { result } = renderHook(() => useGetAllItems(), { wrapper: createWrapper() });

    await waitFor(() => {
      const data = result.current.data as any[];
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBe(2);
      expect(data[0].amount).toBeGreaterThanOrEqual(data[1].amount);
      expect(typeof data[0].src).toBe('string');
      expect(typeof data[0].title).toBe('string');
    });
  });
});

