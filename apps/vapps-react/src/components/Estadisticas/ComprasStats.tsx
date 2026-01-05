import Stats from '../Stats';

interface ComprasStatsProps {
	buyUdsTotal: number;
	buyEurTotal: number;
	restante: string;
}

export const ComprasStats = ({ buyUdsTotal, buyEurTotal, restante }: ComprasStatsProps) => (
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
				label: Number(restante) > 0 ? 'Ganancias' : 'Pendiente',
				value: restante + '€',
				icon: 'ri-line-chart-line',
				color: Number(restante) > 0 ? 'bg-teal-500' : 'bg-red-500',
			},
		]}
	/>
);
