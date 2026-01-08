import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { VapListItem } from './VapListItem';

describe('VapListItem Component', () => {
    const mockProps = {
        id: 1,
        title: 'Vape Mint',
        src: 'img.jpg',
        amount: 10,
        price: 15,
        onClick: vi.fn(),
    };

    it('renders correctly', () => {
        render(<VapListItem {...mockProps} />);
        expect(screen.getByText('Vape Mint')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument(); // Quantity
        expect(screen.getByText('15€')).toBeInTheDocument(); // Price
        expect(screen.getByRole('img')).toHaveAttribute('src', 'img.jpg');
    });

    it('handles click', () => {
        render(<VapListItem {...mockProps} />);
        fireEvent.click(screen.getByText('Vape Mint').closest('.vap-item')!);
        expect(mockProps.onClick).toHaveBeenCalledWith({
            id: 1,
            title: 'Vape Mint',
            src: 'img.jpg',
            amount: 10
        });
    });

    it('applies out of stock styles', () => {
        const { container } = render(<VapListItem {...mockProps} amount={0} />);
        const item = container.firstChild;
        expect(item).toHaveClass('cursor-not-allowed opacity-50 grayscale');
    });

    it('does not apply out of stock styles if disabled', () => {
        const { container } = render(<VapListItem {...mockProps} amount={0} disableOutOfStockStyles />);
        const item = container.firstChild;
        expect(item).not.toHaveClass('cursor-not-allowed');
    });
});
