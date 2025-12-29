import type { InputHTMLAttributes, ReactNode } from 'react';
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    leftIconClass?: string;
    rightAddon?: ReactNode;
    containerClassName?: string;
};
export declare const Input: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    leftIconClass?: string;
    rightAddon?: ReactNode;
    containerClassName?: string;
} & import("react").RefAttributes<HTMLInputElement>>;
