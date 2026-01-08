import type { SaleItemDetail } from '@/hooks/useGetAllSalesGroupedByDate';
import { ExpandableTransactionCard } from '@react-components';
import { translateItem } from '@/data/maps/spanish';
import { getImageUrl } from '@/utils/image.utils';
import { useEffect, useState } from 'react';
import {
	useAuthData,
	useGetAllCustomers,
	useUpdateSalesCustomer,
	useGetSalesCustomersByIds,
} from '@/hooks';

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
	const { data: auth } = useAuthData();
	const role = auth?.profile?.role;
	const isSuperadmin = role === 'superadmin';
	const { data: customers } = useGetAllCustomers();
	const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);
	const updateMutation = useUpdateSalesCustomer();

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
		src: getImageUrl(item.image_url),
		image_url: null,
		title: translateItem(item.item_title),
		brand: item.brand,
		amount: item.amount,
		price: item.price_per_unit,
	}));

	const saleIds = items.map((i) => i.sale_id);
	const { data: salesCustomers } = useGetSalesCustomersByIds(saleIds);

	useEffect(() => {
		if (!salesCustomers || salesCustomers.length === 0) return;
		const first = salesCustomers[0]?.customer_id ?? null;
		const allSame =
			first !== null && salesCustomers.every((s) => (s.customer_id ?? null) === first);
		if (allSame && first !== null) {
			setSelectedCustomerId(Number(first));
		}
	}, [salesCustomers]);

	const actions =
		isSuperadmin && customers ? (
			<div className="flex items-center gap-2">
				<select
					className="select select-xs select-bordered"
					value={selectedCustomerId ?? ''}
					onChange={(e) => {
						const val = e.target.value;
						setSelectedCustomerId(val === '' ? null : Number(val));
					}}
				>
					<option value="">Sin cliente</option>
					{(customers ?? []).map((c) => (
						<option key={c.id} value={c.id}>
							{c.name}
						</option>
					))}
				</select>
				<button
					className="btn btn-xs"
					disabled={updateMutation.isPending}
					onClick={() =>
						updateMutation.mutate({
							saleIds,
							customerId: selectedCustomerId,
						})
					}
				>
					Asignar
				</button>
			</div>
		) : undefined;

	return (
		<ExpandableTransactionCard
			title={concept || 'Sin concepto'}
			date={day}
			stats={stats}
			status={status}
			items={transactionItems}
			actions={actions}
		/>
	);
};
