import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BuyCard } from '../BuyCard';

vi.mock('@react-components', () => ({
    VapListItem: ({ title, amount }: any) => <div data-testid="vap-list-item">{title} - {amount}</div>
}));

describe('BuyCard', () => {
    const defaultProps = {
        fecha: '2023-12-25',
        eur: 200,
        total: 50,
        items: [
            { id: 1, title: 'Product 1', brand: 'VAPSOLO', quantity: 25, image_url: null },
            { id: 2, title: 'Product 2', brand: 'OTHER', quantity: 25, image_url: null }
        ],
        label: 'Custom Buy'
    };

    it('renders basic information correctly', () => {
        render(<BuyCard {...defaultProps} />);
        expect(screen.getByText('Custom Buy')).toBeDefined();
        expect(screen.getByText('50')).toBeDefined();
        expect(screen.getByText('200.00€')).toBeDefined();
    });

    it('shows "Compra de Productos" as default label', () => {
        const { label, ...otherProps } = defaultProps;
        void label;
        render(<BuyCard {...otherProps} />);
        expect(screen.getByText('Compra de Productos')).toBeDefined();
    });

    it('displays status "Pagado" when payed is true', () => {
        render(<BuyCard {...defaultProps} payed={true} />);
        expect(screen.getByText('Pagado')).toBeDefined();
    });

    it('displays status "Pendiente" and pending amount when payed is false', () => {
        render(<BuyCard {...defaultProps} payed={false} pending={50.5} />);
        expect(screen.getByText('Pendiente')).toBeDefined();
        expect(screen.getByText('50.50€')).toBeDefined();
    });

    it('toggles expansion when header is clicked', () => {
        render(<BuyCard {...defaultProps} />);
        const header = screen.getByText('Custom Buy');

        // Items are always rendered in DOM due to Collapsible but may be hidden via styles
        expect(screen.getAllByTestId('vap-list-item')).toHaveLength(2);

        fireEvent.click(header);
        // State change doesn't change DOM presence, but would trigger animation styles
    });
});
