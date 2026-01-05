import Stats from '../Stats';
import { SELL } from '@/data/SELL';

export const PendingSalesStats = () => (
	<Stats
		title="Resumen de Ventas pendientes por cargar"
		items={[
			{
				label: 'Cálculo Total',
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
);
