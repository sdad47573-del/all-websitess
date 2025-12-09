export interface UserProfile {
    full_name: string;
    role: string;
}
export interface User {
    email?: string;
}
interface UserMenuProps {
    user: User | null;
    profile: UserProfile | null;
    onLogout: () => void;
}
export declare const UserMenu: ({ user, profile, onLogout }: UserMenuProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
