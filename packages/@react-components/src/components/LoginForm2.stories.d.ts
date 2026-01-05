import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ onSubmit }: import("./LoginForm2").LoginFormProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
