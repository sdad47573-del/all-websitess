import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProductGrid } from './ProductGrid';

// Mock VapListItem
vi.mock('./VapListItem', () => ({
    VapListItem: ({ title, amount, onClick, id }: any) => (
        <div data-testid="product-item" onClick={() => onClick?.({ id })}>
            {title} - {amount}
        </div>
    )
}));

describe('ProductGrid Component', () => {
    const mockItems = [
        { id: 1, title: 'Prod 1', src: 'img1.jpg', amount: 10 },
        { id: 2, title: 'Prod 2', src: 'img2.jpg', amount: 0 }
    ];
    const mockOnItemClick = vi.fn();

    it('renders title and helper text', () => {
        render(<ProductGrid items={mockItems} onItemClick={mockOnItemClick} />);
        expect(screen.getByText('Productos actuales')).toBeInTheDocument();
        expect(screen.getByText(/Pulsa un producto/)).toBeInTheDocument();
    });

    it('renders items', () => {
        render(<ProductGrid items={mockItems} onItemClick={mockOnItemClick} />);
        expect(screen.getAllByTestId('product-item')).toHaveLength(2);
        expect(screen.getByText(/Prod 1/)).toBeInTheDocument();
    });

    it('handles item click', () => {
        render(<ProductGrid items={mockItems} onItemClick={mockOnItemClick} />);
        fireEvent.click(screen.getByText(/Prod 1/));
        // The mock calls onClick passed to it. 
        // In ProductGrid: onClick={() => onItemClick(item.id)}
        // In Mock: onClick={() => onClick?.({ id })} -> This is wrong mapping if we strictly follow the code.
        // ProductGrid passes `onClick={onItemClick}` (actually a wrapper) to the div WRAPPING VapListItem.
        // VapListItem also receives props but onClick prop might not be passed or used?
        // Let's check ProductGrid.tsx again:
        // <div ... onClick={() => onItemClick(item.id)}> <VapListItem ... /> </div>
        // So the click is on the container div, NOT on VapListItem necessarily.
        // But my mock is: <div data-testid="product-item" onClick...>
        // If I click the text, it bubbles to the container div in ProductGrid.
        
        expect(mockOnItemClick).toHaveBeenCalledWith(1);
    });
});
