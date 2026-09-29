import { motion } from 'framer-motion';
import { Banknote, ListChecks, Tag, Wallet } from 'lucide-react';
import type { Stats } from '@/api';
import { formatCurrency } from '@/lib/finance';
import { categoryMeta } from '@/lib/finance';
import { cn } from '@/lib/utils';

type Props = {
	stats: Stats;
	/**
	 * What is left of the month's budget, or `null` when none is set. Kept as a
	 * prop because it is a comparison between two endpoints: the budget limit
	 * lives on `/api/budget` and the spend total on `/api/expenses/stats`.
	 */
	budgetRemaining: number | null;
};

export function KpiCards({ stats, budgetRemaining }: Props) {
	const cards = [
		{
			icon: Banknote,
			label: 'Gasto total',
			value: formatCurrency(stats.total),
			hint:
				stats.count > 0
					? `${stats.count} movimiento${stats.count === 1 ? '' : 's'}`
					: 'Sin gastos aún',
			color: 'from-primary/15 to-primary/0',
			iconBg: 'bg-primary/15 text-primary',
		},
		{
			icon: ListChecks,
			label: 'Gasto promedio',
			value: stats.count > 0 ? formatCurrency(stats.average) : '—',
			hint: 'Por movimiento',
			color: 'from-chart-2/15 to-chart-2/0',
			iconBg: 'bg-chart-2/15 text-chart-2',
		},
		{
			icon: Tag,
			label: 'Categoría top',
			value: stats.topCategory ? categoryMeta(stats.topCategory).label : '—',
			hint: stats.topCategory
				? `${formatCurrency(stats.byCategory[0]?.total ?? 0)} este mes`
				: 'Empieza a registrar',
			color: 'from-chart-3/15 to-chart-3/0',
			iconBg: 'bg-chart-3/15 text-chart-3',
			emoji: stats.topCategory ? categoryMeta(stats.topCategory).emoji : undefined,
		},
		{
			icon: Wallet,
			label: 'Presupuesto restante',
			value: budgetRemaining === null ? 'Sin presupuesto' : formatCurrency(budgetRemaining),
			hint:
				budgetRemaining === null
					? 'Define uno en la tarjeta inferior'
					: budgetRemaining < 0
						? 'Excedido'
						: 'Disponible este mes',
			color:
				budgetRemaining !== null && budgetRemaining < 0
					? 'from-destructive/15 to-destructive/0'
					: 'from-chart-1/15 to-chart-1/0',
			iconBg:
				budgetRemaining !== null && budgetRemaining < 0
					? 'bg-destructive/15 text-destructive'
					: 'bg-chart-1/15 text-chart-1',
		},
	];

	return (
		<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{cards.map((c, i) => (
				<motion.div
					key={c.label}
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45, delay: 0.05 * i }}
					className="group bg-card relative overflow-hidden rounded-2xl border p-5"
				>
					<div
						className={cn(
							'absolute inset-0 -z-10 bg-gradient-to-br opacity-90 transition-opacity group-hover:opacity-100',
							c.color,
						)}
					/>
					<div className="flex items-start justify-between">
						<div
							className={cn(
								'grid size-10 place-items-center rounded-xl ring-1 ring-current/10 ring-inset',
								c.iconBg,
							)}
						>
							<c.icon className="size-4.5" />
						</div>
						{c.emoji && (
							<span className="text-2xl grayscale-0" aria-hidden>
								{c.emoji}
							</span>
						)}
					</div>
					<p className="text-muted-foreground mt-4 text-xs font-medium tracking-wider uppercase">
						{c.label}
					</p>
					<p
						className={cn(
							'font-display mt-1 text-2xl font-semibold tracking-tight',
							c.label === 'Categoría top' && 'text-lg',
						)}
					>
						{c.value}
					</p>
					<p className="text-muted-foreground mt-1 text-xs">{c.hint}</p>
				</motion.div>
			))}
		</div>
	);
}
