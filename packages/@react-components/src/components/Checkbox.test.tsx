import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
	it('renders correctly', () => {
		render(<Checkbox />);
		expect(screen.getByRole('checkbox')).toBeInTheDocument();
	});

	it('renders with label', () => {
		render(<Checkbox label="Accept terms" />);
		expect(screen.getByText('Accept terms')).toBeInTheDocument();
	});

	it('handles onChange event', () => {
		const handleChange = vi.fn();
		render(<Checkbox onChange={handleChange} />);

		const checkbox = screen.getByRole('checkbox');
		fireEvent.click(checkbox);

		expect(handleChange).toHaveBeenCalledTimes(1);
	});

	it('can be checked by default', () => {
		render(<Checkbox defaultChecked />);
		expect(screen.getByRole('checkbox')).toBeChecked();
	});

	it('applies custom className', () => {
		const { container } = render(<Checkbox className="custom-class" />);
		// Note: The input has the class, we need to check if it's applied.
		// Based on implementation: <input type="checkbox" className={className ?? 'checkbox checkbox-sm'} {...props} />
		// It seems it REPLACES the default class if provided.
		const input = container.querySelector('input');
		expect(input).toHaveClass('custom-class');
	});
});
