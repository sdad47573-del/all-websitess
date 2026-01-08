import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NumericForm } from './NumericForm';

describe('NumericForm Component', () => {
	const mockSubmit = vi.fn();
	const defaultStock = 100;

	beforeEach(() => {
		mockSubmit.mockClear();
	});

	it('renders all fields', () => {
		render(<NumericForm onSubmit={mockSubmit} stock={defaultStock} />);

		expect(screen.getByLabelText(/concepto/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/precio por unidad/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/unidades/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/pagado/i)).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /completar venta/i })).toBeInTheDocument();
	});

	it('submits valid data', async () => {
		render(<NumericForm onSubmit={mockSubmit} stock={defaultStock} />);

		fireEvent.change(screen.getByLabelText(/concepto/i), { target: { value: 'Test Item' } });
		fireEvent.change(screen.getByLabelText(/precio por unidad/i), {
			target: { value: '10', valueAsNumber: 10 },
		});
		fireEvent.change(screen.getByLabelText(/unidades/i), {
			target: { value: '5', valueAsNumber: 5 },
		});

		// Use getByRole for checkbox to be specific
		const checkbox = screen.getByRole('checkbox', { name: /pagado/i });
		fireEvent.click(checkbox);
		expect(checkbox).toBeChecked();

		fireEvent.click(screen.getByRole('button', { name: /completar venta/i }));

		await waitFor(() => {
			const calls = mockSubmit.mock.calls;
			if (calls.length === 0) throw new Error('Not called');
			const data = calls[0][0];
			expect(data.concept).toBe('Test Item');
			expect(data.price_per_unit).toBe(10);
			expect(data.amount).toBe(5);
			expect(data.payment).toBe(true);
		});
	});

	it('shows validation error when amount exceeds stock', async () => {
		render(<NumericForm onSubmit={mockSubmit} stock={10} />);

		fireEvent.change(screen.getByLabelText(/concepto/i), { target: { value: 'Test Item' } });
		fireEvent.change(screen.getByLabelText(/precio por unidad/i), { target: { value: '10' } });
		fireEvent.change(screen.getByLabelText(/unidades/i), { target: { value: '20' } }); // > 10

		fireEvent.click(screen.getByRole('button', { name: /completar venta/i }));

		await waitFor(() => {
			expect(screen.getByText(/debe ser menor o igual a 10/i)).toBeInTheDocument();
		});
		expect(mockSubmit).not.toHaveBeenCalled();
	});
});
