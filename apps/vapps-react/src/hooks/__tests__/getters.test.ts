import { describe, it, expect, vi, beforeEach } from 'vitest';
import { supabaseBrowserClient } from '../../services/init.service';
import { getAllBrands } from '../useGetAllBrands';
import { getAllItems } from '../useGetAllItems';
import { getAllItemsAll } from '../useGetAllItemsAll';
import { getAllFinancialRecords } from '../useGetAllFinancialRecords';
import { getAllBuyedItemsTotals } from '../useGetAllBuyedItemsTotals';
import { getAllBuyedItemsPendingSales } from '../useGetAllBuyedItemsPendingSales';
import { getAllSalesGroupedByDate } from '../useGetAllSalesGroupedByDate';
import { getBestSellingItem } from '../useGetBestSellingItem';

vi.mock('../../services/init.service', () => ({
  supabaseBrowserClient: {
    from: vi.fn(),
    rpc: vi.fn(),
  }
}));

describe('Supabase getter functions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('getAllBrands returns ordered brands', async () => {
    (supabaseBrowserClient.from as any).mockReturnValue({
      select: vi.fn().mockReturnValue({
        order: vi.fn().mockResolvedValue({ data: [{ name: 'A' }, { name: 'B' }], error: null })
      })
    });
    const res = await getAllBrands();
    expect(res.data).toEqual([{ name: 'A' }, { name: 'B' }]);
    expect(res.error).toBeNull();
  });

  it('getAllItems filters active', async () => {
    (supabaseBrowserClient.from as any).mockReturnValue({
      select: vi.fn().mockReturnValue({
        eq: vi.fn().mockResolvedValue({
          data: [
            { id: 1, title: 'CARTUCHO', image_url: 'img1', amount: 2, active: true, brand: 'X' },
            { id: 2, title: 'BATERIA', image_url: null, amount: 1, active: true, brand: 'Y' }
          ],
          error: null
        })
      })
    });
    const res = await getAllItems();
    expect(Array.isArray(res.data)).toBe(true);
    expect(res.error).toBeNull();
  });

  it('getAllItemsAll returns all items', async () => {
    (supabaseBrowserClient.from as any).mockReturnValue({
      select: vi.fn().mockResolvedValue({ data: [{ id: 1 }], error: null })
    });
    const res = await getAllItemsAll();
    expect(res.data).toEqual([{ id: 1 }]);
  });

  it('getAllFinancialRecords selects with profiles', async () => {
    (supabaseBrowserClient.from as any).mockReturnValue({
      select: vi.fn().mockResolvedValue({ data: [{ id: 1, profiles: { full_name: 'Test' } }], error: null })
    });
    const res = await getAllFinancialRecords();
    expect(res.data?.[0]?.profiles?.full_name).toBe('Test');
  });

  it('getAllBuyedItemsTotals calls RPC', async () => {
    (supabaseBrowserClient.rpc as any).mockResolvedValue({ data: [{ item_id: 1 }], error: null });
    const res = await getAllBuyedItemsTotals();
    expect(res.data).toEqual([{ item_id: 1 }]);
  });

  it('getAllBuyedItemsPendingSales calls RPC', async () => {
    (supabaseBrowserClient.rpc as any).mockResolvedValue({ data: [{ item_id: 2 }], error: null });
    const res = await getAllBuyedItemsPendingSales();
    expect(res.data).toEqual([{ item_id: 2 }]);
  });

  it('getAllSalesGroupedByDate calls RPC', async () => {
    (supabaseBrowserClient.rpc as any).mockResolvedValue({ data: [{ day: '2025-01-01' }], error: null });
    const res = await getAllSalesGroupedByDate();
    expect(res.data?.[0]?.day).toBe('2025-01-01');
  });

  it('getBestSellingItem returns single', async () => {
    (supabaseBrowserClient.rpc as any).mockReturnValue({
      single: vi.fn().mockResolvedValue({ data: { title: 'TOP' }, error: null })
    });
    const res = await getBestSellingItem();
    expect(res.data).toEqual({ title: 'TOP' });
    expect(res.error).toBeNull();
  });
});
