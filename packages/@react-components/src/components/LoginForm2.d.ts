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
export type LoginForm2Data = z.infer<typeof loginSchema>;
export interface LoginForm2Props {
    onSubmit: (data: LoginForm2Data) => Promise<void>;
}
export declare const LoginForm2: ({ onSubmit }: LoginForm2Props) => import("react").JSX.Element;
export {};
