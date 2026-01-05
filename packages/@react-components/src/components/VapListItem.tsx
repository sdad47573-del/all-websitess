export interface VapItemData {
	id: number;
	title: string;
	src: string;
	amount: number;
	price?: number;
}

type VapListItemProps = VapItemData & {
	onClick?: (item: VapItemData) => void;
	disableOutOfStockStyles?: boolean;
};

export const VapListItem = ({
	id,
	amount,
	src,
	title,
	price,
	onClick,
	disableOutOfStockStyles = false,
}: VapListItemProps) => {
	const isOutOfStock = amount === 0;
	const applyDisabledStyles = isOutOfStock && !disableOutOfStockStyles;

	return (
		<div
			className={`vap-item border-base-300 bg-base-100 overflow-hidden rounded-xl border shadow-md transition-all duration-200 dark:border-base-content/10 dark:shadow-none ${
				applyDisabledStyles
					? 'cursor-not-allowed opacity-50 grayscale'
					: 'cursor-pointer hover:shadow-lg hover:border-primary/30 dark:hover:border-primary/50 active:scale-95'
			}`}
			onClick={() => onClick?.({ id, amount, src, title })}
		>
			<div className="bg-base-200 relative aspect-square overflow-hidden">
				<img
					src={src}
					alt={title}
					title={title}
					className="h-full w-full object-cover object-top"
					loading="lazy"
				/>
			</div>
			<div className="p-3">
				<h3 className="text-base-content mb-1 truncate text-sm font-semibold">{title}</h3>
				<div className="flex items-center justify-between">
					<span className="text-base-content/60 text-xs">Cantidad:</span>
					<span className="text-primary text-sm font-bold">{amount}</span>
				</div>
				{price && (
					<div className="flex items-center justify-between">
						<span className="text-base-content/60 text-xs">Precio:</span>
						<span className="text-primary text-sm font-bold">{price}€</span>
					</div>
				)}
			</div>
		</div>
	);
};
