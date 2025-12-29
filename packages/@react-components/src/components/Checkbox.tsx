import type { InputHTMLAttributes } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
};

export const Checkbox = ({ label, className, ...props }: CheckboxProps) => {
	return (
		<label className="flex items-center gap-2 cursor-pointer">
			<input type="checkbox" className={className ?? 'checkbox checkbox-sm'} {...props} />
			{label && <span className="text-sm text-base-content/70">{label}</span>}
		</label>
	);
};

