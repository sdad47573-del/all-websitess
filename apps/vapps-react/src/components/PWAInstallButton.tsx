import { useEffect, useState } from 'react';
import { setupPWAInstallPrompt, isPWA } from '../lib/pwa';

/**
 * PWA Install Button Component
 * Shows a button to install the app when running in browser
 * Hides when already installed as PWA
 */
export function PWAInstallButton() {
    const [isInstallable, setIsInstallable] = useState(false);
    const [isInstalledPWA, setIsInstalledPWA] = useState(false);
    const [installPrompt, setInstallPrompt] = useState<{
        showInstallPrompt: () => Promise<boolean>;
        isInstallable: () => boolean;
    } | null>(null);

    useEffect(() => {
        // Check if already installed as PWA
        setIsInstalledPWA(isPWA());

        // Setup install prompt
        const prompt = setupPWAInstallPrompt();
        setInstallPrompt(prompt);

        // Listen for install availability
        const handleInstallAvailable = () => {
            setIsInstallable(true);
        };

        const handleInstalled = () => {
            setIsInstalledPWA(true);
            setIsInstallable(false);
        };

        window.addEventListener('pwa-install-available', handleInstallAvailable);
        window.addEventListener('pwa-installed', handleInstalled);

        return () => {
            window.removeEventListener('pwa-install-available', handleInstallAvailable);
            window.removeEventListener('pwa-installed', handleInstalled);
        };
    }, []);

    const handleInstallClick = async () => {
        if (installPrompt) {
            const accepted = await installPrompt.showInstallPrompt();
            if (accepted) {
                setIsInstallable(false);
            }
        }
    };

    // Don't show button if already installed or not installable
    if (isInstalledPWA || !isInstallable) {
        return null;
    }

    return (
        <button
            onClick={handleInstallClick}
            className="btn btn-primary btn-sm gap-2"
            title="Instalar aplicación"
        >
            <i className="ri-download-cloud-line text-lg" />
            <span className="hidden sm:inline">Instalar App</span>
        </button>
    );
}
