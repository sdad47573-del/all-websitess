export interface ProductGridItem {
    id: number;
    title: string;
    src: string;
    amount: number;
}
export interface ProductGridProps {
    items: ProductGridItem[];
    onItemClick: (id: number) => void;
    title?: string;
    helperText?: string;
}
export declare const ProductGrid: ({ items, onItemClick, title, helperText, }: ProductGridProps) => import("react/jsx-runtime").JSX.Element;
