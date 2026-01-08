import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PageLayout } from './PageLayout';

describe('PageLayout Component', () => {
    it('renders children', () => {
        render(
            <PageLayout>
                <div data-testid="child">Content</div>
            </PageLayout>
        );
        expect(screen.getByTestId('child')).toBeInTheDocument();
    });

    it('applies default classes', () => {
        const { container } = render(
            <PageLayout>
                <div>Content</div>
            </PageLayout>
        );
        expect(container.firstChild).toHaveClass('animate__animated animate__fadeIn pb-10');
    });

    it('applies custom classes', () => {
        const { container } = render(
            <PageLayout className="custom-class">
                <div>Content</div>
            </PageLayout>
        );
        expect(container.firstChild).toHaveClass('custom-class');
    });
});
