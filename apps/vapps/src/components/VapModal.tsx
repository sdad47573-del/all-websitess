import { useStore } from '@nanostores/preact';
import { useEffect, useRef } from 'preact/hooks';
import { closeModal, isModalOpen, modalData } from '../stores/modalStore';
import 'animate.css';

export default function VapModal() {
	const $isOpen = useStore(isModalOpen);
	const $data = useStore(modalData);
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if ($isOpen && dialogRef.current) {
			dialogRef.current.showModal();
		} else if (dialogRef.current) {
			dialogRef.current.close();
		}
	}, [$isOpen]);

	if (!$data) return null;

	const imgSrc = typeof $data.src === 'string' ? $data.src : $data.src.src;

	return (
		<dialog
			ref={dialogRef}
			className="animate__animated animate__zoomIn animate__faster m-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm"
			onClose={closeModal}
		>
			<div className="relative">
				<div className="aspect-square w-full overflow-hidden bg-gray-50">
					<img
						src={imgSrc}
						alt={$data.title}
						title={$data.title}
						className="h-full w-full object-cover object-top"
					/>
				</div>
				<button
					onClick={closeModal}
					className="absolute top-3 right-3 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="2.5"
						stroke="currentColor"
						className="size-5"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div className="p-5">
				<h3 className="mb-2 text-xl leading-tight font-bold text-gray-900">{$data.title}</h3>
				<div className="flex items-center justify-between border-t border-gray-100 pt-4">
					<span className="font-medium text-gray-500">Stock disponible</span>
					<span className="text-2xl font-bold text-teal-600">{$data.amount}</span>
				</div>
			</div>
		</dialog>
	);
}
