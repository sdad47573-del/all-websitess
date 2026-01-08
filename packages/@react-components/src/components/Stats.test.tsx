import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Stats } from './Stats';

describe('Stats Component', () => {
	const mockItems = [
		{
			label: 'Ventas totales',
			value: '100€',
			icon: 'ri-shopping-cart-line',
			color: 'bg-green-500',
			isTotal: true,
		},
		{
			label: 'Pendiente',
			value: '50€',
			icon: 'ri-time-line',
			color: 'bg-orange-500',
		},
	];

	it('renders correctly with given title', () => {
		render(<Stats title="Resumen" items={mockItems} />);
		expect(screen.getByText('Resumen')).toBeInTheDocument();
	});

	it('renders default title when no title provided', () => {
		render(<Stats items={mockItems} />);
		expect(screen.getByText('Resumen y Estadísticas')).toBeInTheDocument();
	});

	it('renders all items correctly', () => {
		render(<Stats items={mockItems} />);
		expect(screen.getByText('Ventas totales')).toBeInTheDocument();
		expect(screen.getByText('100€')).toBeInTheDocument();
		expect(screen.getByText('Pendiente')).toBeInTheDocument();
		expect(screen.getByText('50€')).toBeInTheDocument();
	});

	it('renders correct number of items', () => {
		render(<Stats items={mockItems} />);
		// We expect 2 items in the grid
		const itemElements = screen.getAllByText(/€/); // Assuming values contain €
		expect(itemElements).toHaveLength(2);
	});
});
