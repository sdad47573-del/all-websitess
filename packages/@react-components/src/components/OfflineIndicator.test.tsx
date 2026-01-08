import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { OfflineIndicator } from './OfflineIndicator';

describe('OfflineIndicator Component', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('does not render when online', () => {
        Object.defineProperty(navigator, 'onLine', { value: true, configurable: true });
        render(<OfflineIndicator />);
        expect(screen.queryByText('Sin conexión a Internet')).not.toBeInTheDocument();
    });

    it('renders when offline', () => {
        Object.defineProperty(navigator, 'onLine', { value: false, configurable: true });
        render(<OfflineIndicator />);
        expect(screen.getByText('Sin conexión a Internet')).toBeInTheDocument();
    });

    it('updates when connectivity changes', () => {
        Object.defineProperty(navigator, 'onLine', { value: true, configurable: true });
        render(<OfflineIndicator />);
        
        expect(screen.queryByText('Sin conexión a Internet')).not.toBeInTheDocument();

        // Simulate offline event
        act(() => {
            window.dispatchEvent(new Event('offline'));
        });

        expect(screen.getByText('Sin conexión a Internet')).toBeInTheDocument();

        // Simulate online event
        act(() => {
            window.dispatchEvent(new Event('online'));
        });

        expect(screen.queryByText('Sin conexión a Internet')).not.toBeInTheDocument();
    });
});
