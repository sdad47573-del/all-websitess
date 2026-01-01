import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useGetAllBrands } from '../useGetAllBrands';
import { supabaseBrowserClient } from '../../services/init.service';

vi.mock('../../services/init.service', () => ({
  supabaseBrowserClient: {
    from: vi.fn(),
  },
}));

function wrapper() {
  const client = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
}

describe('useGetAllBrands', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('retorna marcas ordenadas', async () => {
    (supabaseBrowserClient.from as any).mockReturnValue({
      select: vi.fn().mockReturnValue({
        order: vi.fn().mockResolvedValue({ data: [{ name: 'A' }, { name: 'B' }], error: null }),
      }),
    });
    const { result } = renderHook(() => useGetAllBrands(), { wrapper: wrapper() });
    await waitFor(() => {
      expect(result.current.data).toEqual([{ name: 'A' }, { name: 'B' }]);
    });
  });
});

