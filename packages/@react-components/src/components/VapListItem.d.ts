export interface VapItemData {
    id: number;
    title: string;
    src: string;
    amount: number;
    price?: number;
}
type VapListItemProps = VapItemData & {
    onClick?: (item: VapItemData) => void;
};
export declare const VapListItem: ({ id, amount, src, title, price, onClick }: VapListItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
