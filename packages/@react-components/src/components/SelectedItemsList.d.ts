export interface SelectedItem {
    item_id: number;
    title: string;
    quantity: number;
}
export interface SelectedItemsListProps {
    selected: SelectedItem[];
    onRemove: (id: number) => void;
    quantityLabel?: string;
    removeLabel?: string;
}
export declare const SelectedItemsList: ({ selected, onRemove, quantityLabel, removeLabel, }: SelectedItemsListProps) => import("react").JSX.Element | null;
