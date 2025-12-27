import { formatDate } from '@/utils/formatDate';

interface FinanceCardProps {
	label: string;
	amount: number;
	date: string;
	fullName: string;
}

export const FinanceCard = ({ label, amount, date, fullName }: FinanceCardProps) => {
	const isNegative = amount < 0;

	return (
		<li className="border-base-200 to-base-100 hover:border-primary/20 list-none overflow-hidden rounded-2xl border bg-linear-to-br from-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">
			<div className="flex items-center gap-4">
				<div
					className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-inner ${isNegative ? 'bg-error/10 text-error' : 'bg-success/10 text-success'}`}
				>
					<i
						className={
							isNegative ? 'ri-arrow-left-down-line text-2xl' : 'ri-arrow-right-up-line text-2xl'
						}
					/>
				</div>

				<div className="min-w-0 flex-1">
					<div className="flex items-start justify-between">
						<div>
							<h3 className="text-base-content truncate text-base font-bold">{label}</h3>
							<p className="text-base-content/50 text-xs font-medium">{formatDate(date)}</p>
						</div>
						<div className="text-right">
							<p
								className={`text-lg font-black tracking-tight ${isNegative ? 'text-error' : 'text-success'}`}
							>
								{isNegative ? '' : '+'}
								{amount.toFixed(2)}€
							</p>
						</div>
					</div>

					<div className="border-base-200 mt-3 flex items-center justify-between border-t pt-3">
						<div className="text-base-content/60 flex items-center gap-1.5 text-xs">
							<i className="ri-user-smile-line" />
							<span className="font-semibold">{fullName}</span>
						</div>
						<div className="bg-base-200 text-base-content/40 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase">
							Completado
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
