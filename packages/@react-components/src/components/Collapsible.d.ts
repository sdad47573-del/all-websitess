import type { ReactNode } from 'react';
export interface CollapsibleProps {
    isOpen: boolean;
    children: ReactNode;
}
export declare const Collapsible: ({ isOpen, children }: CollapsibleProps) => import("react/jsx-runtime").JSX.Element;
