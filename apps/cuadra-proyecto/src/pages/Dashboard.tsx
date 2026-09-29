import { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	ArrowLeft,
	ArrowRight,
	CalendarDays,
	CreditCard,
	DollarSign,
	Edit3,
	PieChart,
	Plus,
	Settings,
	Tag,
	Trash2,
	Wallet,
} from 'lucide-react';
import { toast } from 'sonner';
import { api, errorMessage, type Budget, type Expense, type Stats } from '@/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { KpiCards } from '@/components/expenses/KpiCards';
import { AddExpenseDialog } from '@/components/expenses/AddExpenseDialog';
import { CategoryBadge } from '@/components/expenses/CategoryBadge';
import {
	formatCurrency,
	formatLongDate,
	currentMonth,
	shiftMonth,
	monthLabel,
	CATEGORIES,
	categoryMeta,
} from '@/lib/finance';

export default function Dashboard() {
	// State
	const [selectedMonth, setSelectedMonth] = useState(currentMonth());
	const [showBudgetDialog, setShowBudgetDialog] = useState(false);
	const [budgetInput, setBudgetInput] = useState('');
	const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
	const [deletingExpense, setDeletingExpense] = useState<Expense | null>(null);
	const [filterCategory, setFilterCategory] = useState<string>('all');

	// The three reads below are refetched together whenever the month changes and
	// after every write, so the cards, the list and the budget bar never disagree
	// with each other or with what is stored.
	const [expenses, setExpenses] = useState<Expense[] | null>(null);
	const [stats, setStats] = useState<Stats | null>(null);
	const [budget, setBudget] = useState<Budget | null>(null);
	const [loadFailed, setLoadFailed] = useState(false);

	const load = useCallback(async () => {
		try {
			// Fetch in parallel: the three endpoints are independent reads of the
			// same month, and the month is already known.
			const [expensesResponse, statsResponse, budgetResponse] = await Promise.all([
				api.api.expenses.$get({ query: { month: selectedMonth } }),
				api.api.expenses.stats.$get({ query: { month: selectedMonth } }),
				api.api.budget.$get({ query: { month: selectedMonth } }),
			]);

			if (!expensesResponse.ok || !statsResponse.ok || !budgetResponse.ok) {
				throw new Error('read');
			}

			setExpenses(await expensesResponse.json());
			setStats(await statsResponse.json());
			setBudget(await budgetResponse.json());
			setLoadFailed(false);
		} catch {
			// Leave the previous month's data in place rather than blanking the page,
			// and say so instead of showing stale numbers as if they were current.
			setLoadFailed(true);
		}
	}, [selectedMonth]);

	useEffect(() => {
		void load();
	}, [load]);

	// Filtered expenses
	const filteredExpenses = useMemo(() => {
		if (!expenses) return [];
		if (filterCategory === 'all') return expenses;
		return expenses.filter((e) => e.category === filterCategory);
	}, [expenses, filterCategory]);

	// Handle month navigation
	const handlePrevMonth = () => setSelectedMonth(shiftMonth(selectedMonth, -1));
	const handleNextMonth = () => setSelectedMonth(shiftMonth(selectedMonth, 1));

	// Handle budget save
	const handleSaveBudget = async () => {
		const amount = Number(budgetInput.replace(',', '.'));
		if (Number.isNaN(amount) || amount <= 0) {
			toast.error('Introduce un presupuesto mayor que 0.');
			return;
		}

		const response = await api.api.budget.$put({
			json: { month: selectedMonth, amount },
		});
		if (!response.ok) {
			toast.error(await errorMessage(response, 'No se pudo guardar el presupuesto.'));
			return;
		}

		setShowBudgetDialog(false);
		setBudgetInput('');
		await load();
		toast.success('Presupuesto actualizado.');
	};

	// Handle delete expense
	const handleDeleteExpense = async () => {
		if (!deletingExpense) return;

		const response = await api.api.expenses[':id'].$delete({
			param: { id: deletingExpense.id },
		});
		setDeletingExpense(null);
		if (!response.ok) {
			toast.error(await errorMessage(response, 'No se pudo eliminar el gasto.'));
			return;
		}

		await load();
		toast.success('Gasto eliminado.');
	};

	// Calculate budget progress
	const budgetProgress = useMemo(() => {
		if (!budget || !stats) return null;
		const used = stats.total;
		const total = budget.amount;
		const percentage = Math.min((used / total) * 100, 100);
		const remaining = total - used;
		return { used, total, percentage, remaining };
	}, [budget, stats]);

	return (
		<main className="from-background via-background to-primary/5 min-h-screen bg-gradient-to-br">
			<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				{/* Header */}
				<motion.header
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
				>
					<div className="flex items-center gap-4">
						<div className="bg-primary/10 flex size-12 items-center justify-center rounded-2xl">
							<Wallet className="text-primary size-6" />
						</div>
						<div>
							<h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Mis Finanzas</h1>
							<p className="text-muted-foreground text-sm">
								Tu gasto de {monthLabel(selectedMonth)} 👋
							</p>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<AddExpenseDialog
							trigger={
								<Button className="gap-2">
									<Plus className="size-4" />
									<span className="hidden sm:inline">Nuevo gasto</span>
									<span className="sm:hidden">Nuevo</span>
								</Button>
							}
							onSaved={load}
						/>
					</div>
				</motion.header>

				{/* Month Selector */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="mb-6 flex items-center justify-center gap-4"
				>
					<Button
						variant="outline"
						size="icon"
						onClick={handlePrevMonth}
						className="size-10 rounded-full"
					>
						<ArrowLeft className="size-4" />
					</Button>
					<div className="bg-card flex items-center gap-2 rounded-full border px-6 py-2.5 shadow-sm">
						<CalendarDays className="text-muted-foreground size-4" />
						<span className="font-semibold capitalize">{monthLabel(selectedMonth)}</span>
					</div>
					<Button
						variant="outline"
						size="icon"
						onClick={handleNextMonth}
						className="size-10 rounded-full"
					>
						<ArrowRight className="size-4" />
					</Button>
				</motion.div>

				{/* KPI Cards */}
				{loadFailed && (
					<p
						role="alert"
						className="border-destructive/40 bg-destructive/10 text-destructive mb-4 rounded-lg border px-4 py-3 text-sm"
					>
						No se pudieron cargar los datos. Comprueba que el servidor de la API está en marcha.
					</p>
				)}

				{stats && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					>
						<KpiCards stats={stats} budgetRemaining={budget ? budget.amount - stats.total : null} />
					</motion.div>
				)}

				{/* Main Content Grid */}
				<div className="mt-8 grid gap-6 lg:grid-cols-3">
					{/* Expenses List - Takes 2 columns */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3 }}
						className="lg:col-span-2"
					>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
								<CardTitle className="flex items-center gap-2 text-lg">
									<Tag className="size-5" />
									Gastos del mes
								</CardTitle>
								<div className="flex items-center gap-2">
									<select
										value={filterCategory}
										onChange={(e) => setFilterCategory(e.target.value)}
										className="bg-background rounded-lg border px-3 py-1.5 text-sm"
									>
										<option value="all">Todas las categorías</option>
										{CATEGORIES.map((cat) => (
											<option key={cat.key} value={cat.key}>
												{cat.emoji} {cat.label}
											</option>
										))}
									</select>
								</div>
							</CardHeader>
							<CardContent>
								{!expenses ? (
									<div className="flex h-32 items-center justify-center">
										<div className="border-primary size-8 animate-spin rounded-full border-4 border-t-transparent" />
									</div>
								) : filteredExpenses.length === 0 ? (
									<div className="text-muted-foreground flex h-40 flex-col items-center justify-center">
										<DollarSign className="mb-2 size-10 opacity-30" />
										<p>No hay gastos registrados</p>
										<p className="text-sm">
											{filterCategory !== 'all'
												? 'Prueba con otra categoría'
												: 'Añade tu primer gasto'}
										</p>
									</div>
								) : (
									<div className="space-y-2">
										<AnimatePresence>
											{filteredExpenses.map((expense) => (
												<motion.div
													key={expense.id}
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, x: -20 }}
													className="group hover:bg-muted/50 flex items-center gap-3 rounded-xl border p-3 transition-colors"
												>
													<CategoryBadge category={expense.category} />
													<div className="min-w-0 flex-1">
														<p className="truncate font-medium">{expense.description}</p>
														<p className="text-muted-foreground text-xs">
															{formatLongDate(expense.date)}
															{expense.paymentMethod && (
																<span className="ml-2 inline-flex items-center gap-1">
																	<CreditCard className="size-3" />
																	{expense.paymentMethod}
																</span>
															)}
														</p>
													</div>
													<div className="text-right">
														<p className="text-destructive font-semibold">
															-{formatCurrency(expense.amount)}
														</p>
													</div>
													<div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
														<Button
															variant="ghost"
															size="icon"
															className="size-8"
															onClick={() => setEditingExpense(expense)}
														>
															<Edit3 className="size-3.5" />
														</Button>
														<Button
															variant="ghost"
															size="icon"
															className="text-destructive size-8"
															onClick={() => setDeletingExpense(expense)}
														>
															<Trash2 className="size-3.5" />
														</Button>
													</div>
												</motion.div>
											))}
										</AnimatePresence>
									</div>
								)}
							</CardContent>
						</Card>
					</motion.div>

					{/* Sidebar - Budget & Categories */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4 }}
						className="space-y-6"
					>
						{/* Budget Card */}
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
								<CardTitle className="flex items-center gap-2 text-lg">
									<Wallet className="size-5" />
									Presupuesto
								</CardTitle>
								<Button
									variant="ghost"
									size="icon"
									className="size-8"
									onClick={() => {
										setBudgetInput(budget?.amount?.toString() ?? '');
										setShowBudgetDialog(true);
									}}
								>
									<Settings className="size-4" />
								</Button>
							</CardHeader>
							<CardContent>
								{budgetProgress ? (
									<div className="space-y-3">
										<div className="flex items-end justify-between">
											<div>
												<p className="text-muted-foreground text-sm">Gastado</p>
												<p className="text-2xl font-bold">{formatCurrency(budgetProgress.used)}</p>
											</div>
											<div className="text-right">
												<p className="text-muted-foreground text-sm">
													de {formatCurrency(budgetProgress.total)}
												</p>
											</div>
										</div>
										<div className="bg-muted h-2 overflow-hidden rounded-full">
											<motion.div
												initial={{ width: 0 }}
												animate={{ width: `${budgetProgress.percentage}%` }}
												transition={{ duration: 0.8, ease: 'easeOut' }}
												className={`h-full rounded-full ${
													budgetProgress.remaining < 0
														? 'bg-destructive'
														: budgetProgress.percentage > 80
															? 'bg-yellow-500'
															: 'bg-primary'
												}`}
											/>
										</div>
										<div className="flex items-center justify-between text-sm">
											<span className="text-muted-foreground">
												{budgetProgress.percentage.toFixed(0)}% utilizado
											</span>
											<span
												className={
													budgetProgress.remaining < 0
														? 'text-destructive font-medium'
														: 'text-muted-foreground'
												}
											>
												{budgetProgress.remaining < 0 ? 'Excedido: ' : 'Restante: '}
												{formatCurrency(Math.abs(budgetProgress.remaining))}
											</span>
										</div>
									</div>
								) : (
									<div className="text-muted-foreground py-4 text-center">
										<Wallet className="mx-auto mb-2 size-8 opacity-30" />
										<p className="text-sm">Sin presupuesto definido</p>
										<Button
											variant="link"
											className="mt-1 text-sm"
											onClick={() => {
												setBudgetInput('');
												setShowBudgetDialog(true);
											}}
										>
											Configurar presupuesto
										</Button>
									</div>
								)}
							</CardContent>
						</Card>

						{/* Categories Summary */}
						{stats && stats.byCategory.length > 0 && (
							<Card>
								<CardHeader className="pb-3">
									<CardTitle className="flex items-center gap-2 text-lg">
										<PieChart className="size-5" />
										Por categoría
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-3">
										{stats.byCategory.map((item) => {
											const meta = categoryMeta(item.category);
											const percentage = stats.total > 0 ? (item.total / stats.total) * 100 : 0;
											return (
												<div key={item.category} className="space-y-1.5">
													<div className="flex items-center justify-between text-sm">
														<span className="flex items-center gap-2">
															<span>{meta.emoji}</span>
															<span>{meta.label}</span>
														</span>
														<span className="font-medium">{formatCurrency(item.total)}</span>
													</div>
													<div className="bg-muted h-1.5 overflow-hidden rounded-full">
														<motion.div
															initial={{ width: 0 }}
															animate={{ width: `${percentage}%` }}
															transition={{ duration: 0.6, delay: 0.1 }}
															className="bg-primary/70 h-full rounded-full"
														/>
													</div>
												</div>
											);
										})}
									</div>
								</CardContent>
							</Card>
						)}
					</motion.div>
				</div>
			</div>

			{/* Edit Expense Dialog */}
			{editingExpense && (
				<AddExpenseDialog
					open={true}
					onOpenChange={(open) => {
						if (!open) setEditingExpense(null);
					}}
					editing={editingExpense}
					onSaved={load}
				/>
			)}

			{/* Delete Confirmation Dialog */}
			<Dialog
				open={deletingExpense !== null}
				onOpenChange={(open) => {
					if (!open) setDeletingExpense(null);
				}}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Eliminar gasto</DialogTitle>
						<DialogDescription>
							¿Estás seguro de que quieres eliminar este gasto? Esta acción no se puede deshacer.
						</DialogDescription>
					</DialogHeader>
					{deletingExpense && (
						<div className="rounded-lg border p-4">
							<p className="font-medium">{deletingExpense.description}</p>
							<p className="text-muted-foreground text-sm">
								{formatCurrency(deletingExpense.amount)} • {formatLongDate(deletingExpense.date)}
							</p>
						</div>
					)}
					<DialogFooter>
						<Button variant="outline" onClick={() => setDeletingExpense(null)}>
							Cancelar
						</Button>
						<Button variant="destructive" onClick={handleDeleteExpense}>
							Eliminar
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Budget Dialog */}
			<Dialog open={showBudgetDialog} onOpenChange={setShowBudgetDialog}>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>Configurar presupuesto</DialogTitle>
						<DialogDescription>
							Establece un límite mensual para controlar tus gastos.
						</DialogDescription>
					</DialogHeader>
					<div className="space-y-4">
						<div>
							<Label htmlFor="budget">Presupuesto mensual (€)</Label>
							<div className="relative mt-1.5">
								<span className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2 text-sm">
									€
								</span>
								<Input
									id="budget"
									type="text"
									inputMode="decimal"
									placeholder="1000"
									className="pl-7 text-lg font-semibold"
									value={budgetInput}
									onChange={(e) => setBudgetInput(e.target.value)}
									onKeyDown={(e) => {
										if (e.key === 'Enter') handleSaveBudget();
									}}
								/>
							</div>
						</div>
						<div className="flex justify-end gap-2">
							<Button variant="outline" onClick={() => setShowBudgetDialog(false)}>
								Cancelar
							</Button>
							<Button onClick={handleSaveBudget}>Guardar</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</main>
	);
}
