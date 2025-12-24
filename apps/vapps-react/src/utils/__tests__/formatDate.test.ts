import { describe, it, expect } from 'vitest';
import { formatDate } from '../formatDate';

describe('formatDate', () => {
    it('should format a valid date string correctly in es-ES', () => {
        const dateString = '2023-12-25';
        // Note: result might depend on the environment's locale, but we expect es-ES
        expect(formatDate(dateString)).toBe('25/12/2023');
    });

    it('should return "N/A" if dateString is empty', () => {
        expect(formatDate('')).toBe('N/A');
    });

    it('should return "Invalid Date" for invalid date strings (native Date behavior)', () => {
        // new Date('invalid').toLocaleDateString('es-ES') usually returns "Invalid Date"
        expect(formatDate('not-a-date')).toBe('Invalid Date');
    });
});
