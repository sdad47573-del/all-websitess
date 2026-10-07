// Flat ESLint config for the Astro project.
// Catches dead imports (e.g. unused Lucide icons) via @typescript-eslint/no-unused-vars.
// Pairs with `bun lint` / `bun lint:fix`.
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
	{
		ignores: [
			'dist/**',
			'node_modules/**',
			'.astro/**',
			'coverage/**',
			'public/**',
		],
	},

	js.configs.recommended,
	...tseslint.configs.recommended,
	...astro.configs.recommended,

	// Globals: Astro projects run client-side primarily, but several
	// utility modules in src/ (e.g. seo.ts, CustomLayout) also touch
	// Node APIs. Expose both sets so the linter doesn't flag legitimate
	// references like document, window, IntersectionObserver, process,
	// console, fetch, HTMLElement, etc. as undefined.
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},

	{
		files: ['**/*.astro'],
		rules: {
			// Interfaces de props definidas en frontmatter .astro: sólo existen para tipar Astro.props
			// Si no se referencian explícitamente, eslint las marca como unused — permitir _Prefijo
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_.*',
					caughtErrorsIgnorePattern: '^_',
				},
			],
		},
	},

	{
		files: ['**/*.{ts,tsx}'],
		rules: {
			// Disable base ESLint rule that conflicts with the TS-aware check.
			'no-unused-vars': 'off',

			// Strict TS-aware check that flags dead module imports cleanly
			// (e.g. `import { Gavel } from '@lucide/astro'` when Gavel is unused).
			// Allow `_`-prefixed names to be intentionally unused.
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
		},
	},
];
