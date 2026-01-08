import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BeneficioItem } from './BeneficioItem';

describe('BeneficioItem Component', () => {
	it('renders correctly', () => {
		render(<BeneficioItem label="Venta #1" fecha="2023-01-01" eur={100} />);
		expect(screen.getByText('Venta #1')).toBeInTheDocument();
		expect(screen.getByText(/100\s*€/)).toBeInTheDocument();
	});

	it('displays positive amount in green with plus sign', () => {
		render(<BeneficioItem label="Venta" fecha="2023-01-01" eur={50} />);
		const amount = screen.getByText('+50 €');
		expect(amount).toBeInTheDocument();
		expect(amount).toHaveClass('text-green-600');
	});

	it('displays negative amount in red without plus sign', () => {
		render(<BeneficioItem label="Gasto" fecha="2023-01-01" eur={-50} />);
		const amount = screen.getByText('-50 €');
		expect(amount).toBeInTheDocument();
		expect(amount).toHaveClass('text-red-600');
	});
});
