/**
 * Service Worker Registration
 * Handles PWA installation and updates
 */
export interface ServiceWorkerConfig {
    onSuccess?: (registration: ServiceWorkerRegistration) => void;
    onUpdate?: (registration: ServiceWorkerRegistration) => void;
    onError?: (error: Error) => void;
}
export declare function registerServiceWorker(config?: ServiceWorkerConfig): void;
export declare function unregisterServiceWorker(): void;
/**
 * Check if app is running as PWA
 */
export declare function isPWA(): boolean;
/**
 * Check if device is iOS
 */
export declare function isIOS(): boolean;
/**
 * Prompt user to install PWA
 */
export declare function getPWAInstallPrompt(): {
    showInstallPrompt: () => Promise<boolean>;
    isInstallable: () => boolean;
};
