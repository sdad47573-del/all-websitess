import type { ReactNode, ComponentType } from 'react';
export interface SocialLinks {
    phone?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
}
export interface NavLink {
    name: string;
    href: string;
}
interface TopbarProps extends SocialLinks {
    logo: ReactNode;
    links: NavLink[];
    currentPath: string;
    LinkComponent: ComponentType<{
        href: string;
        className?: string;
        children: ReactNode;
        onClick?: () => void;
    }>;
}
export declare const Topbar: ({ phone, facebook, instagram, linkedin, logo, links, currentPath, LinkComponent, }: TopbarProps) => import("react").JSX.Element;
export {};
