import { describe, it, expect } from 'vitest';
import { formatDate } from '@react-components';

describe('formatDate', () => {
	it('should format a valid date string correctly in es-ES', () => {
		const dateString = '2023-12-25';
		// Note: result might depend on the environment's locale, but we expect es-ES
		expect(formatDate(dateString)).toBe('25/12/2023');
	});

	it('should return "N/A" if dateString is empty', () => {
		expect(formatDate('')).toBe('N/A');
	});

	it('should return "N/A" for invalid date strings', () => {
		expect(formatDate('not-a-date')).toBe('N/A');
	});
});
