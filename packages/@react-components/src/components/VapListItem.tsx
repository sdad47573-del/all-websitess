import React from 'react';

export interface VapItemData {
	id: number;
	title: string;
	src: string;
	amount: number;
}

interface VapListItemProps {
	item: VapItemData;
	onClick?: (item: VapItemData) => void;
}

export const VapListItem: React.FC<VapListItemProps> = ({ item, onClick }) => {
	const isOutOfStock = item.amount === 0;

	return (
		<div
			className={`vap-item overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-transform ${
				isOutOfStock ? 'cursor-not-allowed opacity-50 grayscale' : 'cursor-pointer active:scale-95'
			}`}
			onClick={() => onClick?.(item)}
		>
			<div className="relative aspect-square overflow-hidden bg-gray-50">
				<img
					src={item.src}
					alt={item.title}
					title={item.title}
					className="h-full w-full object-cover object-top"
					loading="lazy"
				/>
			</div>
			<div className="p-3">
				<h3 className="mb-1 truncate text-sm font-semibold text-gray-900">{item.title}</h3>
				<div className="flex items-center justify-between">
					<span className="text-xs text-gray-500">Cantidad:</span>
					<span className="text-sm font-bold text-teal-600">{item.amount}</span>
				</div>
			</div>
		</div>
	);
};
