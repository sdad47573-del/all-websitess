import { formatDate } from '@/utils/formatDate';

interface FinanceCardProps {
    label: string;
    amount: number;
    date: string;
    fullName: string;
}

export const FinanceCard = ({ label, amount, date, fullName }: FinanceCardProps) => {
    return (
        <li className="rounded-lg bg-base-100 p-4 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-base-200 pb-2">
                    <h3 className="text-lg font-bold text-teal-700">
                        {label}
                    </h3>
                    <span className="text-sm text-base-content/60">{formatDate(date)}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-2">
                    <div>
                        <p className="text-xs uppercase text-base-content/60 font-medium tracking-wider">Importe</p>
                        <p className="font-bold text-primary text-xl">{amount.toFixed(2)}€</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase text-base-content/60 font-medium tracking-wider">Usuario</p>
                        <p className="font-semibold text-base-content">{fullName}</p>
                    </div>
                </div>
            </div>
        </li>
    );
};
