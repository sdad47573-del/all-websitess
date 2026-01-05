import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export const showToast = (
	text: string,
	kind: 'success' | 'error' | 'warning' = 'success',
	options: Partial<Toastify.Options> = {},
) => {
	const backgrounds = {
		success: 'linear-gradient(to right, #10b981, #34d399)',
		error: 'linear-gradient(to right, #ef4444, #f87171)',
		warning: 'linear-gradient(to right, #f59e0b, #d97706)',
	};

	Toastify({
		text,
		duration: kind === 'success' ? 2500 : 3000,
		gravity: 'top',
		position: 'right',
		style: {
			background: backgrounds[kind],
		},
		className: 'rounded-lg shadow-lg font-medium',
		...options,
	}).showToast();
};


