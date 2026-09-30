export interface VapItemData {
    id: number;
    title: string;
    src: string;
    amount: number;
    price?: number;
}
type VapListItemProps = VapItemData & {
    onClick?: (item: VapItemData) => void;
    disableOutOfStockStyles?: boolean;
};
export declare const VapListItem: ({ id, amount, src, title, price, onClick, disableOutOfStockStyles, }: VapListItemProps) => import("react").JSX.Element;
export {};
