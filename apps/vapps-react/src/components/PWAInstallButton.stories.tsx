import type { Meta, StoryObj } from '@storybook/react';
import { PWAInstallButton } from './PWAInstallButton';

const meta = {
	title: 'Components/PWAInstallButton',
	component: PWAInstallButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PWAInstallButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="bg-base-200 rounded-lg p-8">
			<div className="mb-4">
				<h3 className="mb-2 text-lg font-bold">PWA Install Button</h3>
				<p className="text-base-content/70 mb-4 text-sm">
					Este botón aparece automáticamente cuando la aplicación es instalable. En Storybook, el
					botón no será funcional ya que requiere el contexto del navegador.
				</p>
			</div>
			<PWAInstallButton />
			<div className="bg-info/10 border-info/20 mt-4 rounded border p-4">
				<p className="text-sm">
					<strong>Nota:</strong> Para probar la funcionalidad de instalación, abre la aplicación en
					un navegador compatible (Chrome, Edge, Safari) y busca el botón en la barra de navegación.
				</p>
			</div>
		</div>
	),
};

export const InNavbar: Story = {
	render: () => (
		<div className="navbar bg-base-100 shadow-lg">
			<div className="navbar-start">
				<span className="text-xl font-bold">Chopper</span>
			</div>
			<div className="navbar-center">
				<span className="text-sm">Navigation Items</span>
			</div>
			<div className="navbar-end gap-2">
				<PWAInstallButton />
				<div className="avatar">
					<div className="w-10 rounded-full">
						<img
							src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							alt="Avatar"
						/>
					</div>
				</div>
			</div>
		</div>
	),
};
