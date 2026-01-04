import { atom } from 'nanostores';

const STORAGE_KEY = 'vapps-theme';
const LIGHT = 'scruz';
const DARK = 'scruz-dark';

function detectInitialTheme() {
	try {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved === LIGHT || saved === DARK) return saved;
	} catch (e) {
		void e;
	}
	const prefersDark =
		typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches;
	return prefersDark ? DARK : LIGHT;
}

export const theme = atom<string>(detectInitialTheme());

export function toggleTheme() {
	const next = theme.get() === LIGHT ? DARK : LIGHT;
	theme.set(next);
}

theme.subscribe((value) => {
	try {
		localStorage.setItem(STORAGE_KEY, value);
	} catch (e) {
		void e;
	}
	if (typeof document !== 'undefined') {
		document.documentElement.setAttribute('data-theme', value);
	}
});
