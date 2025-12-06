import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Toastify from 'toastify-js';

export default function UserMenu() {
	const { user, profile, signOut } = useAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await signOut();

			Toastify({
				text: 'Sesión cerrada correctamente',
				duration: 2000,
				gravity: 'top',
				position: 'right',
				style: {
					background: 'linear-gradient(to right, #00b09b, #96c93d)',
				},
			}).showToast();

			navigate('/login');
		} catch (error) {
			console.error('Logout error:', error);
			Toastify({
				text: 'Error al cerrar sesión',
				duration: 3000,
				gravity: 'top',
				position: 'right',
				style: {
					background: 'linear-gradient(to right, #ff5f6d, #ffc371)',
				},
			}).showToast();
		}
	};

	if (!user || !profile) {
		return null;
	}

	return (
		<div className="dropdown dropdown-end">
			<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
				<div className="bg-primary text-primary-content w-10 rounded-full">
					<span className="text-sm font-semibold">{profile.full_name.charAt(0).toUpperCase()}</span>
				</div>
			</div>
			<ul
				tabIndex={0}
				className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
			>
				<li className="menu-title">
					<span>{profile.full_name}</span>
					<span className="badge badge-sm badge-primary">{profile.role}</span>
				</li>
				<li>
					<a className="text-sm">{user.email}</a>
				</li>
				<li>
					<button onClick={handleLogout} className="text-error">
						<i className="ri-logout-box-line"></i>
						Cerrar Sesión
					</button>
				</li>
			</ul>
		</div>
	);
}
