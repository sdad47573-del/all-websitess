import { Stats } from '@react-components';

import { getGroupedFinancialRecords } from '@/utils/getGroupedFinancialRecords';

import type { FinancialRecordWithProfile } from '@/hooks';

interface IngresosStatsProps {
	finatial: FinancialRecordWithProfile[];
}

export const IngresosStats = ({ finatial }: IngresosStatsProps) => (
	<Stats
		title="Resumen de Ingresos"
		items={[
			{
				label: 'Ingresos Totales',
				value: finatial.reduce((total, item: any) => total + item.amount, 0).toFixed(2) + '€',
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
);
