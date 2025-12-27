import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface PageLayoutProps {
	children: ReactNode;
	className?: string;
}

export const PageLayout = ({ children, className }: PageLayoutProps) => {
	return (
		<main className={twMerge('animate__animated animate__fadeIn pb-10', className)}>
			{children}
		</main>
	);
};
