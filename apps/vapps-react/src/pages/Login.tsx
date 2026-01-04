import { LoginForm, type LoginFormData } from '@react-components';
import { useEffect } from 'react';
// import { Helmet } from 'react-helmet-async';
import Toastify from 'toastify-js';
import { useLocation } from 'wouter';
import { useAuth } from '../contexts/AuthContext';
import { useSignIn } from '@/hooks';
import Logo from '../layouts/Logo';
import { useStore } from '@nanostores/react';
import { theme, toggleTheme } from '../stores/theme.store';

export const Login = () => {
	const { user } = useAuth();
	const [, setLocation] = useLocation();
	const signInMutation = useSignIn();
	const $theme = useStore(theme);

	useEffect(() => {
		if (user) {
			setLocation('/');
		}
	}, [user, setLocation]);

	const handleLogin = async (data: LoginFormData) => {
		const { error } = await signInMutation.mutateAsync([data.email, data.password]);

		if (error) {
			Toastify({
				text: error.message || 'Error al iniciar sesión',
				duration: 3000,
				gravity: 'top',
				position: 'right',
				style: {
					background: 'linear-gradient(to right, #ef4444, #f87171)',
				},
				className: 'rounded-lg shadow-lg font-medium',
			}).showToast();
			return;
		}

		Toastify({
			text: '¡Bienvenido de vuelta!',
			duration: 2000,
			gravity: 'top',
			position: 'right',
			style: {
				background: 'linear-gradient(to right, #10b981, #34d399)',
			},
			className: 'rounded-lg shadow-lg font-medium',
		}).showToast();

		setLocation('/');
	};

	return (
		<>
			{/* <Helmet>
				<title>Acceder - Vapps</title>
				<meta
					name="description"
					content="Inicia sesión en Vapps para gestionar tu inventario de vapers"
				/>
			</Helmet> */}

			<div className="bg-base-200 relative flex min-h-screen w-full items-center justify-center overflow-hidden">
				<div className="absolute top-4 right-4 z-20">
					<button
						onClick={toggleTheme}
						className="btn btn-ghost btn-circle"
						aria-label="Alternar tema"
					>
						{$theme === 'scruz-dark' ? (
							<i className="ri-sun-line text-xl"></i>
						) : (
							<i className="ri-moon-line text-xl"></i>
						)}
					</button>
				</div>
				{/* Background Blobs */}
				<div className="bg-primary/30 absolute -top-20 -left-20 h-96 w-96 animate-pulse rounded-full blur-3xl filter"></div>
				<div className="bg-secondary/30 absolute top-1/2 -right-20 h-96 w-96 animate-pulse rounded-full blur-3xl filter delay-1000"></div>
				<div className="bg-accent/20 absolute -bottom-32 left-1/3 h-80 w-80 animate-pulse rounded-full blur-3xl filter delay-700"></div>

				{/* Glass Card */}
				<div className="animate__animated animate__fadeInUp bg-base-100/60 relative z-10 mx-4 w-full max-w-sm overflow-hidden rounded-3xl border border-white/20 p-8 shadow-2xl backdrop-blur-xl sm:px-10">
					{/* Header */}
					<div className="mb-8 text-center">
						<div className="flex justify-center">
							<Logo className="w-24 drop-shadow-xl" />
						</div>
						<p className="text-base-content/60 mt-2 text-sm font-medium">
							Gestión Inteligente de Inventario
						</p>
					</div>

					{/* Form Container */}
					<div className="space-y-6">
						<LoginForm onSubmit={handleLogin} />
					</div>

					{/* Footer */}
					<div className="mt-10 text-center">
						<p className="text-base-content/40 text-xs">
							&copy; {new Date().getFullYear()} Vapps Inc.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
