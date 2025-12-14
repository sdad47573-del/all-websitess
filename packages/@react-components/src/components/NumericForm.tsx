import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';

export interface NumericFormData {
	concept: string;
	amount: number;
	price_per_unit: number;
	payment: boolean;
}

const genSchema = (stock: number) =>
	z.object({
		concept: z.string(),
		amount: z
			.number({ error: 'Debe ser un número' })
			.positive({ error: 'Debe ser positivo' })
			.max(stock, { error: `Debe ser menor o igual a ${stock}` }),
		price_per_unit: z
			.number({ error: 'Debe ser un número' })
			.positive({ error: 'Debe ser positivo' }),
		payment: z.boolean(),
	});

export const NumericForm = ({
	onSubmit,
	stock,
}: {
	onSubmit: (data: NumericFormData) => void;
	stock: number;
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NumericFormData>({
		resolver: zodResolver(genSchema(stock)),
		defaultValues: {
			amount: 1,
			price_per_unit: 10,
			concept: '',
			payment: false,
		},
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<fieldset className="fieldset">
				<legend className="fieldset-legend">Concepto</legend>
				<input
					type="text"
					placeholder="Pon el concepto aquí"
					className="input w-full"
					{...register('concept')}
				/>
				{errors.concept && <p className="label text-red-600">{errors.concept.message}</p>}
			</fieldset>
			<fieldset className="fieldset">
				<legend className="fieldset-legend">Precio por unidad</legend>
				<input
					type="text"
					className="input w-full"
					placeholder="Type here"
					{...register('price_per_unit', {
						valueAsNumber: true,
					})}
				/>
				{errors.price_per_unit && (
					<p className="label text-red-600">{errors.price_per_unit.message}</p>
				)}
			</fieldset>
			<fieldset className="fieldset">
				<legend className="fieldset-legend">Unidades</legend>
				<input
					type="text"
					className="input w-full"
					placeholder="Type here"
					{...register('amount', {
						valueAsNumber: true,
					})}
				/>
				{errors.amount && <p className="label text-red-600">{errors.amount.message}</p>}
			</fieldset>

			<label className="label">
				<input type="checkbox" {...register('payment')} className="checkbox" />
				Pagado
			</label>

			<button
				type="submit"
				className="flex w-full justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none"
			>
				Completar venta
			</button>
		</form>
	);
};
