import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Routes } from './router/_Routes';

import './styles/index.css';
import 'remixicon/fonts/remixicon.css';
import 'animate.css';
import 'toastify-js/src/toastify.css';

import { showToast } from './utils/toast';
import { AuthProvider } from './contexts/AuthContext';
import { registerServiceWorker } from '@react-components';
import { queryClient } from './lib/queryClient';
import { ensureAudioUnlocked } from './lib/sound';
import { theme } from './stores/theme.store';

// async function enableMocking() {
// 	if (import.meta.env.MODE !== 'development' && import.meta.env.MODE !== 'staging') {
// 		return;
// 	}
// 	// const { worker } = await import('./mocks/browser');
// 	// return worker.start();
// }

// enableMocking().then(() => {
ensureAudioUnlocked();
document.documentElement.setAttribute('data-theme', theme.get());
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</QueryClientProvider>
	</StrictMode>,
);

if (import.meta.env.PROD) {
	// Register Service Worker for PWA
	registerServiceWorker({
		onSuccess: () => {
			console.log('[PWA] Content cached for offline use');
		},
		onUpdate: () => {
			showToast('🔄 Nueva versión disponible. Recarga la página para actualizar.', 'warning', {
				duration: 10000,
				position: 'center',
				onClick: () => {
					window.location.reload();
				},
			});
		},
		onError: (error) => {
			console.error('[PWA] Service Worker registration failed:', error);
		},
	});
}
// });
