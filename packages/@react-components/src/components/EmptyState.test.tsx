import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EmptyState } from './EmptyState';

describe('EmptyState Component', () => {
    it('renders with default message', () => {
        render(<EmptyState />);
        expect(screen.getByText('No hay datos disponibles')).toBeInTheDocument();
    });

    it('renders with custom message', () => {
        render(<EmptyState message="Nothing to see here" />);
        expect(screen.getByText('Nothing to see here')).toBeInTheDocument();
    });

    it('renders with custom icon', () => {
        const { container } = render(<EmptyState icon="custom-icon-class" />);
        const icon = container.querySelector('i');
        expect(icon).toHaveClass('custom-icon-class');
    });
});
