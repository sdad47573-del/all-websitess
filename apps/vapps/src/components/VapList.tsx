import { QueryClientProvider } from '@tanstack/react-query';
import { modalData, isModalOpen } from '../stores/modal.store';
import { queryClient } from '../lib/queryClient';
import { useVapItems, type VapItem } from '../hooks/useVapItems';

const VapListContent = () => {
	const { items, isLoading } = useVapItems();

	const handleItemClick = ({ amount, id, title, src }: VapItem) => {
		if (amount === 0) return;

		modalData.set({
			id,
			title,
			src,
			amount,
		});
		isModalOpen.set(true);
	};

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
			{items.map((item) => {
				const isOutOfStock = item.amount === 0;
				return (
					<div
						key={item.id}
						className={`vap-item overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-transform ${
							isOutOfStock
								? 'cursor-not-allowed opacity-50 grayscale'
								: 'cursor-pointer active:scale-95'
						}`}
						onClick={() => handleItemClick(item)}
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
			})}
		</div>
	);
};

const VapList = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<VapListContent />
		</QueryClientProvider>
	);
};

export default VapList;
