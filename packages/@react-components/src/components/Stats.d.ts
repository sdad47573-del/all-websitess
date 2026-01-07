export interface StatsItem {
    label: string;
    value: string | number;
    icon: string;
    color: string;
    isTotal?: boolean;
}
export interface StatsProps {
    title?: string;
    items: StatsItem[];
}
export declare const Stats: ({ title, items }: StatsProps) => import("react/jsx-runtime").JSX.Element;
