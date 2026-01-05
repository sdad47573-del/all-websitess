import Stats from '../Stats';

interface VentasStatsProps {
	totalCalculated: number;
	totalReceived: number;
	pendingSalesCount: number;
}

export const VentasStats = ({
	totalCalculated,
	totalReceived,
	pendingSalesCount,
}: VentasStatsProps) => (
	<Stats
		title="Resumen de Ventas"
		items={[
			{
				label: 'Ventas totales',
				value: `${totalCalculated.toFixed(2)}€`,
				icon: 'ri-shopping-cart-line',
				color: 'bg-green-500',
				isTotal: true,
			},
			{
				label: 'Pendiente de cobro',
				value: pendingSalesCount > 0 ? (totalCalculated - totalReceived).toFixed(2) + '€' : '0€',
				icon: 'ri-money-euro-circle-line',
				color: 'bg-orange-500',
			},
		]}
	/>
);
