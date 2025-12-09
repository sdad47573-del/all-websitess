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

export const UserMenu = ({ user, profile, onLogout }: UserMenuProps) => {
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
				className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
			>
				<li className="menu-title">
					<span>{profile.full_name}</span>
					<span className="badge badge-sm badge-primary">{profile.role}</span>
				</li>
				<li>
					<a className="text-sm">{user.email}</a>
				</li>
				<li>
					<button onClick={onLogout} className="text-error">
						<i className="ri-logout-box-line"></i>
						Cerrar Sesión
					</button>
				</li>
			</ul>
		</div>
	);
};
