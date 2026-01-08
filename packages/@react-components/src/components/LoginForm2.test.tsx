import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LoginForm2 } from './LoginForm2';

describe('LoginForm2 Component', () => {
	const mockSubmit = vi.fn();

	beforeEach(() => {
		mockSubmit.mockClear();
	});

	it('renders form fields', () => {
		render(<LoginForm2 onSubmit={mockSubmit} />);
		expect(screen.getByLabelText('Email')).toBeInTheDocument();
		expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /iniciar sesión/i })).toBeInTheDocument();
	});

	it('validates input', async () => {
		render(<LoginForm2 onSubmit={mockSubmit} />);

		fireEvent.click(screen.getByRole('button', { name: /iniciar sesión/i }));

		await waitFor(() => {
			expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
			expect(screen.getByText(/la contraseña debe tener al menos/i)).toBeInTheDocument();
		});
	});

	it('submits valid data', async () => {
		render(<LoginForm2 onSubmit={mockSubmit} />);

		fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
		fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'password123' } });

		fireEvent.click(screen.getByRole('button', { name: /iniciar sesión/i }));

		await waitFor(() => {
			expect(mockSubmit).toHaveBeenCalledWith(
				expect.objectContaining({
					email: 'test@example.com',
					password: 'password123',
				}),
			);
		});
	});
});
