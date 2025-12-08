import React from 'react';
export interface VapItemData {
    id: number;
    title: string;
    src: string;
    amount: number;
}
interface VapListItemProps {
    item: VapItemData;
    onClick?: (item: VapItemData) => void;
}
export declare const VapListItem: React.FC<VapListItemProps>;
export {};
