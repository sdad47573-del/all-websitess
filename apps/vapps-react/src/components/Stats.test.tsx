import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Stats } from '@react-components';

describe('Stats Component', () => {
	const mockItems = [
		{ label: 'Total Users', value: 100, icon: 'ri-user-line', color: 'bg-blue-500' },
		{ label: 'Active Users', value: '50', icon: 'ri-user-smile-line', color: 'bg-green-500' },
	];

	it('renders with default title', () => {
		render(<Stats items={mockItems} />);
		expect(screen.getByText('Resumen y Estadísticas')).toBeInTheDocument();
	});

	it('renders with custom title', () => {
		render(<Stats title="Custom Title" items={mockItems} />);
		expect(screen.getByText('Custom Title')).toBeInTheDocument();
	});

	it('renders all items', () => {
		render(<Stats items={mockItems} />);

		expect(screen.getByText('Total Users')).toBeInTheDocument();
		expect(screen.getByText('100')).toBeInTheDocument();

		expect(screen.getByText('Active Users')).toBeInTheDocument();
		expect(screen.getByText('50')).toBeInTheDocument();
	});

	it('renders progress bar when isTotal is true', () => {
		const itemsWithTotal = [
			{ label: 'Total', value: 150, icon: 'ri-award-line', color: 'bg-purple-500', isTotal: true },
		];
		const { container } = render(<Stats items={itemsWithTotal} />);
		expect(screen.getByText('Total')).toBeInTheDocument();
		expect(screen.getByText('150')).toBeInTheDocument();
		expect(container.querySelector('.mt-4.h-1.w-full')).toBeTruthy();
	});
});
