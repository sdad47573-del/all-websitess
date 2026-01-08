import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Modal } from './Modal';

// Mock NumericForm as it is complex and tested separately
vi.mock('./NumericForm', () => ({
    NumericForm: ({ onSubmit }: { onSubmit: any }) => (
        <form data-testid="numeric-form" onSubmit={(e) => {
            e.preventDefault();
            onSubmit({ amount: 100 });
        }}>
            <button type="submit">Submit Mock</button>
        </form>
    ),
}));

describe('Modal Component', () => {
    const mockData = {
        id: 1,
        title: 'Test Item',
        src: 'image.jpg',
        amount: 100
    };
    const mockOnClose = vi.fn();
    const mockOnSubmit = vi.fn();

    it('does not render when closed', () => {
        render(<Modal isOpen={false} onClose={mockOnClose} data={mockData} onSubmit={mockOnSubmit} />);
        // const modal = screen.queryByText('Test Item');
        // Based on implementation, it renders but with 'hidden' class or null if data is null
        // Implementation:
        // if (!data) return null;
        // return <div className={twJoin(..., isOpen ? 'opacity-100' : 'hidden opacity-0', ...)}>
        
        // Wait, if !isOpen it has 'hidden' class.
        // Let's check for class.
        // But queryByText might find it if it's just hidden with CSS.
        // However, standard testing-library queries often ignore hidden elements if using getByRole, but getByText finds them unless configured otherwise.
        // Actually, if it has 'hidden' class (display: none), toBeVisible() should fail.
        
        const element = screen.getByText('Test Item').closest('.fixed');
        expect(element).toHaveClass('hidden');
    });

    it('renders when open', () => {
        render(<Modal isOpen={true} onClose={mockOnClose} data={mockData} onSubmit={mockOnSubmit} />);
        const element = screen.getByText('Test Item').closest('.fixed');
        expect(element).not.toHaveClass('hidden');
        expect(element).toHaveClass('opacity-100');
    });

    it('closes on escape key', () => {
        render(<Modal isOpen={true} onClose={mockOnClose} data={mockData} onSubmit={mockOnSubmit} />);
        fireEvent.keyDown(document, { key: 'Escape' });
        expect(mockOnClose).toHaveBeenCalled();
    });

    it('does not render if data is null', () => {
        const { container } = render(<Modal isOpen={true} onClose={mockOnClose} data={null} onSubmit={mockOnSubmit} />);
        expect(container).toBeEmptyDOMElement();
    });
});
