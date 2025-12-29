import type { InputHTMLAttributes } from 'react';
type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};
export declare const Checkbox: ({ label, className, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
export {};
