import { useStore } from '@nanostores/react';
import * as React from 'react';
import { twJoin } from 'tailwind-merge';
import { lastSale } from '../stores/modal.store';

interface StatsItem {
	label: string;
	value: string | number;
	icon: string;
	color: string;
	isTotal?: boolean;
}

interface StatsProps {
	title?: string;
	items: StatsItem[];
}

export default function Stats({ title = 'Resumen y Estadísticas', items }: StatsProps) {
	// Find the item that represents the total to initialize state
	const totalItemIndex = items.findIndex(
		(item) => item.isTotal || item.label === 'Cantidad de vapers',
	);
	const initialTotal = totalItemIndex !== -1 ? Number(items[totalItemIndex].value) : 0;

	const [currentTotal, setCurrentTotal] = React.useState(initialTotal);
	const $lastSale = useStore(lastSale);
	const lastSaleTimestampRef = React.useRef<number | null>(null);

	React.useEffect(() => {
		if ($lastSale && $lastSale.timestamp !== lastSaleTimestampRef.current) {
			setCurrentTotal((prev) => prev - $lastSale.amountSold);
			lastSaleTimestampRef.current = $lastSale.timestamp;
		}
	}, [$lastSale]);

	return (
		<div className="bg-linear-to-br from-gray-50 to-gray-100 p-5 shadow-sm">
			<h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900">
				<i className="ri-dashboard-line text-teal-600"></i>
				{title}
			</h2>
			<div className="grid grid-cols-2 gap-3">
				{items.map((item, index) => {
					const isTotalItem = index === totalItemIndex;
					return (
						<div key={index} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
							<div className="mb-2 flex items-center gap-3">
								<div
									className={twJoin(
										'flex h-10 w-10 items-center justify-center rounded-lg',
										item.color,
									)}
								>
									<i className={twJoin('text-xl text-white', item.icon)} />
								</div>
							</div>
							<p className="mb-1 text-xs text-gray-500">{item.label}</p>
							<p className="text-xl font-bold text-gray-900">
								{isTotalItem ? currentTotal : item.value}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
