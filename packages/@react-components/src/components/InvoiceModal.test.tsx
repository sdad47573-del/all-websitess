import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { InvoiceModal } from './InvoiceModal';

describe('InvoiceModal Component', () => {
    const mockOnClose = vi.fn();

    it('does not render when closed', () => {
        render(<InvoiceModal isOpen={false} url="http://example.com" onClose={mockOnClose} />);
        expect(screen.queryByText('Factura')).not.toBeInTheDocument();
    });

    it('renders when open', () => {
        render(<InvoiceModal isOpen={true} url="http://example.com" onClose={mockOnClose} />);
        expect(screen.getByText('Factura')).toBeInTheDocument();
        expect(screen.getByTitle('Factura PDF')).toHaveAttribute('src', 'http://example.com');
    });

    it('closes on button click', () => {
        render(<InvoiceModal isOpen={true} url="http://example.com" onClose={mockOnClose} />);
        const closeButton = screen.getByLabelText('Cerrar visor de factura');
        fireEvent.click(closeButton);
        expect(mockOnClose).toHaveBeenCalled();
    });
});
