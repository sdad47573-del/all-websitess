import { VapListItem } from '@react-components';

interface ProductGridProps {
	items: { id: number; title: string; src: string; amount: number }[];
	onItemClick: (id: number) => void;
}

export const ProductGrid = ({ items, onItemClick }: ProductGridProps) => {
	return (
		<div className="mt-6">
			<h4 className="text-md mb-3 font-bold">Productos actuales</h4>
			<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{items.map((item) => (
					<div key={item.id} className="cursor-pointer" onClick={() => onItemClick(item.id)}>
						<VapListItem id={item.id} title={item.title} src={item.src} amount={item.amount} />
					</div>
				))}
			</div>
			<p className="text-base-content/60 mt-2 text-xs">
				Pulsa un producto para añadirlo con la cantidad indicada.
			</p>
		</div>
	);
};
