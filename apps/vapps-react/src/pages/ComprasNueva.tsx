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

const showToast = (text: string, kind: 'success' | 'error') => {
	Toastify({
		text,
		duration: kind === 'success' ? 2500 : 3000,
		gravity: 'top',
		position: 'right',
		style: {
			background:
				kind === 'success'
					? 'linear-gradient(to right, #10b981, #34d399)'
					: 'linear-gradient(to right, #ef4444, #f87171)',
		},
		className: 'rounded-lg shadow-lg font-medium',
	}).showToast();
};

export const ComprasNueva = () => {
	const { data: items = [] } = useGetAllItemsAll();
	const { data: brands = [] } = useGetAllBrands();
	const createBuy = useCreateBuyWithItems();
	const [, setLocation] = useLocation();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: { fecha: new Date().toISOString().slice(0, 10), payed: false },
		resolver: zodResolver(schema),
	});
	const [selected, setSelected] = useState<SelectedItem[]>([]);
	const [currentItemId, setCurrentItemId] = useState<number | ''>('');
	const [currentQty, setCurrentQty] = useState<number>(1);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [selectedBrand, setSelectedBrand] = useState<string>('');
	const brandsList = (brands ?? []) as any[];
	const totalSelectedQty = selected.reduce((sum, s) => sum + s.quantity, 0);
	const brandOptions =
		brandsList.length > 0
			? brandsList
			: Array.from(new Set(items.map((i) => i.brand).filter(Boolean))).map((name, idx) => ({
					id: idx,
					name: name as string,
				}));

	const filteredItems = items.filter((item) => {
		const matchesBrand = !selectedBrand || item.brand === selectedBrand;
		const matchesText =
			!searchTerm.trim() || item.title.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesBrand && matchesText;
	});

	const upsertSelected = (itemId: number, title: string, qty: number) => {
		setSelected((prev) => {
			const exists = prev.find((p) => p.item_id === itemId);
			if (exists) {
				return prev.map((p) => (p.item_id === itemId ? { ...p, quantity: p.quantity + qty } : p));
			}
			return [...prev, { item_id: itemId, title, quantity: qty }];
		});
	};

	const addByIdWithQty = (itemId: number, qty: number) => {
		if (!itemId || qty <= 0) return;
		const item = items.find((i) => i.id === itemId);
		if (!item) return;
		upsertSelected(itemId, item.title, qty);
	};

	const addItem = () => {
		if (!currentItemId) return;
		addByIdWithQty(currentItemId as number, currentQty);
		setCurrentItemId('');
		setCurrentQty(1);
	};

	const addItemById = (itemId: number) => {
		addByIdWithQty(itemId, currentQty);
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
			showToast(error.message || 'Error al registrar la compra', 'error');
			return;
		}

		showToast('Compra registrada correctamente', 'success');
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
							error={errors.eur?.message}
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
							brands={brandOptions as any}
							selectedBrand={selectedBrand}
							onBrandChange={setSelectedBrand}
						/>
						<SelectedItemsList selected={selected} onRemove={removeItem} />
						{selected.length > 0 && (
							<div className="mt-2 flex justify-end">
								<div className="badge badge-info gap-2 px-3 py-2">
									<span className="text-[10px] font-bold uppercase opacity-70">Total añadidos</span>
									<span className="text-sm font-black">{totalSelectedQty}</span>
								</div>
							</div>
						)}
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
