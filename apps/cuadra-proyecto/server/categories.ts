/**
 * Expense categories.
 *
 * This list is the single source of truth on the server. It matches the
 * `CHECK` constraint in `migrations/0001_init.sql` and the picker metadata in
 * `src/lib/finance.ts`; the three have to stay in step.
 *
 * The API rejects anything not on this list, and the database rejects it too,
 * so a mismatched picker shows up as a clear 400 rather than a row that can
 * never be filtered or charted.
 */

import { z } from 'zod';

export const EXPENSE_CATEGORIES = [
	'comida',
	'transporte',
	'hogar',
	'entretenimiento',
	'salud',
	'compras',
	'servicios',
	'educacion',
	'viajes',
	'mascotas',
	'regalos',
	'otros',
] as const;

export type ExpenseCategory = (typeof EXPENSE_CATEGORIES)[number];

/** The same list as a Zod enum, for validating request bodies. */
export const expenseCategorySchema = z.enum(EXPENSE_CATEGORIES);

/** Current month as `YYYY-MM`, the anchor the dashboard defaults to. */
export function currentMonth(): string {
	const now = new Date();
	return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}
