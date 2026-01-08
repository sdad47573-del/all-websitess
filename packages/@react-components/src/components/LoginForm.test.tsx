import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LoginForm } from './LoginForm';

describe('LoginForm Component', () => {
	const mockSubmit = vi.fn();

	beforeEach(() => {
		mockSubmit.mockClear();
	});

	it('renders form fields', () => {
		render(<LoginForm onSubmit={mockSubmit} />);
		expect(screen.getByLabelText('Email')).toBeInTheDocument();
		expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /iniciar sesión/i })).toBeInTheDocument();
	});

	it('validates input', async () => {
		render(<LoginForm onSubmit={mockSubmit} />);

		fireEvent.click(screen.getByRole('button', { name: /iniciar sesión/i }));

		await waitFor(() => {
			expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
			expect(screen.getByText(/la contraseña debe tener al menos/i)).toBeInTheDocument();
		});
		expect(mockSubmit).not.toHaveBeenCalled();
	});

	it('submits valid data', async () => {
		render(<LoginForm onSubmit={mockSubmit} />);

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

	it('shows loading state', async () => {
		// Mock submit to never resolve immediately to check loading state
		const slowSubmit = vi
			.fn()
			.mockImplementation(() => new Promise((resolve) => setTimeout(resolve, 100)));
		render(<LoginForm onSubmit={slowSubmit} />);

		fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
		fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'password123' } });

		fireEvent.click(screen.getByRole('button', { name: /iniciar sesión/i }));

		await waitFor(() => {
			expect(screen.getByRole('button', { name: /iniciando sesión/i })).toBeInTheDocument();
			expect(screen.getByRole('button', { name: /iniciando sesión/i })).toBeDisabled();
		});
	});
});
