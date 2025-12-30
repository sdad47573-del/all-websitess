import { Input } from '@react-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Toastify from 'toastify-js';
import { useGetAllBrands, useInsertBrand, useInsertModel } from '@/hooks';
import { PageLayout } from '../components/PageLayout';
import { SectionHeader } from '../components/SectionHeader';

const brandSchema = z.object({
	name: z.string().min(2, 'Introduce un nombre válido'),
});
type BrandFormData = z.infer<typeof brandSchema>;

const modelSchema = z.object({
	name: z.string().min(2, 'Introduce un nombre válido'),
	brand_id: z.coerce.number().int().positive('Selecciona una marca'),
});
type ModelFormData = z.infer<typeof modelSchema>;

export const MarcasModelosNuevo = () => {
	const {
		register: registerBrand,
		handleSubmit: handleSubmitBrand,
		formState: brandFormState,
		reset: resetBrandForm,
	} = useForm<BrandFormData>({ resolver: zodResolver(brandSchema) });
	const {
		register: registerModel,
		handleSubmit: handleSubmitModel,
		formState: modelFormState,
		reset: resetModelForm,
	} = useForm<ModelFormData>({ resolver: zodResolver(modelSchema) });

	const { errors: brandErrors } = brandFormState;
	const { errors: modelErrors } = modelFormState;

	const insertBrand = useInsertBrand();
	const insertModel = useInsertModel();
	const { data: brands } = useGetAllBrands();

	const onSubmitBrand = async (values: BrandFormData) => {
		const result = await insertBrand.mutateAsync(values as any);
		if (result.error) {
			Toastify({
				text: result.error.message || 'Error al crear la marca',
				duration: 3000,
				gravity: 'top',
				position: 'right',
				style: { background: 'linear-gradient(to right, #ef4444, #f87171)' },
				className: 'rounded-lg shadow-lg font-medium',
			}).showToast();
			return;
		}
		Toastify({
			text: 'Marca creada correctamente',
			duration: 2500,
			gravity: 'top',
			position: 'right',
			style: { background: 'linear-gradient(to right, #10b981, #34d399)' },
			className: 'rounded-lg shadow-lg font-medium',
		}).showToast();
		resetBrandForm();
	};

	const onSubmitModel = async (values: ModelFormData) => {
		const result = await insertModel.mutateAsync(values as any);
		if (result.error) {
			Toastify({
				text: result.error.message || 'Error al crear el modelo',
				duration: 3000,
				gravity: 'top',
				position: 'right',
				style: { background: 'linear-gradient(to right, #ef4444, #f87171)' },
				className: 'rounded-lg shadow-lg font-medium',
			}).showToast();
			return;
		}
		Toastify({
			text: 'Modelo creado correctamente',
			duration: 2500,
			gravity: 'top',
			position: 'right',
			style: { background: 'linear-gradient(to right, #10b981, #34d399)' },
			className: 'rounded-lg shadow-lg font-medium',
		}).showToast();
		resetModelForm();
	};

	return (
		<PageLayout>
			<div className="space-y-8 p-5">
				<SectionHeader
					title="Añadir marcas y modelos"
					subtitle="Crea marcas y modelos para organizar los productos"
				/>

				<div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
					<form onSubmit={handleSubmitBrand(onSubmitBrand)} className="space-y-4">
						<h3 className="text-lg font-semibold">Nueva marca</h3>
						<Input
							label="Nombre de marca"
							placeholder="VAPSOLO, BOLERO..."
							leftIconClass="ri-building-4-line"
							error={brandErrors.name?.message}
							{...registerBrand('name')}
						/>
						<div className="flex justify-end">
							<button type="submit" className="btn btn-primary" disabled={insertBrand.isPending}>
								Crear marca
							</button>
						</div>
					</form>

					<form onSubmit={handleSubmitModel(onSubmitModel)} className="space-y-4">
						<h3 className="text-lg font-semibold">Nuevo modelo</h3>
						<Input
							label="Nombre de modelo"
							placeholder="Kiwi Strawberry, Mango Ice..."
							leftIconClass="ri-price-tag-3-line"
							error={modelErrors.name?.message}
							{...registerModel('name')}
						/>
						<div className="form-control space-y-2">
							<label className="label p-0">
								<span className="label-text text-base-content/80 font-medium">Marca asociada</span>
							</label>
							<select
								className="select select-bordered bg-base-200/50 focus:bg-base-100 w-full backdrop-blur-sm"
								{...registerModel('brand_id', { valueAsNumber: true })}
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
							{modelErrors.brand_id?.message && (
								<span className="text-error mt-1 block animate-pulse text-xs font-medium">
									{modelErrors.brand_id.message as any}
								</span>
							)}
						</div>
						<div className="flex justify-end">
							<button type="submit" className="btn btn-primary" disabled={insertModel.isPending}>
								Crear modelo
							</button>
						</div>
					</form>
				</div>
			</div>
		</PageLayout>
	);
};
