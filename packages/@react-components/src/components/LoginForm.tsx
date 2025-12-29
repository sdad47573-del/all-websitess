import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from './Input';
import { Checkbox } from './Checkbox';
import { InputPassword } from './InputPassword';

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
			<Input
				id="email"
				type="email"
				autoComplete="email"
				placeholder="tu@email.com"
				label="Email"
				leftIconClass="ri-mail-line"
				error={errors.email?.message}
				disabled={isLoading}
				{...register('email')}
			/>

			<InputPassword
				id="password"
				autoComplete="current-password"
				placeholder="••••••••"
				label="Contraseña"
				leftIconClass="ri-lock-2-line"
				error={errors.password?.message}
				disabled={isLoading}
				{...register('password')}
			/>

			<div className="flex items-center justify-between">
				<Checkbox label="Recordarme" {...register('remember' as any)} disabled={isLoading} aria-label="Recordarme" />
				<a href="/recuperar" className="link link-primary text-sm">
					¿Olvidaste tu contraseña?
				</a>
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
