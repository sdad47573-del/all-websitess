import Stats from '../components/Stats';
import { SELL } from '../data/SELL';
import { useGetAllBuy, useGetAllFinancialRecords, useGetAllSalesGroupedByDate } from '../hooks';
import { getGroupedFinancialRecords } from './LibroCuentas';

// TODO: hacer un historial de beneficios para cada socio, ismael tal fecha 180€, ismael tal fecha 30€, jose tal fecha 180€
export const Estadisticas = () => {
	const { data: buy } = useGetAllBuy();
	const { data: finatial } = useGetAllFinancialRecords();

	const ingresosTotal = finatial?.reduce(
		(total, item: any) => total + (item.profiles.full_name === 'Caja' ? item.amount : 0),
		0,
	) as number;

	const buyUdsTotal = buy?.reduce((total, item: any) => total + item.total, 0) as number;
	const buyEurTotal = buy?.reduce((total, item: any) => total + item.eur, 0) as number;

	const restante = (ingresosTotal - buyEurTotal).toFixed(2);
	const cubierto = ((ingresosTotal / buyEurTotal) * 100).toFixed(2);

	const { data: sales } = useGetAllSalesGroupedByDate();
	const totalCalculated =
		sales && (sales as any)?.reduce((total: any, sale: any) => total + sale.total_price, 0);
	const totalReceived =
		sales && (sales as any)?.reduce((total: any, sale: any) => total + sale.total_payment, 0);

	const pendingSales = (sales as any)?.filter(
		(sale: any) => sale.total_payment - sale.total_price < 0,
	);
	return (
		<main>
			{buy && finatial && buyUdsTotal && buyEurTotal && ingresosTotal && (
				<Stats
					title="Resumen de Compras"
					items={[
						{
							label: 'Cantidad Totales',
							value: buyUdsTotal,
							icon: 'ri-shopping-cart-line',
							color: 'bg-blue-500',
						},
						{
							label: 'Compras Totales',
							value: buyEurTotal + '€',
							icon: 'ri-money-euro-circle-line',
							color: 'bg-purple-500',
						},
						{
							label: 'Cubierto %',
							value: cubierto + '%',
							icon: 'ri-bar-chart-line',
							color: Number(cubierto) >= 100 ? 'bg-green-500' : 'bg-red-500',
						},
						{
							label: Number(restante) > 0 ? 'Ganancias' : 'Pendiente',
							value: restante + '€',
							icon: 'ri-line-chart-line',
							color: Number(restante) > 0 ? 'bg-teal-500' : 'bg-red-500',
						},
					]}
				/>
			)}
			{finatial &&
				<Stats
					title="Resumen de Ingresos"
					items={[
						{
							label: 'Ingresos Totales',
							value: finatial.reduce((total, item: any) => total + item.amount, 0) + '€',
							icon: 'ri-money-euro-circle-line',
							color: 'bg-green-500',
						},
						...getGroupedFinancialRecords(finatial).map((it) => ({
							label: `${it.full_name} Total`,
							value: it.totalAmount + '€',
							icon: 'ri-money-euro-circle-line',
							color: 'bg-green-500',
						})),
					]}
				/>
			}
			{sales && (
				<Stats
					title="Resumen de Ventas"
					items={[
						{
							label: 'Ventas totales',
							value: `${(totalCalculated as any)?.toFixed(2)}€`,
							icon: 'ri-shopping-cart-line',
							color: 'bg-green-500',
							isTotal: true,
						},
						{
							label: 'Pendiente de cobro',
							value:
								pendingSales?.length > 0
									? ((totalCalculated as any) - (totalReceived as any)).toFixed(2) + '€'
									: '0€',
							icon: 'ri-money-euro-circle-line',
							color: 'bg-orange-500',
						},
					]}
				/>
			)}
			{/* TODO: terminar de pasar sell a supabase */}
			<Stats
				title="Resumen de Ventas pendientes por meter en la app"
				items={[
					{
						label: 'Calculo Total',
						value: SELL.reduce((total, item) => total + item.price, 0) + '€',
						icon: 'ri-shopping-cart-line',
						color: 'bg-blue-500',
					},
					{
						label: 'Cobrado Total',
						value: SELL.reduce((total, item) => total + item.received, 0) + '€',
						icon: 'ri-money-euro-circle-line',
						color: 'bg-green-500',
					},
				]}
			/>
			<Stats
				title="Beneficios de Socios"
				// TODO: quitarlo de a mano y poner calculo
				items={[
					{
						label: 'ganacias por socio estimadas',
						value: 1118 + '€',
						icon: 'ri-shopping-cart-line',
						color: 'bg-blue-500',
					},
					{
						label: 'ganacias por socio estimadas',
						value: 1118 + '€',
						icon: 'ri-shopping-cart-line',
						color: 'bg-blue-500',
					},
				]}
			/>
		</main>
	);
};
