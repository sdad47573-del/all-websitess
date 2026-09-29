import { cn } from '@/lib/utils';

type Props = {
	value: string;
	onChange: (v: string) => void;
	options: string[];
	className?: string;
};

export function PaymentMethodSelect({ value, onChange, options, className }: Props) {
	return (
		<div
			className={cn(
				'border-input bg-background flex flex-wrap gap-1.5 rounded-md border p-1.5',
				className,
			)}
		>
			{options.map((opt) => {
				const active = opt === value;
				return (
					<button
						key={opt}
						type="button"
						onClick={() => onChange(opt)}
						className={cn(
							'rounded-md px-2.5 py-1 text-xs font-medium transition',
							active
								? 'bg-primary text-primary-foreground shadow-sm'
								: 'text-muted-foreground hover:bg-muted hover:text-foreground',
						)}
					>
						{opt}
					</button>
				);
			})}
		</div>
	);
}
