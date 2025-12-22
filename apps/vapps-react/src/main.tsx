import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Routes } from './pages/_Routes';

import './styles/index.css';
import 'remixicon/fonts/remixicon.css';
import 'animate.css';
import 'toastify-js/src/toastify.css';

import { AuthProvider } from './contexts/AuthContext';
import { queryClient } from './lib/queryClient';
import { ensureAudioUnlocked } from './lib/sound';

async function enableMocking() {
	if (import.meta.env.MODE !== 'development' && import.meta.env.MODE !== 'staging') {
		return;
	}
	const { worker } = await import('./mocks/browser');
	return worker.start();
}

enableMocking().then(() => {
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
});
