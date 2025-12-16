import Stats from '../components/Stats';
import { BUY, TOTAL_BUY } from '../data/BUY';
import { SELL } from '../data/SELL';
import { useGetAllFinancialRecords } from '../hooks';

// TODO: hacer un historial de beneficios para cada socio, ismael tal fecha 180€, ismael tal fecha 30€, jose tal fecha 180€
export const Estadisticas = () => {
	const { data: ingresos } = useGetAllFinancialRecords();
	const ingresosTotal = ingresos?.reduce((total, item: any) => total + item.amount, 0) as number;
	const restante = (ingresosTotal - TOTAL_BUY).toFixed(2);
	const cubierto = ((ingresosTotal / TOTAL_BUY) * 100).toFixed(2);

	return (
		<main>
			<Stats
				title="Resumen de Compras"
				items={[
					{
						label: 'Cantidad Totales',
						value: BUY.reduce((total, buy) => total + buy.quantity, 0),
						icon: 'ri-shopping-cart-line',
						color: 'bg-blue-500',
					},
					{
						label: 'Compras Totales',
						value: TOTAL_BUY + '€',
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
			<Stats
				title="Resumen de Ingresos"
				items={[
					{
						label: 'Ingresos Totales',
						value: ingresosTotal + '€',
						icon: 'ri-money-euro-circle-line',
						color: 'bg-green-500',
					},
				]}
				// TODO poner ismale y yo caja
			/>
			<Stats
				title="Resumen de Ventas"
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
					{
						label: 'Ismael cobrado',
						value: 180 + 30 + '€',
						icon: 'ri-money-euro-circle-line',
						color: 'bg-green-500',
					},
					{
						label: 'Jose cobrado',
						value: 0 + '€',
						icon: 'ri-money-euro-circle-line',
						color: 'bg-green-500',
					},
				]}
			/>
		</main>
	);
};
