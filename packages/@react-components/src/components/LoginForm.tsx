import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
	email: z.string().email('Email inválido'),
	password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export interface LoginFormProps {
	onSubmit: (data: LoginFormData) => Promise<void>;
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	const handleFormSubmit = async (data: LoginFormData) => {
		setIsLoading(true);
		try {
			await onSubmit(data);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
			<div className="form-control space-y-2">
				<label className="label p-0" htmlFor="email">
					<span className="label-text font-medium text-base-content/80">Email</span>
				</label>
				<input
					id="email"
					type="email"
					placeholder="tu@email.com"
					className={`input input-bordered w-full bg-base-200/50 backdrop-blur-sm transition-all focus:bg-base-100 focus:ring-2 focus:ring-primary/20 ${errors.email ? 'input-error' : 'border-base-300'
						}`}
					{...register('email')}
					disabled={isLoading}
				/>
				{errors.email && (
					<span className="text-xs text-error mt-1 block font-medium animate-pulse">
						{errors.email.message}
					</span>
				)}
			</div>

			<div className="form-control space-y-2">
				<label className="label p-0" htmlFor="password">
					<span className="label-text font-medium text-base-content/80">Contraseña</span>
				</label>
				<input
					id="password"
					type="password"
					placeholder="••••••••"
					className={`input input-bordered w-full bg-base-200/50 backdrop-blur-sm transition-all focus:bg-base-100 focus:ring-2 focus:ring-primary/20 ${errors.password ? 'input-error' : 'border-base-300'
						}`}
					{...register('password')}
					disabled={isLoading}
				/>
				{errors.password && (
					<span className="text-xs text-error mt-1 block font-medium animate-pulse">
						{errors.password.message}
					</span>
				)}
			</div>

			<div className="form-control pt-4">
				<button
					type="submit"
					className="btn btn-primary w-full border-none bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] hover:shadow-primary/50 active:scale-[0.98]"
					disabled={isLoading}
				>
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
	);
};
