import React, { useEffect, useState } from 'react';
import { modalData, isModalOpen } from '../stores/modal.store';
import { supabaseBrowserClient } from '../services/init.service';
import { imageMap } from '../data/maps/img';
import { getAllItems } from '../services/items.service';

interface VapItem {
	id: number;
	src: string;
	title: string;
	amount: number;
}

interface DBItem {
	id: number;
	title: string;
	es_title: string;
	amount: number;
	active: boolean;
}

const VapList: React.FC = () => {
	const [items, setItems] = useState<VapItem[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const { data } = await getAllItems();

				if (data) {
					const dbItems = data as unknown as DBItem[];
					const mappedData = dbItems
						.map((item) => {
							const srcEntry = imageMap[item.title];
							// Handle both direct string paths (if any) and imported image objects (Astro's default)
							const src =
								srcEntry && typeof srcEntry === 'object' && 'src' in srcEntry
									? srcEntry.src
									: srcEntry;

							return {
								id: item.id,
								src: src,
								title: item.es_title,
								amount: item.amount,
							};
						})
						.filter((item) => item.src)
						.sort((a, b) => b.amount - a.amount);

					setItems(mappedData);
				}
			} catch (error) {
				console.error('Error in fetchItems:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchItems();
	}, []);

	const handleItemClick = (item: VapItem) => {
		if (item.amount === 0) return;

		modalData.set({
			id: item.id,
			title: item.title,
			src: item.src,
			amount: item.amount,
		});
		isModalOpen.set(true);
	};

	if (loading) {
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

export default VapList;
