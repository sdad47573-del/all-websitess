import type { Meta, StoryObj } from '@storybook/react';
import { OfflineIndicator } from './OfflineIndicator';
import { useEffect, useState } from 'react';

const meta = {
    title: 'Components/OfflineIndicator',
    component: OfflineIndicator,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof OfflineIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="min-h-screen bg-base-200">
            <OfflineIndicator />
            <div className="p-8">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Offline Indicator</h2>
                        <p>
                            Este componente muestra un banner cuando el usuario pierde la conexión a internet.
                        </p>
                        <div className="alert alert-info mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div>
                                <h3 className="font-bold">Cómo probar</h3>
                                <div className="text-sm">
                                    1. Abre las DevTools (F12)<br />
                                    2. Ve a la pestaña Network<br />
                                    3. Cambia el throttling a "Offline"<br />
                                    4. El banner aparecerá automáticamente
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
};

// Simulated offline state for demonstration
const OfflineSimulator = () => {
    const [isOffline, setIsOffline] = useState(false);

    useEffect(() => {
        // Simulate going offline after 2 seconds
        const timer = setTimeout(() => {
            setIsOffline(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-base-200">
            {isOffline && (
                <div className="fixed top-0 left-0 right-0 z-50 bg-warning text-warning-content py-2 px-4 text-center shadow-lg animate__animated animate__slideInDown">
                    <div className="flex items-center justify-center gap-2">
                        <i className="ri-wifi-off-line text-xl" />
                        <span className="font-medium">Sin conexión a Internet</span>
                        <span className="hidden sm:inline text-sm opacity-80">
                            - Trabajando en modo offline
                        </span>
                    </div>
                </div>
            )}
            <div className="p-8 pt-20">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Simulación de Estado Offline</h2>
                        <p>
                            {isOffline
                                ? '🔴 Ahora estás offline (simulado)'
                                : '🟢 Esperando 2 segundos para simular offline...'}
                        </p>
                        <button
                            className="btn btn-primary mt-4"
                            onClick={() => setIsOffline(!isOffline)}
                        >
                            {isOffline ? 'Volver Online' : 'Ir Offline'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Simulated: Story = {
    render: () => <OfflineSimulator />,
};
