import { type ReactNode } from 'react';

interface LoadingProps {
	fullScreen?: boolean;
	text?: string;
	children?: ReactNode;
}

export const Loading = ({ fullScreen = false, text = 'Cargando...', children }: LoadingProps) => {
	if (fullScreen) {
		return (
			<div
				className="animate__animated animate__fadeIn fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-base-100/80 backdrop-blur-sm"
			>
				{/* Background Blobs - matching Login aesthetic */}
				<div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl filter animate-pulse"></div>
				<div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/20 blur-3xl filter animate-pulse delay-700"></div>
				<div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl filter animate-pulse delay-1000"></div>

				<div className="relative z-10 flex flex-col items-center gap-6">

					<div className="h-10 w-10 animate-spin rounded-full border-4 border-base-300 border-t-primary"></div>

					<div className="flex flex-col items-center gap-2">
						<h3 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xl font-bold text-transparent animate-pulse">
							Vapps
						</h3>
						{text && (
							<p className="text-sm font-medium text-base-content/60 tracking-wider uppercase">
								{text}
							</p>
						)}
					</div>
					{children}
				</div>
			</div>
		);
	}

	return (
		<div className="flex h-64 w-full flex-col items-center justify-center gap-4">
			<div className="h-10 w-10 animate-spin rounded-full border-4 border-base-300 border-t-primary"></div>
			{text && <p className="text-sm text-base-content/60">{text}</p>}
		</div>
	);
};
