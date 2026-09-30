import type { ReactNode } from 'react';
interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    children?: ReactNode;
}
export declare const SectionHeader: ({ title, subtitle, className, children }: SectionHeaderProps) => import("react").JSX.Element;
export {};
