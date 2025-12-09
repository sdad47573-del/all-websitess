import { VapListItem, type VapItemData } from './VapListItem';

type VapListProps = {
	items: VapItemData[];
	isLoading: boolean;
	onItemClick: (item: VapItemData) => void;
};

export const VapList = ({ items, isLoading, onItemClick }: VapListProps) => {
	if (isLoading) {
		return (
			<div className="flex h-64 items-center justify-center">
				<div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-600 border-t-transparent"></div>
			</div>
		);
	}
	return (
		<div
			className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
			id="vap-list-container"
		>
			{items.map((item) => (
				<VapListItem key={item.id} {...item} onClick={onItemClick} />
			))}
		</div>
	);
};
