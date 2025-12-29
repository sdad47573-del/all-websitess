import { forwardRef, useState } from 'react';
import { twJoin } from 'tailwind-merge';
import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    leftIconClass?: string;
    rightAddon?: ReactNode;
    containerClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, error, leftIconClass, rightAddon, containerClassName, type = 'text', disabled, className, id, ...props },
    ref,
) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    const inputClasses = twJoin(
        'input input-bordered w-full bg-base-200/50 backdrop-blur-sm transition-all focus:bg-base-100 focus:ring-2 focus:ring-primary/20',
        error ? 'input-error' : 'border-base-300',
        leftIconClass ? 'pl-10' : '',
        isPassword || rightAddon ? 'pr-12' : '',
        className,
    );

    return (
        <div className={twJoin('form-control space-y-2', containerClassName)}>
            {label && (
                <label className="label p-0" htmlFor={id}>
                    <span className="label-text font-medium text-base-content/80">{label}</span>
                </label>
            )}
            <div className="relative">
                {leftIconClass && (
                    <i className={twJoin(leftIconClass, 'absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40')}></i>
                )}
                <input
                    {...props}
                    id={id}
                    ref={ref}
                    type={isPassword ? (showPassword ? 'text' : 'password') : type}
                    disabled={disabled}
                    className={inputClasses}
                />
                {isPassword ? (
                    <button
                        type="button"
                        className="btn btn-ghost btn-xs absolute right-2 top-1/2 -translate-y-1/2"
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        disabled={disabled}
                    >
                        <i className={showPassword ? 'ri-eye-off-line text-base-content/60' : 'ri-eye-line text-base-content/60'}></i>
                    </button>
                ) : (
                    rightAddon
                )}
            </div>
            {error && (
                <span className="text-xs text-error mt-1 block font-medium animate-pulse">{error}</span>
            )}
        </div>
    );
})
