import { VapListItem } from './VapListItem';

export interface ProductGridItem {
	id: number;
	title: string;
	src: string;
	amount: number;
}

export interface ProductGridProps {
	items: ProductGridItem[];
	onItemClick: (id: number) => void;
	title?: string;
	helperText?: string;
}

export const ProductGrid = ({
	items,
	onItemClick,
	title = 'Productos actuales',
	helperText = 'Pulsa un producto para añadirlo con la cantidad indicada.',
}: ProductGridProps) => {
	return (
		<div className="mt-6">
			{title && <h4 className="text-md mb-3 font-bold">{title}</h4>}
			<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{items.map((item) => (
					<div key={item.id} className="cursor-pointer" onClick={() => onItemClick(item.id)}>
						<VapListItem
							id={item.id}
							title={item.title}
							src={item.src}
							amount={item.amount}
							disableOutOfStockStyles
						/>
					</div>
				))}
			</div>
			{helperText && <p className="text-base-content/60 mt-2 text-xs">{helperText}</p>}
		</div>
	);
};
