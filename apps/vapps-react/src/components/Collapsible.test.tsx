import { Collapsible } from '@react-components';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('Collapsible', () => {
	it('applies open styles when isOpen is true', () => {
		const { container } = render(
			<Collapsible isOpen={true}>
				<div>Content</div>
			</Collapsible>,
		);
		const wrapper = container.firstChild as HTMLElement;
		expect(wrapper.style.maxHeight).toBe('unset');
		expect(wrapper.style.opacity).toBe('1');
		expect(wrapper.style.transform).toBe('translateY(0)');
	});

	it('applies closed styles when isOpen is false', () => {
		const { container } = render(
			<Collapsible isOpen={false}>
				<div>Content</div>
			</Collapsible>,
		);
		const wrapper = container.firstChild as HTMLElement;
		expect(wrapper.style.maxHeight).toBe('0');
		expect(wrapper.style.opacity).toBe('0');
		expect(wrapper.style.transform).toBe('translateY(-4px)');
	});

	it('renders children correctly', () => {
		render(
			<Collapsible isOpen={true}>
				<div data-testid="content">Content</div>
			</Collapsible>,
		);
		expect(screen.getByTestId('content')).toBeDefined();
	});
});
