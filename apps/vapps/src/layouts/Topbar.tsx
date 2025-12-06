import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';
import UserMenu from '../components/UserMenu';
import { useAuth } from '../contexts/AuthContext';

const sections = [
	{ name: 'Inicio', href: '/' },
	{ name: 'Ventas', href: '/ventas' },
	{ name: 'Ingresos', href: '/ingresos' },
	{ name: 'Compras', href: '/compras' },
	{ name: 'Estadísticas', href: '/estadisticas' },
	{ name: 'Historial de ventas', href: '/ventas-historial' },
];

export default function Topbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();
	const { profile } = useAuth();

	return (
		<div className="navbar bg-base-100 sticky top-0 z-50 shadow-md">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
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
					{isMenuOpen && (
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							{sections.map((section) => (
								<li key={section.href}>
									<Link
										to={section.href}
										className={location.pathname === section.href ? 'active' : ''}
										onClick={() => setIsMenuOpen(false)}
									>
										{section.name}
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
				<Link to="/" className="btn btn-ghost">
					<Logo />
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{sections.map((section) => (
						<li key={section.href}>
							<Link
								to={section.href}
								className={location.pathname === section.href ? 'active' : ''}
							>
								{section.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="navbar-end">
				<div className="flex items-center gap-2">
					{profile && (
						<div className="mr-2 hidden items-center gap-2 md:flex">
							<span className="text-base-content/70 text-sm">
								Hola, <strong>{profile.full_name}</strong>
							</span>
							<span className="badge badge-sm badge-primary">{profile.role}</span>
						</div>
					)}
					<UserMenu />
				</div>
			</div>
		</div>
	);
}
