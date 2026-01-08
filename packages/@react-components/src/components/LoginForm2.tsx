import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
	email: z.string().email('Email inválido'),
	password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export type LoginForm2Data = z.infer<typeof loginSchema>;

export interface LoginForm2Props {
	onSubmit: (data: LoginForm2Data) => Promise<void>;
}

export const LoginForm2 = ({ onSubmit }: LoginForm2Props) => {
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginForm2Data>({
		resolver: zodResolver(loginSchema),
	});

	const handleFormSubmit = async (data: LoginForm2Data) => {
		setIsLoading(true);
		try {
			await onSubmit(data);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="card bg-base-100 w-full max-w-md shadow-2xl">
			<div className="card-body">
				<h2 className="card-title mb-6 text-center text-3xl font-bold">Iniciar Sesión</h2>

				<form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
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
};
