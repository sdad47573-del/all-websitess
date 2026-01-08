import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Loading } from '@react-components';

describe('Loading Component', () => {
	it('renders correctly with default props', () => {
		const { container, getByText } = render(<Loading />);
		expect(container.firstChild).toHaveClass('flex h-64');
		expect(container.querySelector('.animate-spin')).toBeInTheDocument();
		expect(getByText('Cargando...')).toBeInTheDocument();
	});

	it('renders fullScreen mode with custom text', () => {
		const { container, getByText } = render(<Loading fullScreen text="Wait a moment" />);
		expect(container.firstChild).toHaveClass('fixed inset-0');
		expect(getByText('Wait a moment')).toBeInTheDocument();
		expect(getByText('Vapps')).toBeInTheDocument();
	});

	it('renders children', () => {
		const { getByTestId } = render(
			<Loading fullScreen>
				<div data-testid="child">Extra info</div>
			</Loading>,
		);
		expect(getByTestId('child')).toBeInTheDocument();
	});
});
