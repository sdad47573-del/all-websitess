export interface VapItemData {
    id: number;
    title: string;
    src: string;
    amount: number;
}
type VapListItemProps = VapItemData & {
    onClick?: (item: VapItemData) => void;
};
export declare const VapListItem: ({ id, amount, src, title, onClick }: VapListItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
