import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SearchFilter } from './SearchFilter';

describe('SearchFilter Component', () => {
    const mockOptions = [
        { label: 'Option 1', value: 'opt1' },
        { label: 'Option 2', value: 'opt2' },
    ];
    const mockOnSearchChange = vi.fn();
    const mockOnOptionChange = vi.fn();

    it('renders correctly', () => {
        render(
            <SearchFilter
                searchTerm=""
                onSearchChange={mockOnSearchChange}
                options={mockOptions}
                selectedOption=""
                onOptionChange={mockOnOptionChange}
            />
        );
        expect(screen.getByText('Buscar productos')).toBeInTheDocument();
        expect(screen.getByLabelText('Buscar')).toBeInTheDocument();
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('handles search input', () => {
        render(
            <SearchFilter
                searchTerm=""
                onSearchChange={mockOnSearchChange}
                options={mockOptions}
                selectedOption=""
                onOptionChange={mockOnOptionChange}
            />
        );
        const input = screen.getByLabelText('Buscar');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(mockOnSearchChange).toHaveBeenCalledWith('test');
    });

    it('handles option selection', () => {
        render(
            <SearchFilter
                searchTerm=""
                onSearchChange={mockOnSearchChange}
                options={mockOptions}
                selectedOption=""
                onOptionChange={mockOnOptionChange}
            />
        );
        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'opt1' } });
        expect(mockOnOptionChange).toHaveBeenCalledWith('opt1');
    });
});
