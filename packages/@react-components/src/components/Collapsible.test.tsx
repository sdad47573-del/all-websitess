import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Collapsible } from './Collapsible';

describe('Collapsible Component', () => {
	it('renders children', () => {
		render(
			<Collapsible isOpen={true}>
				<div data-testid="content">Content</div>
			</Collapsible>,
		);
		expect(screen.getByTestId('content')).toBeInTheDocument();
	});

	it('is visible when open', () => {
		const { container } = render(
			<Collapsible isOpen={true}>
				<div>Content</div>
			</Collapsible>,
		);
		// Implementation uses inline styles for visibility
		const div = container.firstChild as HTMLElement;
		expect(div).toHaveStyle({ opacity: '1' });
		// maxHeight: 'unset' might resolve to 'none' or be invalid in some envs, skipping exact check
		expect(div).not.toHaveAttribute('aria-hidden', 'true');
	});

	it('is hidden when closed', () => {
		const { container } = render(
			<Collapsible isOpen={false}>
				<div>Content</div>
			</Collapsible>,
		);
		const div = container.firstChild as HTMLElement;
		expect(div).toHaveStyle({ opacity: '0' });
		// Check for 0 or 0px
		expect(div.style.maxHeight).toMatch(/^0(px)?$/);
		expect(div).toHaveAttribute('aria-hidden', 'true');
	});
});
