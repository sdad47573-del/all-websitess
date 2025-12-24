import { describe, it, expect } from 'vitest';
import { getGroupedFinancialRecords } from '../getGroupedFinancialRecords';
import type { FinancialRecordWithProfile } from '@/hooks';

describe('getGroupedFinancialRecords', () => {
    it('should group financial records by full_name and sum amounts', () => {
        const mockData: FinancialRecordWithProfile[] = [
            { id: 1, amount: 100, date: '2023-01-01', label: 'Test 1', profiles: { full_name: 'John Doe' } },
            { id: 2, amount: 200, date: '2023-01-02', label: 'Test 2', profiles: { full_name: 'Jane Doe' } },
            { id: 3, amount: 150, date: '2023-01-03', label: 'Test 3', profiles: { full_name: 'John Doe' } },
        ];

        const result = getGroupedFinancialRecords(mockData);

        expect(result).toHaveLength(2);
        expect(result).toContainEqual({ full_name: 'John Doe', totalAmount: 250 });
        expect(result).toContainEqual({ full_name: 'Jane Doe', totalAmount: 200 });
    });

    it('should return an empty array for empty input', () => {
        expect(getGroupedFinancialRecords([])).toEqual([]);
    });

    it('should handle multiple records with the same name', () => {
        const mockData: FinancialRecordWithProfile[] = [
            { id: 1, amount: 50, date: '2023-01-01', label: 'A', profiles: { full_name: 'Persona' } },
            { id: 2, amount: 50, date: '2023-01-02', label: 'B', profiles: { full_name: 'Persona' } },
            { id: 3, amount: 50, date: '2023-01-03', label: 'C', profiles: { full_name: 'Persona' } },
        ];

        const result = getGroupedFinancialRecords(mockData);
        expect(result).toEqual([{ full_name: 'Persona', totalAmount: 150 }]);
    });
});
