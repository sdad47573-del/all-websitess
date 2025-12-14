import type { Meta, StoryObj } from '@storybook/react';
import { UserMenu } from './UserMenu';
declare const meta: Meta<typeof UserMenu>;
export default meta;
type Story = StoryObj<typeof UserMenu>;
export declare const Default: Story;
export declare const LoggedOut: Story;
