import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EmptyState } from '@react-components';

describe('EmptyState', () => {
	it('renders with default message when no props provided', () => {
		render(<EmptyState />);
		expect(screen.getByText('No hay datos disponibles')).toBeDefined();
	});

	it('renders with custom message', () => {
		render(<EmptyState message="Custom Message" />);
		expect(screen.getByText('Custom Message')).toBeDefined();
	});

	it('renders the default icon', () => {
		const { container } = render(<EmptyState />);
		const icon = container.querySelector('i');
		expect(icon).toHaveClass('ri-inbox-line');
	});

	it('renders custom icon', () => {
		const { container } = render(<EmptyState icon="ri-search-line" />);
		const icon = container.querySelector('i');
		expect(icon).toHaveClass('ri-search-line');
	});
});
