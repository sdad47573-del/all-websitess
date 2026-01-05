import { ExpandableTransactionCard } from '../common/ExpandableTransactionCard';
import { getImageUrl } from '@/utils/image.utils';
import type { CustomerItems } from '@/hooks/useCustomerRankingItems';

interface CustomerRankingListProps {
	ranking: any[];
	customerItems: CustomerItems[] | undefined;
}

export const CustomerRankingList = ({ ranking, customerItems }: CustomerRankingListProps) => (
	<ul className="space-y-4 px-5 pb-5">
		{ranking.map((r) => (
			<ExpandableTransactionCard
				key={`${r.customer_id ?? 'null'}-${r.name}`}
				title={r.name}
				date={new Date().toISOString()}
				stats={[
					{ label: 'Items', value: r.total_items },
					{ label: 'Pagado', value: `${r.total_paid.toFixed(2)}€` },
				]}
				items={(customerItems?.find((c) => c.customer_id === r.customer_id)?.items ?? []).map(
					(i) => ({
						id: i.id,
						title: i.title,
						brand: '',
						image_url: getImageUrl(i.image_url),
						amount: i.amount,
					}),
				)}
			/>
		))}
	</ul>
);
