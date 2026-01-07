import { Stats } from '@react-components';


interface UnidadesStatsProps {
	totalBuyed: number;
	totalSold: number;
	totalPending: number;
}

export const UnidadesStats = ({ totalBuyed, totalSold, totalPending }: UnidadesStatsProps) => (
	<Stats
		title="Resumen de Unidades"
		items={[
			{
				label: 'Total Comprados',
				value: totalBuyed,
				icon: 'ri-shopping-bag-line',
				color: 'bg-blue-500',
			},
			{
				label: 'Total Vendidos',
				value: totalSold,
				icon: 'ri-hand-coin-line',
				color: 'bg-green-500',
			},
			{
				label: 'Faltan por Asignar',
				value: totalPending,
				icon: 'ri-alert-line',
				color: 'bg-orange-500',
				isTotal: true,
			},
		]}
	/>
);
