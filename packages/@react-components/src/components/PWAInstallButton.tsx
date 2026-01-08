import { useEffect, useState } from 'react';
import { getPWAInstallPrompt, isPWA, isIOS } from '../utils/pwa';

/**
 * PWA Install Button Component
 * Shows a button to install the app when running in browser
 * Hides when already installed as PWA
 */
export function PWAInstallButton() {
    const [isInstallable, setIsInstallable] = useState(false);
    const [isInstalledPWA, setIsInstalledPWA] = useState(false);
    const [showIOSInstructions, setShowIOSInstructions] = useState(false);
    const [isIOSDevice, setIsIOSDevice] = useState(false);
    const [installPrompt, setInstallPrompt] = useState<{
        showInstallPrompt: () => Promise<boolean>;
        isInstallable: () => boolean;
    } | null>(null);

    useEffect(() => {
        console.log('[PWA] PWAInstallButton mounted');
        // Check if already installed as PWA
        const pwa = isPWA();
        setIsInstalledPWA(pwa);
        
        const ios = isIOS();
        setIsIOSDevice(ios);

        // If it's iOS and not PWA, we can always show instructions
        if (ios && !pwa) {
            console.log('[PWA] iOS device detected, showing manual instructions option');
            setIsInstallable(true);
        }

        // Get install prompt singleton
        const prompt = getPWAInstallPrompt();
        if (prompt) {
            setInstallPrompt(prompt);

            // Check if already installable
            if (prompt.isInstallable()) {
                console.log('[PWA] App is installable on mount (Android/Desktop)');
                setIsInstallable(true);
            }
        }

        // Listen for install availability (Android/Desktop)
        const handleInstallAvailable = () => {
            console.log('[PWA] Event: pwa-install-available');
            setIsInstallable(true);
        };

        const handleInstalled = () => {
            console.log('[PWA] Event: pwa-installed');
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
        if (isIOSDevice) {
            setShowIOSInstructions(true);
            return;
        }

        if (installPrompt) {
            try {
                const accepted = await installPrompt.showInstallPrompt();
                console.log('[PWA] Result of showInstallPrompt:', accepted);
                if (accepted) {
                    setIsInstallable(false);
                }
            } catch (error) {
                console.error('[PWA] Error showing install prompt:', error);
            }
        } else {
            console.warn('[PWA] No install prompt available when clicked');
        }
    };

    // Don't show button if already installed or not installable
    if (isInstalledPWA || !isInstallable) {
        return null;
    }

    return (
        <>
            <button
                onClick={handleInstallClick}
                className="btn btn-primary btn-sm gap-2"
                title="Instalar aplicación"
            >
                <i className="ri-download-cloud-line text-lg" />
                <span className="hidden sm:inline">
                    {isIOSDevice ? 'Cómo Instalar' : 'Instalar App'}
                </span>
            </button>

            {/* iOS Instructions Modal/Tooltip simple implementation */}
            {showIOSInstructions && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200">
                    <div className="bg-base-100 rounded-xl p-6 max-w-sm w-full shadow-2xl animate-in zoom-in duration-200">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-bold">Instalar en iOS</h3>
                            <button 
                                onClick={() => setShowIOSInstructions(false)}
                                className="btn btn-ghost btn-sm btn-circle"
                            >
                                <i className="ri-close-line text-xl" />
                            </button>
                        </div>
                        <div className="space-y-4 text-sm">
                            <p>Para instalar esta aplicación en tu iPhone o iPad:</p>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>Toca el botón <strong>Compartir</strong> <i className="ri-share-box-line align-middle" /> en la barra inferior de Safari.</li>
                                <li>Desliza hacia abajo y selecciona <strong>Añadir a la pantalla de inicio</strong>.</li>
                                <li>Toca <strong>Añadir</strong> en la esquina superior derecha.</li>
                            </ol>
                        </div>
                        <div className="mt-6">
                            <button 
                                onClick={() => setShowIOSInstructions(false)}
                                className="btn btn-primary w-full"
                            >
                                Entendido
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
