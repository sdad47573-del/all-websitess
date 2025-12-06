import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from '../components/LoginForm';
import Logo from '../layouts/Logo';

export default function Login() {
	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [user, navigate]);

	return (
		<>
			<Helmet>
				<title>Login - Vapps</title>
				<meta
					name="description"
					content="Inicia sesión en Vapps para gestionar tu inventario de vapers"
				/>
			</Helmet>
			<div
				className="from-primary/10 via-base-100 to-secondary/10 min-h-screen bg-linear-to-br"
				data-theme="scruz"
			>
				<div className="flex min-h-screen flex-col items-center justify-center p-4">
					{/* Logo */}
					<div className="mb-8 text-center">
						<div className="mb-4 flex justify-center">
							<Logo />
						</div>
						<h1 className="from-primary to-secondary bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent">
							Vapps
						</h1>
						<p className="text-base-content/70 mt-2">Sistema de Gestión de Inventario</p>
					</div>

					{/* Login Form */}
					<LoginForm />

					{/* Footer */}
					<div className="text-base-content/60 mt-8 text-center text-sm">
						<p>&copy; 2025 Vapps. Todos los derechos reservados.</p>
					</div>
				</div>
			</div>
		</>
	);
}
