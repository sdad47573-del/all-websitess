import { Input, Checkbox, VapListItem } from '@react-components';
import { useGetAllItems, useCreateBuyWithItems } from '@/hooks';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Toastify from 'toastify-js';
import { PageLayout } from '@/components/PageLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { useState } from 'react';
import { useLocation } from 'wouter';

const schema = z.object({
	label: z.string().min(2),
	fecha: z.string().min(2),
	eur: z.coerce.number().positive(),
	payed: z.boolean().default(false),
});

type FormData = z.input<typeof schema>;

type SelectedItem = { item_id: number; title: string; quantity: number };

export const ComprasNueva = () => {
	const { data: items = [] } = useGetAllItems();
	const createBuy = useCreateBuyWithItems();
	const [, setLocation] = useLocation();
	const { register, handleSubmit, formState } = useForm<FormData>({
		defaultValues: { fecha: new Date().toISOString().slice(0, 10), payed: false },
		resolver: zodResolver(schema),
	});
	const { errors } = formState;
	const [selected, setSelected] = useState<SelectedItem[]>([]);
	const [currentItemId, setCurrentItemId] = useState<number | ''>('');
	const [currentQty, setCurrentQty] = useState<number>(1);

	const addItem = () => {
		if (!currentItemId || currentQty <= 0) return;
		const item = items.find((i) => i.id === currentItemId);
		if (!item) return;
		setSelected((prev) => {
			const exists = prev.find((p) => p.item_id === currentItemId);
			if (exists) {
				return prev.map((p) =>
					p.item_id === currentItemId ? { ...p, quantity: p.quantity + currentQty } : p,
				);
			}
			return [...prev, { item_id: currentItemId, title: item.title, quantity: currentQty }];
		});
		setCurrentItemId('');
		setCurrentQty(1);
	};

	const addItemById = (itemId: number) => {
		if (currentQty <= 0) return;
		const item = items.find((i) => i.id === itemId);
		if (!item) return;
		setSelected((prev) => {
			const exists = prev.find((p) => p.item_id === itemId);
			if (exists) {
				return prev.map((p) =>
					p.item_id === itemId ? { ...p, quantity: p.quantity + currentQty } : p,
				);
			}
			return [...prev, { item_id: itemId, title: item.title, quantity: currentQty }];
		});
	};

	const removeItem = (id: number) => {
		setSelected((prev) => prev.filter((item) => item.item_id !== id));
	};

	const onSubmit = async (values: FormData) => {
		const { error } = await createBuy.mutateAsync([
			{ label: values.label, fecha: values.fecha, eur: values.eur, payed: values.payed },
			selected.map((s) => ({ item_id: s.item_id, quantity: s.quantity })),
		]);

		if (error) {
			Toastify({
				text: error.message || 'Error al registrar la compra',
				duration: 3000,
				gravity: 'top',
				position: 'right',
				style: { background: 'linear-gradient(to right, #ef4444, #f87171)' },
				className: 'rounded-lg shadow-lg font-medium',
			}).showToast();
			return;
		}

		Toastify({
			text: 'Compra registrada correctamente',
			duration: 2500,
			gravity: 'top',
			position: 'right',
			style: { background: 'linear-gradient(to right, #10b981, #34d399)' },
			className: 'rounded-lg shadow-lg font-medium',
		}).showToast();
		setLocation('/compras');
	};

	return (
		<PageLayout>
			<div className="p-5">
				<SectionHeader
					title="Registrar nueva compra"
					subtitle="Selecciona items y cantidad, y los detalles de la compra"
				/>

				<form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-3xl space-y-6">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
						<Input
							label="Etiqueta"
							placeholder="Proveedor / Descripción"
							leftIconClass="ri-price-tag-3-line"
							error={errors.label?.message}
							{...register('label')}
						/>
						<Input
							label="Fecha"
							type="date"
							leftIconClass="ri-calendar-line"
							error={errors.fecha?.message}
							{...register('fecha')}
						/>
						<Input
							label="Total (€)"
							type="number"
							placeholder="0.00"
							leftIconClass="ri-money-euro-circle-line"
							error={errors.eur?.message as any}
							{...register('eur', { valueAsNumber: true })}
						/>
					</div>

					<div className="flex items-center justify-between">
						<Checkbox label="Pagado" {...register('payed')} />
					</div>

					<div className="border-base-300 rounded-xl border p-4">
						<h3 className="mb-3 text-lg font-bold">Añadir items</h3>
						<div className="flex flex-col gap-3 sm:flex-row">
							<select
								className="select select-bordered w-full sm:max-w-xs"
								value={currentItemId}
								onChange={(e) => setCurrentItemId(Number(e.target.value) || '')}
							>
								<option value="">Selecciona un item</option>
								{items.map((item) => (
									<option key={item.id} value={item.id}>
										{item.title}
									</option>
								))}
							</select>
							<input
								type="number"
								className="input input-bordered w-full sm:max-w-[140px]"
								placeholder="Cantidad"
								min={1}
								value={currentQty}
								onChange={(e) => setCurrentQty(Number(e.target.value) || 1)}
							/>
							<button type="button" className="btn btn-primary" onClick={addItem}>
								Añadir
							</button>
						</div>

						{selected.length > 0 && (
							<div className="mt-4">
								<ul className="divide-base-300 border-base-300 divide-y rounded-lg border">
									{selected.map((s) => (
										<li key={s.item_id} className="flex items-center justify-between p-3">
											<div>
												<p className="font-medium">{s.title}</p>
												<p className="text-base-content/60 text-sm">Cantidad: {s.quantity}</p>
											</div>
											<button
												type="button"
												className="btn btn-ghost btn-sm text-error"
												onClick={() => removeItem(s.item_id)}
											>
												<i className="ri-delete-bin-6-line"></i>
												Quitar
											</button>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>

					<div className="mt-6">
						<h4 className="text-md mb-3 font-bold">Productos actuales</h4>
						<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
							{items.map((item) => (
								<div key={item.id} className="cursor-pointer" onClick={() => addItemById(item.id)}>
									<VapListItem
										id={item.id}
										title={item.title}
										src={item.src}
										amount={item.amount}
									/>
								</div>
							))}
						</div>
						<p className="text-base-content/60 mt-2 text-xs">
							Pulsa un producto para añadirlo con la cantidad indicada.
						</p>
					</div>

					<div className="flex justify-end">
						<button
							type="submit"
							className="btn btn-primary"
							disabled={createBuy.isPending || selected.length === 0}
						>
							Registrar compra
						</button>
					</div>
				</form>
			</div>
		</PageLayout>
	);
};
