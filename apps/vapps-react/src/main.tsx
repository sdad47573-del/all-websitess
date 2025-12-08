import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Routes } from './pages/_Routes';

import './styles/index.css';
import 'remixicon/fonts/remixicon.css';
import 'animate.css';
import 'toastify-js/src/toastify.css';

import { AuthProvider } from './contexts/AuthContext';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</QueryClientProvider>
	</StrictMode>,
);
