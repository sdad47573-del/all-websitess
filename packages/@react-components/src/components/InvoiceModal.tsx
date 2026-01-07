interface InvoiceModalProps {
	isOpen: boolean;
	url: string;
	onClose: () => void;
}

export const InvoiceModal = ({ isOpen, url, onClose }: InvoiceModalProps) => {
	if (!isOpen) return null;
	return (
		<div className="bg-base-content/40 fixed inset-0 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm">
			<div className="bg-base-100 border-base-200 h-[80vh] w-full max-w-4xl overflow-hidden rounded-xl border shadow-2xl">
				<div className="border-base-200 flex items-center justify-between border-b p-3">
					<h4 className="text-base-content text-base font-bold">Factura</h4>
					<div className="flex items-center gap-2">
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-ghost btn-sm"
						>
							Abrir en nueva pestaña
						</a>
						<button
							type="button"
							onClick={onClose}
							className="btn btn-ghost btn-circle"
							aria-label="Cerrar visor de factura"
						>
							<i className="ri-close-line text-xl" />
						</button>
					</div>
				</div>
				<iframe src={url} className="bg-base-100 h-full w-full" title="Factura PDF" />
			</div>
		</div>
	);
};
