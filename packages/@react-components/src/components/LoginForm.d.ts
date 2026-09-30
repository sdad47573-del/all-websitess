import { z } from 'zod';
declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type LoginFormData = z.infer<typeof loginSchema>;
export interface LoginFormProps {
    onSubmit: (data: LoginFormData) => Promise<void>;
}
export declare const LoginForm: ({ onSubmit }: LoginFormProps) => import("react").JSX.Element;
export {};
