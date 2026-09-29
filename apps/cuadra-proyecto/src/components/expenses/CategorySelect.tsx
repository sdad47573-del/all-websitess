import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { CATEGORIES, categoryMeta, type ExpenseCategory } from '@/lib/finance';
import { cn } from '@/lib/utils';

type Props = {
	value: string;
	onChange: (value: ExpenseCategory) => void;
	className?: string;
};

export function CategorySelect({ value, onChange, className }: Props) {
	const [open, setOpen] = useState(false);
	const meta = categoryMeta(value);

	return (
		<div className={cn('relative', className)}>
			<button
				type="button"
				onClick={() => setOpen((o) => !o)}
				className={cn(
					'border-input bg-background flex w-full items-center justify-between rounded-md border px-3 py-2 text-sm shadow-sm transition',
					'hover:border-primary/40 focus:ring-ring/40 focus:ring-2 focus:outline-none',
				)}
			>
				<span className="flex items-center gap-2">
					<span className="text-base leading-none">{meta.emoji}</span>
					<span className="font-medium">{meta.label}</span>
				</span>
				<ChevronDown
					className={cn('text-muted-foreground size-4 transition', open && 'rotate-180')}
				/>
			</button>

			{open && (
				<>
					<div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
					<div className="bg-popover absolute right-0 left-0 z-50 mt-1.5 grid max-h-72 grid-cols-2 gap-1 overflow-y-auto rounded-lg border p-1.5 shadow-xl">
						{CATEGORIES.map((c) => {
							const active = c.key === value;
							return (
								<button
									type="button"
									key={c.key}
									onClick={() => {
										onChange(c.key);
										setOpen(false);
									}}
									className={cn(
										'flex items-center justify-between rounded-md px-2.5 py-2 text-sm transition',
										active ? 'bg-primary/15 text-primary' : 'hover:bg-muted',
									)}
								>
									<span className="flex items-center gap-2">
										<span className="text-base leading-none">{c.emoji}</span>
										{c.label}
									</span>
									{active && <Check className="size-3.5" />}
								</button>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
}
