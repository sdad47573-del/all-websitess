import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { UserMenu } from './UserMenu';

describe('UserMenu Component', () => {
    const mockUser = { email: 'test@example.com' };
    const mockProfile = { full_name: 'John Doe', role: 'Admin' };
    const mockOnLogout = vi.fn();

    it('does not render if user or profile is missing', () => {
        const { container } = render(<UserMenu user={null} profile={mockProfile} onLogout={mockOnLogout} />);
        expect(container).toBeEmptyDOMElement();
    });

    it('renders user info', () => {
        render(<UserMenu user={mockUser} profile={mockProfile} onLogout={mockOnLogout} />);
        
        // Avatar initial
        expect(screen.getByText('J')).toBeInTheDocument();
        
        // Dropdown content (might be hidden visually but present in DOM)
        // DaisyUI dropdown uses CSS for visibility.
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Admin')).toBeInTheDocument();
        expect(screen.getByText('test@example.com')).toBeInTheDocument();
    });

    it('handles logout', () => {
        render(<UserMenu user={mockUser} profile={mockProfile} onLogout={mockOnLogout} />);
        const logoutButton = screen.getByRole('button', { name: /cerrar sesión/i });
        fireEvent.click(logoutButton);
        expect(mockOnLogout).toHaveBeenCalled();
    });
});
