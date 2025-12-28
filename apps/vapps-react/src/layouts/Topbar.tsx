import { useStore } from '@nanostores/react';
import { twJoin } from 'tailwind-merge';
import { Link, useLocation } from 'wouter';
import { PWAInstallButton } from '../components/PWAInstallButton';
import { useAuth } from '../contexts/AuthContext';
import { isModalOpen } from '../stores/modal.store';
import Logo from './Logo';

const baseSections = [
	{ name: 'Inicio', href: '/' },
	{ name: 'Promos', href: '/promos' },
	{ name: 'Promos2', href: '/promos2' },
	{ name: 'Ventas', href: '/ventas' },
	{ name: 'Libro de cuentas', href: '/libro-cuentas' },
	{ name: 'Compras', href: '/compras' },
];

export default function Topbar() {
	const [currentPath] = useLocation();
	const { profile, signOut } = useAuth();
	const $isModalOpen = useStore(isModalOpen);

	const adminSections =
		profile?.role === 'superadmin'
			? [
				{ name: 'Estadísticas', href: '/estadisticas' },
				{ name: 'Historial de ventas', href: '/ventas-historial' },
				{ name: 'Pendientes', href: '/pendientes-asignar' },
			]
			: [];

	const sections = [...baseSections, ...adminSections];

	return (
		<div
			className={twJoin(
				'navbar bg-base-100 sticky top-0 px-4 shadow-sm',
				$isModalOpen ? 'z-0' : 'z-40',
			)}
		>
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box border-base-200 z-[1] mt-3 w-52 border p-2 shadow-lg"
					>
						{sections.map((link) => (
							<li key={link.href}>
								<Link href={link.href} className={currentPath === link.href ? 'active' : ''}>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<Link href="/" className="btn btn-ghost flex items-center gap-2 px-0 hover:bg-transparent">
					<Logo />
				</Link>
			</div>

			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal gap-1 px-1">
					{sections.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className={twJoin(
									'rounded-lg transition-all',
									currentPath === link.href
										? 'bg-primary text-primary-content hover:bg-primary/90 shadow-md'
										: 'hover:bg-base-200'
								)}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className="navbar-end gap-2">
				<PWAInstallButton />
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar border-primary/20 border-2 p-0.5"
					>
						<div className="w-10 rounded-full">
							<img
								alt="User Avatar"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box border-base-200 z-[1] mt-3 w-60 border p-2 shadow-xl"
					>
						<div className="border-base-200 mb-2 border-b px-4 py-3">
							<p className="text-base-content truncate text-sm font-bold">
								{profile?.full_name || ''}
							</p>
							<p className="text-base-content/50 truncate text-xs">Acceso Autorizado</p>
						</div>
						{/* <li>
							<Link href="/" className="flex items-center gap-2 py-2">
								<i className="ri-user-line text-lg"></i>
								Perfil
							</Link>
						</li>
						<li>
							<Link href="/estadisticas" className="flex items-center gap-2 py-2">
								<i className="ri-settings-4-line text-lg"></i>
								Ajustes
							</Link>
						</li> */}
						<div className="divider my-1"></div>
						<li>
							<a
								onClick={() => signOut()}
								className="text-error hover:bg-error/10 flex items-center gap-2 py-2"
							>
								<i className="ri-logout-box-line text-lg"></i>
								Cerrar sesión
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
