import { formatDate } from '@/utils/formatDate';

interface FinanceCardProps {
	label: string;
	amount: number;
	date: string;
	fullName: string;
}

export const FinanceCard = ({ label, amount, date, fullName }: FinanceCardProps) => {
	return (
		<li className="bg-base-100 rounded-xl p-4 shadow-md transition-all hover:shadow-lg border border-transparent dark:border-base-content/10">
			<div className="flex flex-col gap-2">
				<div className="border-base-200 flex items-center justify-between border-b pb-2">
					<h3 className="text-lg font-bold text-primary">{label}</h3>
					<span className="text-base-content/60 text-sm">{formatDate(date)}</span>
				</div>

				<div className="grid grid-cols-2 gap-3 md:grid-cols-2">
					<div>
						<p className="text-base-content/60 text-xs font-medium tracking-wider uppercase">
							Importe
						</p>
						<p className="text-primary text-xl font-bold">{amount.toFixed(2)}€</p>
					</div>
					<div>
						<p className="text-base-content/60 text-xs font-medium tracking-wider uppercase">
							Usuario
						</p>
						<p className="text-base-content font-semibold">{fullName}</p>
					</div>
				</div>
			</div>
		</li>
	);
};
