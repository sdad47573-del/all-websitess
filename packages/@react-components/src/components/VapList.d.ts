import { type VapItemData } from './VapListItem';
type VapListProps = {
    items: VapItemData[];
    isLoading: boolean;
    onItemClick: (item: VapItemData) => void;
};
export declare const VapList: ({ items, isLoading, onItemClick }: VapListProps) => import("react").JSX.Element;
export {};
