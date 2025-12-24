import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getAllBuy } from '../useGetAllBuy';
import { supabaseBrowserClient } from '../../services/init.service';

vi.mock('../../services/init.service', () => ({
    supabaseBrowserClient: {
        from: vi.fn(() => ({
            select: vi.fn(() => Promise.resolve({ data: [], error: null }))
        }))
    }
}));

describe('getAllBuy', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('successfully groups and sorts buy items', async () => {
        const mockData = [
            {
                buy_id: 1,
                quantity: 10,
                buy: { id: 1, eur: 100, fecha: '2023-01-01', label: 'Buy 1', payed: true },
                items: { id: 101, title: 'Item A', brand: 'VAPSOLO' }
            },
            {
                buy_id: 1,
                quantity: 5,
                buy: { id: 1, eur: 100, fecha: '2023-01-01', label: 'Buy 1', payed: true },
                items: { id: 102, title: 'Item B', brand: 'VAPSOLO' }
            },
            {
                buy_id: 2,
                quantity: 20,
                buy: { id: 2, eur: 200, fecha: '2023-01-02', label: 'Buy 2', payed: false },
                items: { id: 103, title: 'Item C', brand: 'OTHER' }
            }
        ];

        (supabaseBrowserClient.from as any).mockReturnValue({
            select: vi.fn().mockResolvedValue({ data: mockData, error: null })
        });

        const { data, error } = await getAllBuy();

        expect(error).toBeNull();
        expect(data).toHaveLength(2);
        
        // Sorted by date desc
        expect(data![0].id).toBe(2);
        expect(data![0].total).toBe(20);
        expect(data![0].items).toHaveLength(1);
        
        expect(data![1].id).toBe(1);
        expect(data![1].total).toBe(15);
        expect(data![1].items).toHaveLength(2);
    });

    it('handles errors from supabase', async () => {
        const mockError = { message: 'Database error' };
        (supabaseBrowserClient.from as any).mockReturnValue({
            select: vi.fn().mockResolvedValue({ data: null, error: mockError })
        });

        const { data, error } = await getAllBuy();
        expect(error).toEqual(mockError);
        expect(data).toBeUndefined();
    });
});
