import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Toastify from 'toastify-js';
import { useLocation } from 'wouter';
import { z } from 'zod';
import { useSignIn } from '../hooks';
import { playSound } from '../lib/sound';

const loginSchema = z.object({
	email: z.string().email('Email inválido'),
	password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
	const [, setLocation] = useLocation();

	const { mutateAsync: signInMutate, isPending: isMutationLoading } = useSignIn();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: LoginFormData) => {
		const { error } = await signInMutate([data.email, data.password]);

		if (error) {
			playSound('error');
			Toastify({
				text: (error as { message?: string })?.message || 'Error al iniciar sesión',
				duration: 3000,
				gravity: 'top',
				position: 'right',
				style: {
					background: 'linear-gradient(to right, #ff5f6d, #ffc371)',
				},
			}).showToast();
			return;
		}

		playSound('success');
		Toastify({
			text: '¡Bienvenido!',
			duration: 2000,
			gravity: 'top',
			position: 'right',
			style: {
				background: 'linear-gradient(to right, #00b09b, #96c93d)',
			},
		}).showToast();

		// Redirect to home page
		await new Promise((r) => setTimeout(r, 300));
		setLocation('/');
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
							disabled={isMutationLoading}
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
							disabled={isMutationLoading}
						/>
						{errors.password && (
							<label className="label">
								<span className="label-text-alt text-error">{errors.password.message}</span>
							</label>
						)}
					</div>

					<div className="form-control mt-6">
						<button type="submit" className="btn btn-primary w-full" disabled={isMutationLoading}>
							{isMutationLoading ? (
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
