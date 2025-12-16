import { Topbar as SharedTopbar } from '@react-components';
import { Link, useLocation } from 'wouter';
import Logo from './Logo';

const sections = [
	{ name: 'Inicio', href: '/' },
	{ name: 'Promos', href: '/promos' },
	{ name: 'Promos2', href: '/promos2' },
	{ name: 'Ventas', href: '/ventas' },
	{ name: 'Libro de cuentas', href: '/libro-cuentas' },
	{ name: 'Compras', href: '/compras' },
	{ name: 'Estadísticas', href: '/estadisticas' },
	{ name: 'Historial de ventas', href: '/ventas-historial' },
];

export default function Topbar({
	phone,
	facebook,
	instagram,
	linkedin,
}: {
	phone?: string;
	facebook?: string;
	instagram?: string;
	linkedin?: string;
}) {
	const [currentPath] = useLocation();

	return (
		<SharedTopbar
			phone={phone}
			facebook={facebook}
			instagram={instagram}
			linkedin={linkedin}
			logo={<Logo />}
			links={sections}
			currentPath={currentPath}
			LinkComponent={Link as any}
		/>
	);
}
