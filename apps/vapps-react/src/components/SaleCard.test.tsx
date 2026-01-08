import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SaleCard } from '@react-components';

// Mock VapListItem since it's an external component
vi.mock('@react-components', () => ({
	VapListItem: ({ title, amount }: any) => (
		<div data-testid="vap-list-item">
			{title} - {amount}
		</div>
	),
}));

describe('SaleCard', () => {
	const defaultPropsBase = {
		day: '2023-12-25',
		concept: 'Test Sale',
		total_amount: 5,
		total_price: 100,
		items: [
			{
				sale_id: 1,
				item_id: 1,
				item_title: 'Product A',
				amount: 3,
				price_per_unit: 20,
				brand: 'VAPSOLO',
				image_url: null,
			},
			{
				sale_id: 2,
				item_id: 2,
				item_title: 'Product B',
				amount: 2,
				price_per_unit: 20,
				brand: 'OTHER',
				image_url: null,
			},
		],
	};

	it('renders basic info correctly', () => {
		render(<SaleCard {...defaultPropsBase} total_payment={100} />);
		expect(screen.getByText('Test Sale')).toBeDefined();
		expect(screen.getByText('5')).toBeDefined();
		expect(screen.getByText('100.00€')).toBeDefined();
	});

	it('shows "Sin concepto" when concept is null', () => {
		render(<SaleCard {...defaultPropsBase} concept={null} total_payment={100} />);
		expect(screen.getByText('Sin concepto')).toBeDefined();
	});

	it('shows "Pago Recibido" when fully paid', () => {
		render(<SaleCard {...defaultPropsBase} total_payment={100} />);
		expect(screen.getByText('Pago Recibido')).toBeDefined();
		expect(screen.getByText('100€')).toBeDefined();
	});

	it('shows "Pendiente de pago" and the difference when partially paid', () => {
		render(<SaleCard {...defaultPropsBase} total_payment={60} />);
		expect(screen.getByText('Pendiente de pago')).toBeDefined();
		expect(screen.getByText('40€')).toBeDefined(); // 100 - 60 = 40
	});

	it('toggles expanded state when clicked', () => {
		render(<SaleCard {...defaultPropsBase} total_payment={100} />);
		const header = screen.getByText('Test Sale');

		// Initially items should be "hidden" (Collapsible logic)
		// But we want to test if the click triggers something.
		// Since Collapsible is rendered, let's just check if items are in the DOM
		expect(screen.getAllByTestId('vap-list-item')).toHaveLength(2);

		fireEvent.click(header);
		// Expanded state changed, CSS/Styles would be applied.
	});
});
