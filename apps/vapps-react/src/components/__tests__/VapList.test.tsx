import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import VapList from '../VapList';
import { isModalOpen, modalData } from '../../stores/modal.store';

vi.mock('@react-components', () => ({
    VapList: ({ items, onItemClick }: any) => (
        <div data-testid="vap-list">
            {items.map((item: any) => (
                <button 
                    key={item.id} 
                    onClick={() => onItemClick(item)}
                    data-testid={`item-${item.id}`}
                >
                    {item.title}
                </button>
            ))}
        </div>
    )
}));

describe('VapList', () => {
    beforeEach(() => {
        isModalOpen.set(false);
        modalData.set(null);
    });

    const mockItems = [
        { id: 1, title: 'Item 1', amount: 10, src: 'img1' },
        { id: 2, title: 'Item 2', amount: 0, src: 'img2' },
    ];

    it('renders items', () => {
        render(<VapList items={mockItems} isLoading={false} />);
        expect(screen.getByTestId('vap-list')).toBeInTheDocument();
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('opens modal when clicking available item', () => {
        render(<VapList items={mockItems} isLoading={false} />);
        
        screen.getByTestId('item-1').click();
        
        expect(isModalOpen.get()).toBe(true);
        expect(modalData.get()).toEqual(mockItems[0]);
    });

    it('does NOT open modal when clicking item with amount 0', () => {
        render(<VapList items={mockItems} isLoading={false} />);
        
        screen.getByTestId('item-2').click();
        
        expect(isModalOpen.get()).toBe(false);
        expect(modalData.get()).toBeNull();
    });
});
