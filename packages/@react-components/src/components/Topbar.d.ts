import React from 'react';
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
    logo: React.ReactNode;
    links: NavLink[];
    currentPath: string;
    LinkComponent: React.ComponentType<{
        href: string;
        className?: string;
        children: React.ReactNode;
        onClick?: () => void;
    }>;
}
export declare const Topbar: React.FC<TopbarProps>;
export {};
