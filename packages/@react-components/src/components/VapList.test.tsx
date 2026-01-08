import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { VapList } from './VapList';

// Mock VapListItem
vi.mock('./VapListItem', () => ({
    VapListItem: ({ title }: any) => <div data-testid="vap-item">{title}</div>
}));

describe('VapList Component', () => {
    const mockItems = [
        { id: 1, title: 'Item 1', src: 'img1', amount: 5 },
        { id: 2, title: 'Item 2', src: 'img2', amount: 3 }
    ];
    const mockOnItemClick = vi.fn();

    it('renders loading state', () => {
        const { container } = render(<VapList items={[]} isLoading={true} onItemClick={mockOnItemClick} />);
        // Look for spinner class
        expect(container.querySelector('.animate-spin')).toBeInTheDocument();
    });

    it('renders items when loaded', () => {
        render(<VapList items={mockItems} isLoading={false} onItemClick={mockOnItemClick} />);
        expect(screen.getAllByTestId('vap-item')).toHaveLength(2);
        expect(screen.getByText('Item 1')).toBeInTheDocument();
    });
});
