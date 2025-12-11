import Stats from '../components/Stats';
import { useGetAllIngresos } from '../services/ingresos.service';

export const Ingresos = () => {
	const { data: ingresos } = useGetAllIngresos();
	return (
		<main>
			<Stats
				items={[
					{
						label: 'Ingresos Totales',
						value: ingresos?.reduce((total, item: any) => total + item.eur, 0) + '€',
						icon: 'ri-money-euro-circle-line',
						color: 'bg-green-500',
					},
				]}
			/>
			<div className="p-5">
				<h2 className="mb-4 text-xl font-semibold">Compras</h2>
			</div>
			{/* <!-- TODO: hacer un comp de vapslit generico --> */}
			{/* <!-- <VapList /> --> */}

			<ul className="space-y-6">
				{ingresos?.map((item: any) => (
					<li className="rounded-lg bg-white p-4 shadow-md">
						<div className="mb-3">
							<h3 className="text-lg font-bold text-teal-700">Concepto: {item.label}</h3>
							<p className="text-gray-600">
								Importe: <span className="font-semibold">{item.eur} €</span>
							</p>
							<p className="text-gray-600">
								Fecha: <span className="font-semibold">{item.fecha}</span>
							</p>
						</div>
					</li>
				))}
			</ul>
		</main>
	);
};
