import { setupWorker } from 'msw/browser';
import { getHandlers } from 'supabase-sdk';

const handlers = getHandlers(import.meta.env.VITE_SUPABASE_URL);

export const worker = setupWorker(...handlers);
