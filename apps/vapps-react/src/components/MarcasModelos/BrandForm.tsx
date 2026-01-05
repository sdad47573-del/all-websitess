import { Input } from '@react-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useInsertBrand } from '@/hooks';
import { showToast } from '@/utils/toast';

const brandSchema = z.object({
	name: z.string().min(2, 'Introduce un nombre válido'),
});
type BrandFormData = z.infer<typeof brandSchema>;

export const BrandForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<BrandFormData>({ resolver: zodResolver(brandSchema) });

	const insertBrand = useInsertBrand();

	const onSubmit = async (values: BrandFormData) => {
		const result = await insertBrand.mutateAsync(values as any);
		if (result.error) {
			showToast(result.error.message || 'Error al crear la marca', 'error');
			return;
		}
		showToast('Marca creada correctamente', 'success');
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<h3 className="text-lg font-semibold">Nueva marca</h3>
			<Input
				label="Nombre de marca"
				placeholder="VAPSOLO, BOLERO..."
				leftIconClass="ri-building-4-line"
				error={errors.name?.message}
				{...register('name')}
			/>
			<div className="flex justify-end">
				<button type="submit" className="btn btn-primary" disabled={insertBrand.isPending}>
					Crear marca
				</button>
			</div>
		</form>
	);
};
