import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FinanceCard } from './FinanceCard';

describe('FinanceCard Component', () => {
    it('renders correctly', () => {
        render(
            <FinanceCard
                label="Salary"
                amount={1000}
                date="2023-01-01"
                fullName="John Doe"
            />
        );
        expect(screen.getByText('Salary')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('+1000.00€')).toBeInTheDocument();
    });

    it('renders negative amount correctly', () => {
        render(
            <FinanceCard
                label="Expense"
                amount={-50.5}
                date="2023-01-01"
                fullName="Jane Doe"
            />
        );
        expect(screen.getByText('-50.50€')).toBeInTheDocument();
        expect(screen.getByText('-50.50€')).toHaveClass('text-error');
    });
});
