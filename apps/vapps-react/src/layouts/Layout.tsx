import type { ReactNode } from 'react';
// import { Helmet } from 'react-helmet-async';
import Topbar from './Topbar';

import '@astro-config/index.css';

interface LayoutProps {
	children: ReactNode;
	title?: string;
	description?: string;
}

export default function Layout({
	children,
	// title = 'Vapps - Sistema de Gestión de Inventario',
	// description = 'Sistema de gestión de inventario de vapers',
}: LayoutProps) {
	return (
		<>
			{/* <Helmet>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="theme-color" content="#1e293b" />
			</Helmet> */}
			<div className="bg-base-100 min-h-screen" data-theme="scruz">
				<Topbar />
				{children}
			</div>
		</>
	);
}
