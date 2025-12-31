import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Routes } from './router/_Routes';

import './styles/index.css';
import 'remixicon/fonts/remixicon.css';
import 'animate.css';
import 'toastify-js/src/toastify.css';

import Toastify from 'toastify-js';
import { AuthProvider } from './contexts/AuthContext';
import { registerServiceWorker } from './lib/pwa';
import { queryClient } from './lib/queryClient';
import { ensureAudioUnlocked } from './lib/sound';

// async function enableMocking() {
// 	if (import.meta.env.MODE !== 'development' && import.meta.env.MODE !== 'staging') {
// 		return;
// 	}
// 	// const { worker } = await import('./mocks/browser');
// 	// return worker.start();
// }

// enableMocking().then(() => {
ensureAudioUnlocked();
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
			Toastify({
				text: '🔄 Nueva versión disponible. Recarga la página para actualizar.',
				duration: 10000,
				gravity: 'top',
				position: 'center',
				style: {
					background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				},
				onClick: () => {
					window.location.reload();
				},
			}).showToast();
		},
		onError: (error) => {
			console.error('[PWA] Service Worker registration failed:', error);
		},
	});
}
// });
