import Stats from '../Stats';

interface RankingStatsProps {
	totalClientes: number;
	totalItems: number;
	totalPagado: number;
}

export const RankingStats = ({ totalClientes, totalItems, totalPagado }: RankingStatsProps) => (
	<Stats
		title="Ranking de Clientes"
		items={[
			{
				label: 'Clientes',
				value: totalClientes,
				icon: 'ri-user-3-line',
				color: 'bg-blue-500',
			},
			{
				label: 'Items comprados',
				value: totalItems,
				icon: 'ri-shopping-cart-line',
				color: 'bg-green-500',
			},
			{
				label: 'Dinero pagado',
				value: `${totalPagado.toFixed(2)}€`,
				icon: 'ri-money-euro-circle-line',
				color: 'bg-purple-500',
				isTotal: true,
			},
		]}
	/>
);
