import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionHeader } from '../SectionHeader';

describe('SectionHeader', () => {
    it('renders the title correctly', () => {
        render(<SectionHeader title="Test Title" />);
        expect(screen.getByText('Test Title')).toBeDefined();
    });

    it('renders the subtitle when provided', () => {
        render(<SectionHeader title="Test Title" subtitle="Test Subtitle" />);
        expect(screen.getByText('Test Subtitle')).toBeDefined();
    });

    it('does not render the subtitle when not provided', () => {
        render(<SectionHeader title="Test Title" />);
        expect(screen.queryByText('Test Subtitle')).toBeNull();
    });

    it('renders children when provided', () => {
        render(
            <SectionHeader title="Test Title">
                <span data-testid="child">Child Content</span>
            </SectionHeader>
        );
        expect(screen.getByTestId('child')).toBeDefined();
    });

    it('applies custom className', () => {
        const { container } = render(<SectionHeader title="Test Title" className="custom-class" />);
        expect(container.firstChild).toHaveClass('custom-class');
    });
});
