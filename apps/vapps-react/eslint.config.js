import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
	globalIgnores([
		'dist',
		'storybook-static',
		'coverage',
		'src/**/__tests__/**',
		'src/**/*.test.{ts,tsx}',
		'src/**/*.stories.{ts,tsx}',
	]),
	{
		files: ['src/**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				project: ['./tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'react-refresh/only-export-components': 'off',
			'react-hooks/set-state-in-effect': 'off',
		},
	},
	{
		files: [
			'vite.config.ts',
			'vitest.config.ts',
			'vitest.unit.config.ts',
			'vitest.shims.d.ts',
			'.storybook/**/*.{ts,tsx}',
		],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			// No type-aware project for config/storybook files to prevent parsing errors
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'react-refresh/only-export-components': 'off',
			'react-hooks/set-state-in-effect': 'off',
		},
	},
]);
