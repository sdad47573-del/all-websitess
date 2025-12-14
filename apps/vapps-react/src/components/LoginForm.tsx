import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Toastify from 'toastify-js';
import { z } from 'zod';
// TODO hacer mutacion
import { signIn } from '../services/auth.service';

const loginSchema = z.object({
	email: z.string().email('Email inválido'),
	password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginFormData) => {
		setIsLoading(true);

		// try {
		const { data: dataSignIn, error } = await signIn(data.email, data.password);

		if (error) {
			Toastify({
				text: error.message || 'Error al iniciar sesión',
				duration: 3000,
				gravity: 'top',
				position: 'right',
				style: {
					background: 'linear-gradient(to right, #ff5f6d, #ffc371)',
				},
			}).showToast();
			return;
		}

		Toastify({
			text: '¡Bienvenido!',
			duration: 2000,
			gravity: 'top',
			position: 'right',
			style: {
				background: 'linear-gradient(to right, #00b09b, #96c93d)',
			},
		}).showToast();

		if (dataSignIn.session) {
			const { access_token, refresh_token } = dataSignIn.session;
			Cookies.set('sb-access-token', access_token);
			Cookies.set('sb-refresh-token', refresh_token);
		}

		// Redirect to home page
		window.location.href = '/';
		// } catch (error) {
		// 	console.error('Login error:', error);
		// 	Toastify({
		// 		text: 'Error inesperado al iniciar sesión',
		// 		duration: 3000,
		// 		gravity: 'top',
		// 		position: 'right',
		// 		style: {
		// 			background: 'linear-gradient(to right, #ff5f6d, #ffc371)',
		// 		},
		// 	}).showToast();
		// } finally {
		// 	setIsLoading(false);
		// }
	};

	return (
		<div className="card bg-base-100 w-full max-w-md shadow-2xl">
			<div className="card-body">
				<h2 className="card-title mb-6 text-center text-3xl font-bold">Iniciar Sesión</h2>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div className="form-control">
						<label className="label" htmlFor="email">
							<span className="label-text font-semibold">Email</span>
						</label>
						<input
							id="email"
							type="email"
							placeholder="tu@email.com"
							className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
							{...register('email')}
							disabled={isLoading}
						/>
						{errors.email && (
							<label className="label">
								<span className="label-text-alt text-error">{errors.email.message}</span>
							</label>
						)}
					</div>

					<div className="form-control">
						<label className="label" htmlFor="password">
							<span className="label-text font-semibold">Contraseña</span>
						</label>
						<input
							id="password"
							type="password"
							placeholder="••••••••"
							className={`input input-bordered w-full ${errors.password ? 'input-error' : ''}`}
							{...register('password')}
							disabled={isLoading}
						/>
						{errors.password && (
							<label className="label">
								<span className="label-text-alt text-error">{errors.password.message}</span>
							</label>
						)}
					</div>

					<div className="form-control mt-6">
						<button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
							{isLoading ? (
								<>
									<span className="loading loading-spinner loading-sm"></span>
									Iniciando sesión...
								</>
							) : (
								'Iniciar Sesión'
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
