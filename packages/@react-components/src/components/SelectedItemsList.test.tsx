import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SelectedItemsList } from './SelectedItemsList';

describe('SelectedItemsList Component', () => {
    const mockSelected = [
        { item_id: 1, title: 'Item 1', quantity: 2 },
        { item_id: 2, title: 'Item 2', quantity: 1 }
    ];
    const mockOnRemove = vi.fn();

    it('does not render when empty', () => {
        const { container } = render(<SelectedItemsList selected={[]} onRemove={mockOnRemove} />);
        expect(container).toBeEmptyDOMElement();
    });

    it('renders selected items', () => {
        render(<SelectedItemsList selected={mockSelected} onRemove={mockOnRemove} />);
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
        expect(screen.getAllByText(/Cantidad:/)).toHaveLength(2);
    });

    it('handles remove', () => {
        render(<SelectedItemsList selected={mockSelected} onRemove={mockOnRemove} />);
        const removeButtons = screen.getAllByRole('button', { name: /quitar/i });
        fireEvent.click(removeButtons[0]);
        expect(mockOnRemove).toHaveBeenCalledWith(1);
    });
});
