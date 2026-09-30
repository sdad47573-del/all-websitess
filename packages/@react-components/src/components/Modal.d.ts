import { type NumericFormData } from './NumericForm';
export interface ModalData {
    id: number;
    title: string;
    src: string;
    amount: number;
}
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: ModalData | null;
    onSubmit: (data: NumericFormData) => void;
}
export declare const Modal: ({ isOpen, onClose, data, onSubmit }: ModalProps) => import("react").JSX.Element | null;
export {};
