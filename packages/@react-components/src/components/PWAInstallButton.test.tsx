import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { PWAInstallButton } from './PWAInstallButton';
import * as pwaUtils from '../utils/pwa';

// Mock the utils
vi.mock('../utils/pwa', () => ({
    getPWAInstallPrompt: vi.fn(),
    isPWA: vi.fn(),
}));

describe('PWAInstallButton Component', () => {
    beforeEach(() => {
        vi.resetAllMocks();
        vi.mocked(pwaUtils.getPWAInstallPrompt).mockReturnValue({
            showInstallPrompt: vi.fn(),
            isInstallable: () => false
        });
    });

    it('does not render if already installed as PWA', () => {
        vi.mocked(pwaUtils.isPWA).mockReturnValue(true);
        render(<PWAInstallButton />);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('renders when installable', async () => {
        vi.mocked(pwaUtils.isPWA).mockReturnValue(false);
        vi.mocked(pwaUtils.getPWAInstallPrompt).mockReturnValue({
            showInstallPrompt: vi.fn(),
            isInstallable: () => true
        });

        render(<PWAInstallButton />);

        // Simulate install available event
        fireEvent(window, new Event('pwa-install-available'));

        expect(screen.getByRole('button', { name: /instalar app/i })).toBeInTheDocument();
    });

    it('handles install click', async () => {
        vi.mocked(pwaUtils.isPWA).mockReturnValue(false);
        const showPromptMock = vi.fn().mockResolvedValue(true);
        vi.mocked(pwaUtils.getPWAInstallPrompt).mockReturnValue({
            showInstallPrompt: showPromptMock,
            isInstallable: () => true
        });

        render(<PWAInstallButton />);
        fireEvent(window, new Event('pwa-install-available'));

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(showPromptMock).toHaveBeenCalled();
    });
});
