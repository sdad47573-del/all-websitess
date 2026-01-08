import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InputPassword } from './InputPassword';

describe('InputPassword Component', () => {
    it('renders correctly', () => {
        render(<InputPassword placeholder="Enter password" />);
        // Initially it should be password type
        // However, based on implementation analysis, Input component takes over when type is password.
        // Let's verify behavior.
        const input = screen.getByPlaceholderText('Enter password');
        expect(input).toHaveAttribute('type', 'password');
    });

    it('toggles password visibility', () => {
        render(<InputPassword placeholder="Enter password" />);
        const input = screen.getByPlaceholderText('Enter password');
        
        // The button is rendered by Input (internal) because type passed is password
        const toggleButton = screen.getByRole('button', { name: /mostrar contraseña/i });
        fireEvent.click(toggleButton);
        
        // When clicked, Input internal state changes to show password (type=text)
        expect(input).toHaveAttribute('type', 'text');
    });
});
