import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Plus, Save } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { api, errorMessage, type Expense } from '@/api';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CategorySelect } from '@/components/expenses/CategorySelect';
import { PaymentMethodSelect } from '@/components/expenses/PaymentMethodSelect';
import { CATEGORY_KEYS, paymentsList, todayISO } from '@/lib/finance';
import { cn } from '@/lib/utils';

const PAYMENT_METHODS = paymentsList();

const formSchema = z.object({
	amount: z
		.string()
		.min(1, 'Introduce una cantidad')
		.refine((v) => !Number.isNaN(Number(v.replace(',', '.'))) && Number(v.replace(',', '.')) > 0, {
			message: 'La cantidad debe ser mayor que 0',
		}),
	category: z.enum(CATEGORY_KEYS),
	description: z.string().min(1, 'Añade una descripción').max(120),
	date: z.string().min(1, 'Fecha requerida'),
	paymentMethod: z.string().max(40).optional(),
	notes: z.string().max(200).optional(),
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
	trigger?: React.ReactNode;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	defaultDate?: string;
	/** When given, the dialog edits this expense instead of creating one. */
	editing?: Expense;
	/** Called after a successful create or update, so the list can refetch. */
	onSaved?: () => void;
};

export function AddExpenseDialog({
	trigger,
	open,
	onOpenChange,
	defaultDate,
	editing,
	onSaved,
}: Props) {
	const isEdit = Boolean(editing);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: editing
			? {
					amount: String(editing.amount).replace('.', ','),
					category: editing.category,
					description: editing.description,
					date: editing.date,
					paymentMethod: editing.paymentMethod ?? '',
					notes: editing.notes ?? '',
				}
			: {
					amount: '',
					category: 'comida',
					description: '',
					date: defaultDate ?? todayISO(),
					paymentMethod: 'Efectivo',
					notes: '',
				},
	});

	useEffect(() => {
		if (editing) {
			form.reset({
				amount: String(editing.amount).replace('.', ','),
				category: editing.category,
				description: editing.description,
				date: editing.date,
				paymentMethod: editing.paymentMethod ?? '',
				notes: editing.notes ?? '',
			});
		}
	}, [editing, form]);

	const onSubmit = async (values: FormValues) => {
		const amount = Number(values.amount.replace(',', '.'));
		if (Number.isNaN(amount)) return;
		const payload = {
			amount,
			category: values.category,
			description: values.description.trim(),
			date: values.date,
			paymentMethod: values.paymentMethod?.trim() || undefined,
			notes: values.notes?.trim() || undefined,
		};

		const response = editing
			? await api.api.expenses[':id'].$put({
					param: { id: editing.id },
					json: payload,
				})
			: await api.api.expenses.$post({ json: payload });

		if (!response.ok) {
			toast.error(
				await errorMessage(
					response,
					editing ? 'No se pudo actualizar el gasto.' : 'No se pudo añadir el gasto.',
				),
			);
			return;
		}

		toast.success(editing ? 'Gasto actualizado.' : 'Gasto añadido.');
		onSaved?.();
		onOpenChange?.(false);
		if (!isEdit) {
			form.reset({
				amount: '',
				category: values.category,
				description: '',
				date: values.date,
				paymentMethod: values.paymentMethod ?? 'Efectivo',
				notes: '',
			});
		}
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			{trigger ? (
				<DialogTrigger asChild>{trigger}</DialogTrigger>
			) : (
				<DialogTrigger asChild>
					<Button className="gap-1.5" size="sm">
						<Plus className="size-4" />
						Añadir gasto
					</Button>
				</DialogTrigger>
			)}
			<DialogContent className="sm:max-w-lg">
				<DialogHeader>
					<DialogTitle>{isEdit ? 'Editar gasto' : 'Nuevo gasto'}</DialogTitle>
					<DialogDescription>
						{isEdit
							? 'Actualiza los detalles de este movimiento.'
							: 'Registra un movimiento en segundos. Lo verás al instante en tu panel.'}
					</DialogDescription>
				</DialogHeader>

				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" id="expense-form">
					<div className="grid grid-cols-2 gap-4">
						<div className="col-span-2 sm:col-span-1">
							<Label htmlFor="amount">Cantidad (€)</Label>
							<div className="relative mt-1.5">
								<span className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2 text-sm">
									€
								</span>
								<Input
									id="amount"
									type="text"
									inputMode="decimal"
									placeholder="0,00"
									className={cn(
										'font-display pl-7 text-lg font-semibold tracking-tight',
										form.formState.errors.amount && 'border-destructive',
									)}
									{...form.register('amount')}
								/>
							</div>
							{form.formState.errors.amount && (
								<p className="text-destructive mt-1 text-xs">
									{form.formState.errors.amount.message}
								</p>
							)}
						</div>

						<div className="col-span-2 sm:col-span-1">
							<Label htmlFor="date">Fecha</Label>
							<Input id="date" type="date" className="mt-1.5" {...form.register('date')} />
							{form.formState.errors.date && (
								<p className="text-destructive mt-1 text-xs">
									{form.formState.errors.date.message}
								</p>
							)}
						</div>
					</div>

					<div>
						<Label>Categoría</Label>
						<div className="mt-1.5">
							<CategorySelect
								value={form.watch('category')}
								onChange={(v) => form.setValue('category', v, { shouldValidate: true })}
							/>
						</div>
					</div>

					<div>
						<Label htmlFor="description">Descripción</Label>
						<Input
							id="description"
							placeholder="Ej. Cena con amigos"
							className="mt-1.5"
							{...form.register('description')}
						/>
						{form.formState.errors.description && (
							<p className="text-destructive mt-1 text-xs">
								{form.formState.errors.description.message}
							</p>
						)}
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div>
							<Label>Método de pago</Label>
							<div className="mt-1.5">
								<PaymentMethodSelect
									value={form.watch('paymentMethod') ?? ''}
									onChange={(v) => form.setValue('paymentMethod', v)}
									options={PAYMENT_METHODS}
								/>
							</div>
						</div>
						<div>
							<Label htmlFor="notes">Notas (opcional)</Label>
							<Input
								id="notes"
								placeholder="Detalles extra"
								className="mt-1.5"
								{...form.register('notes')}
							/>
						</div>
					</div>

					<DialogFooter className="-mx-6 mt-2 border-t px-6 pt-4">
						<Button type="button" variant="ghost" onClick={() => onOpenChange?.(false)}>
							Cancelar
						</Button>
						<Button type="submit" className="gap-1.5" disabled={form.formState.isSubmitting}>
							{form.formState.isSubmitting ? (
								<Loader2 className="size-4 animate-spin" />
							) : isEdit ? (
								<Save className="size-4" />
							) : (
								<Plus className="size-4" />
							)}
							{isEdit ? 'Guardar cambios' : 'Añadir gasto'}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
