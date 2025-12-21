import Stats from '../components/Stats';
import { useGetAllFinancialRecords } from '../hooks';

export const getGroupedFinancialRecords = (data: any) => {
	const result = data.reduce((acc: any, item: any) => {
		const name = item.profiles.full_name;

		if (!acc[name]) {
			acc[name] = 0;
		}

		acc[name] += item.amount;

		return acc;
	}, {});

	const resultArray = Object.entries(result).map(([full_name, totalAmount]) => ({
		full_name,
		totalAmount,
	}));
	return resultArray;
};

// TODO: separar ganancias en las listas e imprimir una lista por socio
export const LibroCuentas = () => {
	const { data } = useGetAllFinancialRecords();
	return (
		<main>
			{data && (
				<>
					<Stats
						items={[
							{
								label: 'Ingresos Totales',
								value: data?.reduce((total, item: any) => total + item.amount, 0) + '€',
								icon: 'ri-money-euro-circle-line',
								color: 'bg-green-500',
							},
							...getGroupedFinancialRecords(data).map((it) => ({
								label: `${it.full_name} Total`,
								value: it.totalAmount + '€',
								icon: 'ri-money-euro-circle-line',
								color: 'bg-green-500',
							})),
						]}
					/>
					<div className="p-5">
						<h2 className="mb-4 text-xl font-semibold">Ingresos a caja fuerte</h2>
					</div>
					{/* <!-- TODO: hacer un comp de vapslit generico --> */}
					{/* <!-- <VapList /> --> */}

					<ul className="space-y-6">
						{data?.map((item: any) => (
							<li key={item.id} className="rounded-lg bg-white p-4 shadow-md">
								<div className="mb-3">
									<h3 className="text-lg font-bold text-teal-700">Concepto: {item.label}</h3>
									<p className="text-gray-600">
										Importe: <span className="font-semibold">{item.amount} €</span>
									</p>
									<p className="text-gray-600">
										Fecha: <span className="font-semibold">{item.date}</span>
									</p>
									<p className="text-gray-600">
										Destinatario: <span className="font-semibold">{item.profiles.full_name}</span>
									</p>
								</div>
							</li>
						))}
					</ul>
				</>
			)}
		</main>
	);
};
