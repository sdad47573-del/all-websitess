import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { ErrorState } from './ErrorState';

describe('ErrorState Component', () => {
    // Mock window.location.reload
    const originalReload = window.location.reload;
    
    beforeAll(() => {
        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { reload: vi.fn() },
        });
    });

    afterAll(() => {
        window.location.reload = originalReload;
    });

    it('renders with default message', () => {
        render(<ErrorState />);
        expect(screen.getByText('Ha ocurrido un error')).toBeInTheDocument();
    });

    it('renders with custom message and details', () => {
        render(<ErrorState message="Something went wrong" details="Error 500" />);
        expect(screen.getByText('Something went wrong')).toBeInTheDocument();
        expect(screen.getByText('Error 500')).toBeInTheDocument();
    });

    it('reloads page on retry button click', () => {
        render(<ErrorState />);
        const button = screen.getByRole('button', { name: /reintentar/i });
        fireEvent.click(button);
        expect(window.location.reload).toHaveBeenCalledTimes(1);
    });
});
