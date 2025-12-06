import React from 'react';

interface VapListItemProps {
	src: string;
	title: string;
	amount: number;
}

const VapListItem: React.FC<VapListItemProps> = ({ src, title, amount }) => {
	return (
		<div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md">
			<div className="relative aspect-square overflow-hidden bg-gray-50">
				<img
					src={src}
					alt={title}
					title={title}
					className="h-full w-full object-cover object-top"
					loading="lazy"
				/>
			</div>
			<div className="p-3">
				<h3 className="mb-1 truncate text-sm font-semibold text-gray-900">{title}</h3>
				<div className="flex items-center justify-between">
					<span className="text-xs text-gray-500">Cantidad:</span>
					<span className="text-sm font-bold text-teal-600">{amount}</span>
				</div>
			</div>
		</div>
	);
};

export default VapListItem;
