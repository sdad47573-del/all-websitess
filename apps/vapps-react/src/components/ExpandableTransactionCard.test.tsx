import { ExpandableTransactionCard } from '@react-components';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('@react-components', () => ({
	VapListItem: ({ title, amount }: any) => (
		<div data-testid="vap-list-item">
			{title} - {amount}
		</div>
	),
}));

describe('ExpandableTransactionCard', () => {
	const baseProps = {
		title: 'Transacción',
		date: '2023-12-25',
		stats: [
			{ label: 'Cantidad', value: 2 },
			{ label: 'Total', value: '40.00€' },
		],
		status: {
			label: 'Pagado',
			value: '40.00€',
			isPending: false,
		},
	};

	it('renders header and stats', () => {
		render(
			<ExpandableTransactionCard
				{...baseProps}
				items={[
					{ id: 1, title: 'Producto A', brand: 'VAPSOLO', amount: 1, price: 20, image_url: null },
					{ id: 2, title: 'Producto B', brand: 'OTHER', amount: 1, price: 20, image_url: null },
				]}
			/>,
		);
		expect(screen.getByText('Transacción')).toBeDefined();
		expect(screen.getByText('Cantidad')).toBeDefined();
		expect(screen.getByText('Total')).toBeDefined();
		expect(screen.getByText('Pagado')).toBeDefined();
	});

	it('does not crash when items is undefined', () => {
		render(<ExpandableTransactionCard {...baseProps} />);
		expect(screen.getByText('Transacción')).toBeDefined();
	});

	it('toggles expansion when header is clicked', () => {
		const { container } = render(
			<ExpandableTransactionCard
				{...baseProps}
				items={[{ id: 1, title: 'Producto A', brand: 'VAPSOLO', amount: 1, image_url: null }]}
			/>,
		);
		const header = screen.getByText('Transacción');
		const arrow = container.querySelector('.ri-arrow-down-s-line') as HTMLElement;
		expect(arrow.className).not.toContain('rotate-180');
		fireEvent.click(header);
		expect(arrow.className).toContain('rotate-180');
	});
});
