import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useGetAllFinancialRecords } from '../useGetAllFinancialRecords';
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

describe('useGetAllFinancialRecords', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('retorna registros ordenados por fecha desc', async () => {
    (supabaseBrowserClient.from as any).mockReturnValue({
      select: vi.fn().mockResolvedValue({
        data: [
          { id: 1, date: '2025-01-01', amount: 100, label: 'A', profiles: { full_name: 'X' } },
          { id: 2, date: '2024-12-31', amount: 50, label: 'B', profiles: { full_name: 'Y' } },
        ],
        error: null,
      }),
    });
    const { result } = renderHook(() => useGetAllFinancialRecords(), { wrapper: wrapper() });
    await waitFor(() => {
      const data = result.current.data as any[];
      expect(data[0].id).toBe(1);
      expect(data[1].id).toBe(2);
    });
  });
});

