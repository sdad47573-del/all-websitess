import { Collapsible, VapListItem,formatDate } from '@react-components';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import { translateItem } from '@/data/maps/spanish';
import { getImageUrl } from '@/utils/image.utils';

export interface TransactionItem {
	id: number | string;
	title: string;
	brand: string;
	image_url: string | null;
	amount: number;
	price?: number;
}

export interface ExpandableTransactionCardProps {
	title: string;
	date: string;
	stats: {
		label: string;
		value: string | number;
	}[];
	status?: {
		label: string;
		value: string | number;
		isPending: boolean;
	};
	items?: TransactionItem[];
	isInitiallyExpanded?: boolean;
}

export const ExpandableTransactionCard = ({
	title,
	date,
	stats,
	status,
	items = [],
	isInitiallyExpanded = false,
}: ExpandableTransactionCardProps) => {
	const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);

	return (
		<li className="bg-base-100 rounded-lg p-4 shadow-md transition-shadow hover:shadow-lg">
			<div className="flex flex-col gap-2">
				<div className="border-base-200 flex items-center justify-between border-b pb-2">
					<h3 className="text-lg font-bold text-teal-700">{title}</h3>
					<div className="flex items-center gap-2">
						<span className="text-base-content/60 text-sm">{formatDate(date)}</span>
						<button
							type="button"
							aria-expanded={isExpanded}
							onClick={() => setIsExpanded(!isExpanded)}
							className="hover:bg-base-200 flex items-center justify-center rounded-md p-1"
						>
							<i
								aria-hidden="true"
								className={twJoin(
									'ri-arrow-down-s-line text-xl transition-transform',
									isExpanded && 'rotate-180',
								)}
							/>
						</button>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-3 md:grid-cols-3">
					{stats.map((stat, idx) => (
						<div key={idx}>
							<p className="text-base-content/60 text-xs font-medium uppercase">{stat.label}</p>
							<p className="text-base-content font-semibold">{stat.value}</p>
						</div>
					))}

					{status && (
						<div
							className={twJoin(
								'rounded-md p-2 transition-colors',
								status.isPending ? 'bg-error/10 text-error' : 'bg-success/10 text-success',
							)}
						>
							<p className="text-xs font-medium opacity-80">{status.label}</p>
							<p className="font-bold">{status.value}</p>
						</div>
					)}
				</div>

				<Collapsible isOpen={isExpanded}>
					<div className="mt-4 mb-2">
						<p className="text-base-content/70 mb-3 text-xs font-bold tracking-wider uppercase">
							Productos
						</p>
						<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
							{items.map((item, index) => (
								<div
									key={item.id}
									style={{
										transition: 'opacity 300ms ease, transform 300ms ease',
										transitionDelay: `${index * 50}ms`,
										opacity: isExpanded ? 1 : 0,
										transform: isExpanded ? 'translateY(0)' : 'translateY(4px)',
									}}
								>
									<VapListItem
										id={Number(item.id)}
										title={translateItem(item.title)}
										src={getImageUrl(item.image_url)}
										amount={item.amount}
										price={item.price}
									/>
								</div>
							))}
						</div>
					</div>
				</Collapsible>
			</div>
		</li>
	);
};
