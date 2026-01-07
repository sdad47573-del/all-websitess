import { useEffect, useState } from 'react';

/**
 * Offline Indicator Component
 * Shows a banner when the user is offline
 */
export function OfflineIndicator() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    if (isOnline) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-warning text-warning-content py-2 px-4 text-center shadow-lg">
            <div className="flex items-center justify-center gap-2">
                <i className="ri-wifi-off-line text-xl" />
                <span className="font-medium">Sin conexión a Internet</span>
                <span className="hidden sm:inline text-sm opacity-80">
                    - Trabajando en modo offline
                </span>
            </div>
        </div>
    );
}
