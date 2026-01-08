import { FinanceCard } from '@react-components';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('FinanceCard', () => {
	it('renders all props correctly', () => {
		const props = {
			label: 'Test Label',
			amount: 150.5,
			date: '2023-12-25',
			fullName: 'John Doe',
		};

		render(<FinanceCard {...props} />);

		expect(screen.getByText('Test Label')).toBeDefined();
		// Since formatDate is used, we expect 25/12/2023 or whatever es-ES returns
		expect(screen.getByText(/25\/12\/2023/)).toBeDefined();
		expect(screen.getByText(/150\.50 ?€/)).toBeDefined();
		expect(screen.getByText('John Doe')).toBeDefined();
	});
});
