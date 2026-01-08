// tailwind-merge retained for future merges in this component
import { DataType, TYPES } from '../data/utils';
import placeholder from '@assets/placeholder-600x600.webp';
import { VapListItem } from '@react-components';

type DetailListprops = {
	items: DataType[];
};

export const DetailList = ({ items }: DetailListprops) => {
	return (
		<div className="bg-base-100/60 dark:border-base-content/5 relative overflow-hidden rounded-2xl border border-transparent p-4 backdrop-blur-md">
			<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
				{items
					.sort((a, b) =>
						typeof a.unitPrice === 'number' && typeof b.unitPrice === 'number'
							? a.unitPrice - b.unitPrice
							: 1,
					)
					.sort((a, b) => {
						const aIsCompra = a.type === TYPES.compra;
						const bIsCompra = b.type === TYPES.compra;
						if (aIsCompra && !bIsCompra) return -1;
						if (!aIsCompra && bIsCompra) return 1;
						return 0;
					})
					.map((item, index) => (
						<VapListItem
							key={item.id}
							id={index}
							title={item.type}
							src={placeholder}
							amount={item.amount ?? 0}
							price={item.unitPrice ?? item.price}
							disableOutOfStockStyles
						/>
					))}
			</div>
		</div>
	);
};
