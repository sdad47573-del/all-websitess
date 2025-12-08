export interface NumericFormData {
    concept: string;
    amount: number;
    price_per_unit: number;
    payment: boolean;
}
export declare const NumericForm: ({ onSubmit, stock, }: {
    onSubmit: (data: NumericFormData) => void;
    stock: number;
}) => import("react/jsx-runtime").JSX.Element;
