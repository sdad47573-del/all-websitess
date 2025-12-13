export interface VapItemData {
	id: number;
	title: string;
	src: string;
	amount: number;
	price?: number;
}

type VapListItemProps = VapItemData & {
	onClick?: (item: VapItemData) => void;
};

export const VapListItem = ({ id, amount, src, title, price, onClick }: VapListItemProps) => {
	const isOutOfStock = amount === 0;

	return (
		<div
			className={`vap-item overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-transform ${
				isOutOfStock ? 'cursor-not-allowed opacity-50 grayscale' : 'cursor-pointer active:scale-95'
			}`}
			onClick={() => onClick?.({ id, amount, src, title })}
		>
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
				{price && (
					<div className="flex items-center justify-between">
						<span className="text-xs text-gray-500">Precio:</span>
						<span className="text-sm font-bold text-teal-600">{price}€</span>
					</div>
				)}
			</div>
		</div>
	);
};
