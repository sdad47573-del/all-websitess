import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    children?: ReactNode;
}

export const SectionHeader = ({ title, subtitle, className, children }: SectionHeaderProps) => {
    return (
        <div className={twMerge('p-5', className)}>
            <h2 className="text-xl font-semibold text-base-content">{title}</h2>
            {subtitle && <p className="mt-1 text-sm text-base-content/60">{subtitle}</p>}
            {children}
        </div>
    );
};
