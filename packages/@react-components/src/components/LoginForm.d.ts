import { z } from 'zod';
declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginFormData = z.infer<typeof loginSchema>;
export interface LoginFormProps {
    onSubmit: (data: LoginFormData) => Promise<void>;
}
export declare const LoginForm: ({ onSubmit }: LoginFormProps) => import("react").JSX.Element;
export {};
