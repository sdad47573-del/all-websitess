import { categoryMeta } from '@/lib/finance';
import { cn } from '@/lib/utils';

type Props = {
	category: string;
	className?: string;
	compact?: boolean;
};

export function CategoryBadge({ category, className, compact }: Props) {
	const meta = categoryMeta(category);
	return (
		<span
			className={cn(
				'inline-flex items-center gap-1.5 rounded-full font-medium ring-1 ring-inset',
				meta.bgClass,
				meta.textClass,
				meta.ringClass,
				compact ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs',
				className,
			)}
		>
			<span aria-hidden className="text-sm leading-none">
				{meta.emoji}
			</span>
			<span>{meta.label}</span>
		</span>
	);
}
