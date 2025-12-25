interface ErrorStateProps {
	message?: string;
	details?: string;
}

export const ErrorState = ({
	message = 'Ha ocurrido un error',
	details,
}: ErrorStateProps) => {
	return (
		<div className="flex flex-col items-center justify-center p-10 text-center animate__animated animate__fadeIn">
			<div className="bg-error/10 text-error p-8 rounded-2xl border border-error/20 max-w-md shadow-lg backdrop-blur-sm">
				<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-error/20 mx-auto">
					<i className="ri-error-warning-line text-3xl" />
				</div>
				<h3 className="text-xl font-bold mb-2">{message}</h3>
				{details && <p className="text-sm opacity-70 break-words">{details}</p>}
				<button
					onClick={() => window.location.reload()}
					className="mt-6 px-6 py-2 bg-error text-white rounded-lg font-bold hover:bg-error/80 transition-colors shadow-md active:scale-95"
				>
					Reintentar
				</button>
			</div>
		</div>
	);
};

