import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { Routes } from './pages/_Routes';
import { queryClient } from './lib/queryClient';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  </StrictMode>
);
