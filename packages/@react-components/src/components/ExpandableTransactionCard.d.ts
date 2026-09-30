import { type ReactNode } from 'react';
export interface TransactionItem {
    id: number | string;
    title: string;
    src: string;
    amount: number;
    price?: number;
    [key: string]: any;
}
export interface ExpandableTransactionCardProps {
    title: string;
    date: string;
    stats: {
        label: string;
        value: string | number;
    }[];
    status?: {
        label: string;
        value: string | number;
        isPending: boolean;
    };
    items?: TransactionItem[];
    isInitiallyExpanded?: boolean;
    actions?: ReactNode;
}
export declare const ExpandableTransactionCard: ({ title, date, stats, status, items, isInitiallyExpanded, actions, }: ExpandableTransactionCardProps) => import("react").JSX.Element;
