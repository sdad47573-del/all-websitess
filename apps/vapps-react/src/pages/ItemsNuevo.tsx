import { Input, Checkbox } from '@react-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Toastify from 'toastify-js';
import { useInsertItem } from '@/hooks';
import { useLocation } from 'wouter';
import { PageLayout } from '../components/PageLayout';
import { SectionHeader } from '../components/SectionHeader';

const schema = z.object({
	title: z.string().min(2),
	es_title: z.string().min(2),
	brand: z.string().optional(),
	image_url: z.string().url().optional(),
	amount: z.coerce.number().int().nonnegative(),
	active: z.boolean().default(true),
});

type FormData = z.input<typeof schema>;

export const ItemsNuevo = () => {
	const { register, handleSubmit, formState } = useForm<FormData>({
		defaultValues: { active: true, amount: 0 },
		resolver: zodResolver(schema),
	});
	const { errors } = formState;
	const insertItem = useInsertItem();
	const [, setLocation] = useLocation();

	const onSubmit = async (values: FormData) => {
		const { error } = await insertItem.mutateAsync(values as any);
		if (error) {
			Toastify({
				text: error.message || 'Error al crear el producto',
				duration: 3000,
				gravity: 'top',
				position: 'right',
				style: { background: 'linear-gradient(to right, #ef4444, #f87171)' },
				className: 'rounded-lg shadow-lg font-medium',
			}).showToast();
			return;
		}
		Toastify({
			text: 'Producto creado correctamente',
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
				<SectionHeader title="Añadir nuevo producto" subtitle="Crea un item para el inventario" />
				<form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-xl space-y-4">
					<Input
						label="Título"
						placeholder="Nombre del producto"
						leftIconClass="ri-price-tag-3-line"
						error={errors.title?.message}
						{...register('title')}
					/>
					<Input
						label="Título ES"
						placeholder="Nombre en español"
						leftIconClass="ri-translate-2"
						error={errors.es_title?.message}
						{...register('es_title')}
					/>
					<Input
						label="Marca"
						placeholder="VAPSOLO, BOLERO..."
						leftIconClass="ri-building-4-line"
						error={errors.brand?.message as any}
						{...register('brand')}
					/>
					<Input
						label="URL de imagen"
						placeholder="https://..."
						leftIconClass="ri-image-line"
						error={errors.image_url?.message as any}
						{...register('image_url')}
					/>
					<Input
						label="Cantidad inicial"
						type="number"
						step={1}
						placeholder="0"
						leftIconClass="ri-hashtag"
						error={errors.amount?.message as any}
						{...register('amount', { valueAsNumber: true })}
					/>
					<div className="flex items-center justify-between">
						<Checkbox label="Activo" {...register('active')} />
						<button type="submit" className="btn btn-primary" disabled={insertItem.isPending}>
							Crear producto
						</button>
					</div>
				</form>
			</div>
		</PageLayout>
	);
};
