import { Input, Checkbox } from '@react-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useInsertItem } from '@/hooks';
import { useLocation } from 'wouter';
import { showToast } from '@/utils/toast';

const schema = z.object({
	title: z.string().min(2),
	es_title: z.string().min(2),
	brand: z.string().optional(),
	image_url: z.string().url().optional().or(z.literal('')),
	amount: z.coerce.number().int().nonnegative(),
	active: z.boolean().default(true),
});

type FormData = z.input<typeof schema>;

export const ItemForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: { active: true, amount: 0 },
		resolver: zodResolver(schema),
	});

	const insertItem = useInsertItem();
	const [, setLocation] = useLocation();

	const onSubmit = async (values: FormData) => {
		const { error } = await insertItem.mutateAsync(values as any);
		if (error) {
			showToast(error.message || 'Error al crear el producto', 'error');
			return;
		}
		showToast('Producto creado correctamente', 'success');
		setLocation('/compras');
	};

	return (
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
	);
};
