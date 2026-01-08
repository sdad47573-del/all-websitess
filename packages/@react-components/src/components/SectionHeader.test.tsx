import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionHeader } from './SectionHeader';

describe('SectionHeader Component', () => {
    it('renders title', () => {
        render(<SectionHeader title="Main Title" />);
        expect(screen.getByText('Main Title')).toBeInTheDocument();
    });

    it('renders subtitle', () => {
        render(<SectionHeader title="Main Title" subtitle="Sub Title" />);
        expect(screen.getByText('Sub Title')).toBeInTheDocument();
    });

    it('renders children', () => {
        render(
            <SectionHeader title="Title">
                <button>Action</button>
            </SectionHeader>
        );
        expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    });

    it('applies custom className', () => {
        const { container } = render(<SectionHeader title="Title" className="custom-class" />);
        expect(container.firstChild).toHaveClass('custom-class');
    });
});
