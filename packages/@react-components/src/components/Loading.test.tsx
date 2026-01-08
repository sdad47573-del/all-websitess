import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Loading } from './Loading';

describe('Loading Component', () => {
    it('renders default loading state', () => {
        render(<Loading />);
        expect(screen.getByText('Cargando...')).toBeInTheDocument();
    });

    it('renders with custom text', () => {
        render(<Loading text="Please wait" />);
        expect(screen.getByText('Please wait')).toBeInTheDocument();
    });

    it('renders fullscreen mode', () => {
        render(<Loading fullScreen />);
        expect(screen.getByText('Vapps')).toBeInTheDocument(); // Vapps is only in fullscreen mode
        expect(screen.getByText('Cargando...')).toBeInTheDocument();
    });

    it('renders children in fullscreen mode', () => {
        render(
            <Loading fullScreen>
                <div data-testid="child">Child Content</div>
            </Loading>
        );
        expect(screen.getByTestId('child')).toBeInTheDocument();
    });
});
