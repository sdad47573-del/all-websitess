export interface SearchFilterOption {
    label: string;
    value: string | number;
}
export interface SearchFilterProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    options: SearchFilterOption[];
    selectedOption: string | number;
    onOptionChange: (value: string) => void;
    title?: string;
    searchLabel?: string;
    searchPlaceholder?: string;
    optionPlaceholder?: string;
}
export declare const SearchFilter: ({ searchTerm, onSearchChange, options, selectedOption, onOptionChange, title, searchLabel, searchPlaceholder, optionPlaceholder, }: SearchFilterProps) => import("react").JSX.Element;
