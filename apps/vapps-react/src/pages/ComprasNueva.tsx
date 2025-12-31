import { Input, Checkbox } from '@react-components';
import { useGetAllItemsAll, useCreateBuyWithItems, useGetAllBrands } from '@/hooks';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Toastify from 'toastify-js';
import { PageLayout } from '@/components/PageLayout';
import { SectionHeader } from '@/components/SectionHeader';
import { lazy, Suspense, useState } from 'react';
import { useLocation } from 'wouter';
import { Loading } from '@/components/Loading';

const SearchFilters = lazy(() =>
	import('../components/ComprasNueva/SearchFilters').then((m) => ({ default: m.SearchFilters })),
);
const ProductGrid = lazy(() =>
	import('../components/ComprasNueva/ProductGrid').then((m) => ({ default: m.ProductGrid })),
);
const AddItems = lazy(() =>
	import('../components/ComprasNueva/AddItems').then((m) => ({ default: m.AddItems })),
);
const SelectedItemsList = lazy(() =>
	import('../components/ComprasNueva/SelectedItemsList').then((m) => ({
		default: m.SelectedItemsList,
	})),
);

const schema = z.object({
	label: z.string().min(2),
	fecha: z.string().min(2),
	eur: z.coerce.number().positive(),
	payed: z.boolean().default(false),
});

type FormData = z.input<typeof schema>;

type SelectedItem = { item_id: number; title: string; quantity: number };

export const ComprasNueva = () => {
	const { data: items = [] } = useGetAllItemsAll();
	const { data: brands = [] } = useGetAllBrands();
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
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [selectedBrand, setSelectedBrand] = useState<string>('');

	const filteredItems = items.filter((item) => {
		const matchesBrand = selectedBrand ? item.brand === selectedBrand : true;
		const matchesText =
			searchTerm.trim().length === 0
				? true
				: item.title.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesBrand && matchesText;
	});

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

					<Suspense fallback={<Loading />}>
						<SearchFilters
							searchTerm={searchTerm}
							onSearchChange={setSearchTerm}
							brands={brands ?? []}
							selectedBrand={selectedBrand}
							onBrandChange={setSelectedBrand}
						/>
					</Suspense>

					<Suspense fallback={<Loading />}>
						<AddItems
							items={filteredItems.map((i) => ({ id: i.id, title: i.title }))}
							currentItemId={currentItemId}
							onItemIdChange={setCurrentItemId}
							currentQty={currentQty}
							onQtyChange={setCurrentQty}
							onAdd={addItem}
						/>
						<SelectedItemsList selected={selected} onRemove={removeItem} />
					</Suspense>

					<Suspense fallback={<Loading />}>
						<ProductGrid
							items={filteredItems.map((item) => ({
								id: item.id,
								title: item.title,
								src: item.src,
								amount: item.amount,
							}))}
							onItemClick={addItemById}
						/>
					</Suspense>

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
