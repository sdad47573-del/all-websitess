import Stats from '../components/Stats';
import { INGRESOS } from '../data/INGRESOS';

export const Ingresos = () => {
	return (
		<main>
			<Stats
				items={[
					{
						label: 'Ingresos Totales',
						value: INGRESOS.reduce((total, buy) => total + buy.EUR, 0) + '€',
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
				{INGRESOS.map((buy) => (
					<li className="rounded-lg bg-white p-4 shadow-md">
						<div className="mb-3">
							<h3 className="text-lg font-bold text-teal-700">Concepto: {buy.label}</h3>
							<p className="text-gray-600">
								Importe: <span className="font-semibold">{buy.EUR} €</span>
							</p>
							<p className="text-gray-600">
								Fecha:{' '}
								<span className="font-semibold">
									{buy.FECHA.getDate()}/{buy.FECHA.getMonth() + 1}/{buy.FECHA.getFullYear()}
								</span>
							</p>
						</div>
					</li>
				))}
			</ul>
		</main>
	);
};
