import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input Component', () => {
    it('renders correctly', () => {
        render(<Input placeholder="Enter text" />);
        expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('renders label when provided', () => {
        render(<Input label="Username" id="username" />);
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
    });

    it('renders error message', () => {
        render(<Input error="Invalid input" />);
        expect(screen.getByText('Invalid input')).toBeInTheDocument();
    });

    it('handles text changes', () => {
        const handleChange = vi.fn();
        render(<Input onChange={handleChange} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(handleChange).toHaveBeenCalled();
    });

    it('toggles password visibility', () => {
        render(<Input type="password" placeholder="Password" />);
        const input = screen.getByPlaceholderText('Password');
        expect(input).toHaveAttribute('type', 'password');

        const toggleButton = screen.getByRole('button', { name: /mostrar contraseña/i });
        fireEvent.click(toggleButton);

        expect(input).toHaveAttribute('type', 'text');
        expect(screen.getByRole('button', { name: /ocultar contraseña/i })).toBeInTheDocument();
    });

    it('renders left icon', () => {
        const { container } = render(<Input leftIconClass="ri-user-line" />);
        expect(container.querySelector('.ri-user-line')).toBeInTheDocument();
    });

    it('renders right addon', () => {
        render(<Input rightAddon={<button>Action</button>} />);
        expect(screen.getByText('Action')).toBeInTheDocument();
    });
});
