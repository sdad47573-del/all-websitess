import { forwardRef, useState } from 'react';
import { Input, type InputProps } from './Input';
import { twJoin } from 'tailwind-merge';


export const InputPassword = forwardRef<HTMLInputElement, Omit<InputProps, 'type' | 'rightAddon'>>(
    (props, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Input
            {...props}
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            rightAddon={<button
                type="button"
                className="btn btn-ghost btn-xs absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
                <i className={twJoin('text-base-content/60', showPassword ? 'ri-eye-off-line' : 'ri-eye-line')}></i>
            </button>}
        />

    );
})