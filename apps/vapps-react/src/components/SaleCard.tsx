import type { SaleItemDetail } from '@/hooks/useGetAllSalesGroupedByDate';
import { ExpandableTransactionCard } from './common/ExpandableTransactionCard';

interface SaleCardProps {
	day: string;
	concept: string | null;
	total_amount: number;
	total_price: number;
	total_payment: number | null;
	items: SaleItemDetail[];
}

export const SaleCard = ({
	concept,
	day,
	items,
	total_amount,
	total_payment,
	total_price,
}: SaleCardProps) => {
	const pendingPayment = (total_payment ?? 0) - total_price;
	const isPending = pendingPayment < 0;

	const stats = [
		{ label: 'Cantidad', value: total_amount },
		{ label: 'Total', value: `${total_price.toFixed(2)}€` },
	];

	const status =
		total_payment !== undefined && total_payment !== null
			? {
					label: isPending ? 'Pendiente de pago' : 'Pago Recibido',
					value: `${(isPending ? -pendingPayment : total_payment).toFixed(0)}€`,
					isPending,
				}
			: undefined;

	const transactionItems = items.map((item) => ({
		id: item.sale_id,
		title: item.item_title,
		brand: item.brand,
		amount: item.amount,
		price: item.price_per_unit,
	}));

	return (
		<ExpandableTransactionCard
			title={concept || 'Sin concepto'}
			date={day}
			stats={stats}
			status={status}
			items={transactionItems}
		/>
	);
};
