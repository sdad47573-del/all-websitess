import { LoginForm, type LoginFormData } from '@react-components';
import { useEffect } from 'react';
// import { Helmet } from 'react-helmet-async';
import Toastify from 'toastify-js';
import { useLocation } from 'wouter';
import { useAuth } from '../contexts/AuthContext';
import { useSignIn } from '@/hooks';

export const Login = () => {
	const { user } = useAuth();
	const [, setLocation] = useLocation();
	const signInMutation = useSignIn();

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

			<div
				className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-base-200"
				data-theme="scruz"
			>
				{/* Background Blobs */}
				<div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-primary/30 blur-3xl filter animate-pulse"></div>
				<div className="absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-secondary/30 blur-3xl filter animate-pulse delay-1000"></div>
				<div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-accent/20 blur-3xl filter animate-pulse delay-700"></div>

				{/* Glass Card */}
				<div className="animate__animated animate__fadeInUp relative z-10 mx-4 w-full max-w-sm overflow-hidden rounded-3xl border border-white/20 bg-base-100/60 p-8 shadow-2xl backdrop-blur-xl sm:px-10">

					{/* Header */}
					<div className="mb-8 text-center">
						<div className="mb-6 flex justify-center">
							{/* Replaced generic placeholder with a styled icon container */}
							<div className="rounded-xl bg-gradient-to-tr from-primary to-secondary p-3 text-white shadow-lg shadow-primary/30">
								<i className="ri-box-3-line text-3xl"></i>
							</div>
						</div>
						<h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold tracking-tight text-transparent">
							Vapps
						</h1>
						<p className="mt-2 text-sm font-medium text-base-content/60">
							Gestión Inteligente de Inventario
						</p>
					</div>

					{/* Form Container */}
					<div className="space-y-6">
						<LoginForm onSubmit={handleLogin} />
					</div>

					{/* Footer */}
					<div className="mt-10 text-center">
						<p className="text-xs text-base-content/40">
							&copy; {new Date().getFullYear()} Vapps Inc.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
