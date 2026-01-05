import { Input } from '@react-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useGetAllBrands, useInsertModel } from '@/hooks';
import { showToast } from '@/utils/toast';

const modelSchema = z.object({
	name: z.string().min(2, 'Introduce un nombre válido'),
	brand_id: z.coerce.number().int().positive('Selecciona una marca'),
});
type ModelFormData = z.infer<typeof modelSchema>;

export const ModelForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ModelFormData>({ resolver: zodResolver(modelSchema) });

	const insertModel = useInsertModel();
	const { data: brands } = useGetAllBrands();

	const onSubmit = async (values: ModelFormData) => {
		const result = await insertModel.mutateAsync(values as any);
		if (result.error) {
			showToast(result.error.message || 'Error al crear el modelo', 'error');
			return;
		}
		showToast('Modelo creado correctamente', 'success');
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<h3 className="text-lg font-semibold">Nuevo modelo</h3>
			<Input
				label="Nombre de modelo"
				placeholder="Kiwi Strawberry, Mango Ice..."
				leftIconClass="ri-price-tag-3-line"
				error={errors.name?.message}
				{...register('name')}
			/>
			<div className="form-control space-y-2">
				<label className="label p-0">
					<span className="label-text text-base-content/80 font-medium">Marca asociada</span>
				</label>
				<select
					className="select select-bordered bg-base-200/50 focus:bg-base-100 w-full backdrop-blur-sm"
					{...register('brand_id', { valueAsNumber: true })}
					defaultValue=""
				>
					<option value="" disabled>
						Selecciona una marca
					</option>
					{brands?.map((b) => (
						<option key={b?.id} value={b?.id}>
							{b?.name}
						</option>
					))}
				</select>
				{errors.brand_id?.message && (
					<span className="text-error mt-1 block animate-pulse text-xs font-medium">
						{errors.brand_id.message as any}
					</span>
				)}
			</div>
			<div className="flex justify-end">
				<button type="submit" className="btn btn-primary" disabled={insertModel.isPending}>
					Crear modelo
				</button>
			</div>
		</form>
	);
};
