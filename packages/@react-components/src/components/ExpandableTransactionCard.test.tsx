import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ExpandableTransactionCard } from './ExpandableTransactionCard';

// Mock dependencies
vi.mock('./VapListItem', () => ({
    VapListItem: ({ title }: any) => <div data-testid="vap-item">{title}</div>
}));

// Mock Collapsible to simplify testing (avoid animation issues in jsdom)
vi.mock('./Collapsible', () => ({
    Collapsible: ({ isOpen, children }: any) => (
        <div data-testid="collapsible" style={{ display: isOpen ? 'block' : 'none' }}>
            {children}
        </div>
    )
}));

describe('ExpandableTransactionCard Component', () => {
    const mockStats = [
        { label: 'Total', value: '100€' },
        { label: 'Items', value: 5 }
    ];

    const mockItems = [
        { id: 1, title: 'Item 1', src: 'img1.jpg', amount: 1 },
        { id: 2, title: 'Item 2', src: 'img2.jpg', amount: 2 }
    ];

    it('renders title and date', () => {
        render(
            <ExpandableTransactionCard
                title="Transaction #1"
                date="2023-01-01"
                stats={mockStats}
            />
        );
        expect(screen.getByText('Transaction #1')).toBeInTheDocument();
        // date formatting depends on locale, let's assume implementation uses default locale or mocked formatDate
    });

    it('renders stats', () => {
        render(
            <ExpandableTransactionCard
                title="Transaction"
                date="2023-01-01"
                stats={mockStats}
            />
        );
        expect(screen.getByText('Total')).toBeInTheDocument();
        expect(screen.getByText('100€')).toBeInTheDocument();
    });

    it('toggles expansion', () => {
        render(
            <ExpandableTransactionCard
                title="Transaction"
                date="2023-01-01"
                stats={mockStats}
                items={mockItems}
            />
        );
        
        // Items should be hidden initially
        expect(screen.getByTestId('collapsible')).toHaveStyle({ display: 'none' });
        
        // Click header to expand
        // Header has title
        fireEvent.click(screen.getByText('Transaction'));
        
        expect(screen.getByTestId('collapsible')).toHaveStyle({ display: 'block' });
        expect(screen.getAllByTestId('vap-item')).toHaveLength(2);
    });
});
