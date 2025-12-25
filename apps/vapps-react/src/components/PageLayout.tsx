import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface PageLayoutProps {
    children: ReactNode;
    className?: string;
    title?: string;
}

export const PageLayout = ({ children, className, title }: PageLayoutProps) => {
    return (
        <main className={twMerge('pb-10 animate__animated animate__fadeIn', className)}>
            {title && (
                <div className="px-5 pt-8 pb-4">
                    <h1 className="text-3xl font-extrabold text-base-content tracking-tight">
                        {title}
                    </h1>
                </div>
            )}
            {children}
        </main>
    );
};
