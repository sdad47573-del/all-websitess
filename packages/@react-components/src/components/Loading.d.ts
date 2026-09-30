import { type ReactNode } from 'react';
interface LoadingProps {
    fullScreen?: boolean;
    text?: string;
    children?: ReactNode;
}
export declare const Loading: ({ fullScreen, text, children }: LoadingProps) => import("react").JSX.Element;
export {};
