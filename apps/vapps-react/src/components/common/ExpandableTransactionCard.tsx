import { VapListItem } from '@react-components';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import { translateItem } from '@/data/maps/spanish';
import { formatDate } from '@/utils/formatDate';
import { getImageUrl } from '@/utils/image.utils';
import { Collapsible } from '../Collapsible';

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
	actions?: ReactNode;
}

export const ExpandableTransactionCard = ({
	title,
	date,
	stats,
	status,
	items = [],
	isInitiallyExpanded = false,
	actions,
}: ExpandableTransactionCardProps) => {
	const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);

	return (
		<li className="border-base-200 hover:border-primary/20 bg-base-100 list-none overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-md dark:border-base-content/10">
			<div className="flex flex-col">
				{/* Header Section */}
				<div
					onClick={() => setIsExpanded(!isExpanded)}
					// className="from-base-50 hover:bg-base-100/50 flex cursor-pointer items-center justify-between bg-linear-to-r to-white px-5 py-4 transition-colors"
					className="hover:bg-base-100/50 bg-base-100 flex cursor-pointer items-center justify-between px-5 py-4 transition-colors"
				>
					<div className="flex items-center gap-3">
						<div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
							<i className="ri-receipt-line text-primary text-xl" />
						</div>
						<div>
							<h3 className="text-base-content text-base leading-tight font-bold">{title}</h3>
							<p className="text-base-content/50 text-xs font-medium lowercase">
								{formatDate(date)}
							</p>
						</div>
					</div>

					<div className="flex items-center gap-3">
						{actions}
						<div
							className={twJoin(
								'ri-arrow-down-s-line text-xl transition-transform duration-300',
								isExpanded && 'rotate-180',
							)}
						/>
					</div>
				</div>

				{/* Summary Stats Section */}
				<div className="divide-base-200 border-base-100 bg-base-100 grid grid-cols-2 divide-x border-t md:grid-cols-3">
					{stats.map((stat, idx) => (
						<div key={idx} className="flex flex-col px-5 py-3">
							<p className="text-base-content/40 mb-1.5 text-[10px] leading-none font-black tracking-widest uppercase">
								{stat.label}
							</p>
							<p className="text-base-content text-sm font-bold">{stat.value}</p>
						</div>
					))}

					{status && (
						<div
							className={twMerge(
								'flex flex-col px-5 py-3',
								status.isPending ? 'bg-error/5 dark:bg-error/10' : 'bg-success/5 dark:bg-success/10',
							)}
						>
							<p
								className={twMerge(
									'mb-1.5 text-[10px] leading-none font-black tracking-widest uppercase',
									status.isPending ? 'text-error/60 dark:text-error/80' : 'text-success/60 dark:text-success/80',
								)}
							>
								{status.label}
							</p>
							<p
								className={twMerge(
									'text-sm font-black',
									status.isPending ? 'text-error' : 'text-success',
								)}
							>
								{status.value}
							</p>
						</div>
					)}
				</div>

				{/* Expanded Items Section */}
				<Collapsible isOpen={isExpanded}>
					<div className="border-base-200 bg-base-100 border-t px-5 pt-4 pb-6">
						<div className="mb-4 flex items-center gap-2">
							<span className="bg-base-200 dark:bg-base-300 h-px flex-1" />
							<p className="text-base-content/30 text-[10px] font-bold tracking-widest whitespace-nowrap uppercase">
								Detalles del Pedido
							</p>
							<span className="bg-base-200 dark:bg-base-300 h-px flex-1" />
						</div>

						<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
							{items.map((item, index) => (
								<div
									key={item.id}
									className="transition-all duration-300"
									style={{
										transitionDelay: `${index * 50}ms`,
										opacity: isExpanded ? 1 : 0,
										transform: isExpanded ? 'translateY(0)' : 'translateY(8px)',
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
