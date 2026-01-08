import type { ReactNode } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Topbar } from '@react-components';

export default function Layout({ children }: { children: ReactNode }) {
	const { location } = useRouterState();

	const sections = [
		{ name: '2024', href: '/2024' },
		{ name: '2025', href: '/2025' },
	];

	const RouterLink = ({
		href,
		className,
		children,
		onClick,
	}: {
		href: string;
		className?: string;
		children: ReactNode;
		onClick?: () => void;
	}) => (
		<Link to={href} className={className} onClick={onClick}>
			{children}
		</Link>
	);

	return (
		<div className="bg-base-100 min-h-screen">
			<Topbar
				logo={<span className="text-xl font-bold">Acciones</span>}
				links={sections}
				currentPath={location.pathname}
				LinkComponent={RouterLink}
			/>
			{children}
		</div>
	);
}

