/**
 * The category keys the API accepts.
 *
 * This is the same list as `EXPENSE_CATEGORIES` in `server/categories.ts` and as
 * the `CHECK` constraint in `server/migrations/0001_init.sql`. It lives here as
 * well so the form can validate before a request is sent; `server/index.test.ts`
 * asserts the two lists match, so a category added to one and not the other
 * fails the test rather than quietly rejecting saves.
 */
export const CATEGORY_KEYS = [
  "comida",
  "transporte",
  "hogar",
  "entretenimiento",
  "salud",
  "compras",
  "servicios",
  "educacion",
  "viajes",
  "mascotas",
  "regalos",
  "otros",
] as const;

export type ExpenseCategory = (typeof CATEGORY_KEYS)[number];

export type CategoryMeta = {
	key: ExpenseCategory;
	label: string;
	emoji: string;
	// Tailwind utility classes scoped via CSS variables
	bgClass: string;
	textClass: string;
	ringClass: string;
	chartVar: string; // CSS variable name for chart color
};

export const CATEGORIES = [
	{
		key: 'comida',
		label: 'Comida',
		emoji: '🍽️',
		bgClass: 'bg-orange-100 dark:bg-orange-950/40',
		textClass: 'text-orange-700 dark:text-orange-300',
		ringClass: 'ring-orange-200 dark:ring-orange-900/60',
		chartVar: '--chart-1',
	},
	{
		key: 'transporte',
		label: 'Transporte',
		emoji: '🚗',
		bgClass: 'bg-sky-100 dark:bg-sky-950/40',
		textClass: 'text-sky-700 dark:text-sky-300',
		ringClass: 'ring-sky-200 dark:ring-sky-900/60',
		chartVar: '--chart-2',
	},
	{
		key: 'hogar',
		label: 'Hogar',
		emoji: '🏠',
		bgClass: 'bg-emerald-100 dark:bg-emerald-950/40',
		textClass: 'text-emerald-700 dark:text-emerald-300',
		ringClass: 'ring-emerald-200 dark:ring-emerald-900/60',
		chartVar: '--chart-3',
	},
	{
		key: 'entretenimiento',
		label: 'Ocio',
		emoji: '🎬',
		bgClass: 'bg-violet-100 dark:bg-violet-950/40',
		textClass: 'text-violet-700 dark:text-violet-300',
		ringClass: 'ring-violet-200 dark:ring-violet-900/60',
		chartVar: '--chart-4',
	},
	{
		key: 'salud',
		label: 'Salud',
		emoji: '🩺',
		bgClass: 'bg-rose-100 dark:bg-rose-950/40',
		textClass: 'text-rose-700 dark:text-rose-300',
		ringClass: 'ring-rose-200 dark:ring-rose-900/60',
		chartVar: '--chart-5',
	},
	{
		key: 'compras',
		label: 'Compras',
		emoji: '🛍️',
		bgClass: 'bg-pink-100 dark:bg-pink-950/40',
		textClass: 'text-pink-700 dark:text-pink-300',
		ringClass: 'ring-pink-200 dark:ring-pink-900/60',
		chartVar: '--chart-1',
	},
	{
		key: 'servicios',
		label: 'Servicios',
		emoji: '💡',
		bgClass: 'bg-yellow-100 dark:bg-yellow-950/40',
		textClass: 'text-yellow-700 dark:text-yellow-300',
		ringClass: 'ring-yellow-200 dark:ring-yellow-900/60',
		chartVar: '--chart-3',
	},
	{
		key: 'educacion',
		label: 'Educación',
		emoji: '📚',
		bgClass: 'bg-indigo-100 dark:bg-indigo-950/40',
		textClass: 'text-indigo-700 dark:text-indigo-300',
		ringClass: 'ring-indigo-200 dark:ring-indigo-900/60',
		chartVar: '--chart-2',
	},
	{
		key: 'viajes',
		label: 'Viajes',
		emoji: '✈️',
		bgClass: 'bg-teal-100 dark:bg-teal-950/40',
		textClass: 'text-teal-700 dark:text-teal-300',
		ringClass: 'ring-teal-200 dark:ring-teal-900/60',
		chartVar: '--chart-5',
	},
	{
		key: 'mascotas',
		label: 'Mascotas',
		emoji: '🐾',
		bgClass: 'bg-amber-100 dark:bg-amber-950/40',
		textClass: 'text-amber-700 dark:text-amber-300',
		ringClass: 'ring-amber-200 dark:ring-amber-900/60',
		chartVar: '--chart-4',
	},
	{
		key: 'regalos',
		label: 'Regalos',
		emoji: '🎁',
		bgClass: 'bg-fuchsia-100 dark:bg-fuchsia-950/40',
		textClass: 'text-fuchsia-700 dark:text-fuchsia-300',
		ringClass: 'ring-fuchsia-200 dark:ring-fuchsia-900/60',
		chartVar: '--chart-1',
	},
	{
		key: 'otros',
		label: 'Otros',
		emoji: '📦',
		bgClass: 'bg-slate-100 dark:bg-slate-800',
		textClass: 'text-slate-700 dark:text-slate-300',
		ringClass: 'ring-slate-200 dark:ring-slate-700',
		chartVar: '--chart-2',
	},
] satisfies readonly CategoryMeta[];

export function categoryMeta(key: string): CategoryMeta {
	return (
		CATEGORIES.find((c) => c.key === key) ?? {
			key: 'otros',
			label: key,
			emoji: '📦',
			bgClass: 'bg-slate-100 dark:bg-slate-800',
			textClass: 'text-slate-700 dark:text-slate-300',
			ringClass: 'ring-slate-200',
			chartVar: '--chart-2',
		}
	);
}

// --- Currency / number formatting ---
const formatter = new Intl.NumberFormat('es-ES', {
	style: 'currency',
	currency: 'EUR',
	maximumFractionDigits: 2,
});

const plainFormatter = new Intl.NumberFormat('es-ES', {
	maximumFractionDigits: 2,
});

export function formatCurrency(amount: number): string {
	return formatter.format(amount);
}

export function formatAmountInput(amount: number): string {
	return plainFormatter.format(amount);
}

export function todayISO(): string {
	const d = new Date();
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function currentMonth(): string {
	const d = new Date();
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

export function shiftMonth(month: string, delta: number): string {
	const [yStr, mStr] = month.split('-');
	let y = Number(yStr);
	let m = Number(mStr) + delta;
	if (m < 1) {
		m += 12;
		y -= 1;
	}
	if (m > 12) {
		m -= 12;
		y += 1;
	}
	return `${y}-${String(m).padStart(2, '0')}`;
}

const MONTHS_ES = [
	'enero',
	'febrero',
	'marzo',
	'abril',
	'mayo',
	'junio',
	'julio',
	'agosto',
	'septiembre',
	'octubre',
	'noviembre',
	'diciembre',
];

export function monthLabel(month: string): string {
	const [y, m] = month.split('-');
	return `${MONTHS_ES[Number(m) - 1]} ${y}`;
}

const DATE_FMT = new Intl.DateTimeFormat('es-ES', {
	day: '2-digit',
	month: 'short',
	year: 'numeric',
});

export function formatLongDate(iso: string): string {
	// iso is YYYY-MM-DD; build date in local timezone safely
	const parts = iso.split('-').map((p) => Number(p));
	if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return iso;
	const d = new Date(parts[0], parts[1] - 1, parts[2]);
	return DATE_FMT.format(d);
}

export function paymentsList(): string[] {
	return ['Efectivo', 'Tarjeta', 'Transferencia', 'Bizum', 'Otro'];
}
