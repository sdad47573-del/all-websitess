import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';
import { Input } from './Input';
import { Checkbox } from './Checkbox';

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
			<Input
				label="Concepto"
				type="text"
				placeholder="Pon el concepto aquí"
				error={errors.concept?.message as string | undefined}
				{...register('concept')}
			/>
			<Input
				label="Precio por unidad"
				type="number"
				placeholder="0"
				error={errors.price_per_unit?.message as string | undefined}
				{...register('price_per_unit', { valueAsNumber: true })}
			/>
			<Input
				label="Unidades"
				type="number"
				placeholder="0"
				error={errors.amount?.message as string | undefined}
				{...register('amount', { valueAsNumber: true })}
			/>

			<Checkbox label="Pagado" {...register('payment')} className="checkbox" />

			<button
				type="submit"
				className="flex w-full justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none"
			>
				Completar venta
			</button>
		</form>
	);
};
