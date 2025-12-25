import { useEffect, useRef, useState } from 'react';
import { twJoin } from 'tailwind-merge';
import { NumericForm, type NumericFormData } from './NumericForm';

export interface ModalData {
	id: number;
	title: string;
	src: string;
	amount: number;
}

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	data: ModalData | null;
	onSubmit: (data: NumericFormData) => void;
}

export const Modal = ({ isOpen, onClose, data, onSubmit }: ModalProps) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [dragOffset, setDragOffset] = useState(0);
	const [isClosing, setIsClosing] = useState(false);

	// Minimum swipe distance (in px) to trigger close
	const minSwipeDistance = 50;

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
			setDragOffset(0);
		}

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				onClose();
			}
		};

		document.addEventListener('keydown', handleEscape);
		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.classList.remove('overflow-hidden');
		};
	}, [isOpen, onClose]);

	const onTouchStart = (e: React.TouchEvent) => {
		setTouchEnd(null);
		setTouchStart(e.targetTouches[0].clientX);
		setIsDragging(true);
	};

	const onTouchMove = (e: React.TouchEvent) => {
		if (touchStart === null) return;
		const currentTouch = e.targetTouches[0].clientX;
		const diff = currentTouch - touchStart;

		// Allow dragging left or right
		setDragOffset(diff);
		setTouchEnd(currentTouch);
	};

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) {
			setIsDragging(false);
			setDragOffset(0);
			return;
		}

		const distance = touchEnd - touchStart;
		const isHorizontalSwipe = Math.abs(distance) > minSwipeDistance;

		if (isHorizontalSwipe) {
			const direction = distance > 0 ? 1 : -1;
			setIsClosing(true);
			setDragOffset(direction * (typeof window !== 'undefined' ? window.innerWidth : 500));
			setTimeout(() => {
				onClose();
				setIsClosing(false);
				setDragOffset(0);
			}, 120);
		}

		setIsDragging(false);
		setDragOffset(0);
		setTouchStart(null);
		setTouchEnd(null);
	};

	if (!data) return null;

	return (
		<div
			className={twJoin(
				'fixed inset-0 z-50 overflow-y-auto transition-opacity duration-100',
				isOpen ? 'opacity-100' : 'hidden opacity-0',
			)}
			aria-hidden={!isOpen}
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					onClose();
				}
			}}
		>
			<div className="relative flex min-h-full items-end justify-center p-4 sm:items-center">
				<div
					className="absolute top-0 left-0 h-full w-full cursor-pointer bg-black/50"
					onClick={onClose}
				></div>
				<div
					ref={modalRef}
					className={twJoin(
						'relative w-full max-w-md transform rounded-t-3xl bg-white sm:rounded-3xl',
						isDragging ? 'transition-none' : 'transition-transform',
						isOpen && !isDragging ? 'duration-100 ease-out' : 'duration-100',
						isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
					)}
					style={{
						transform:
							isClosing || isDragging
								? `translateX(${dragOffset}px)`
								: undefined,
					}}
					onTouchStart={onTouchStart}
					onTouchMove={onTouchMove}
					onTouchEnd={onTouchEnd}
				>
					{/* Swipe indicator - visible only on mobile */}
					<div className="flex justify-center pt-3 pb-1 sm:hidden">
						<div className="h-1.5 w-12 rounded-full bg-gray-300"></div>
					</div>

					<div className="sticky top-0 flex items-center justify-between rounded-t-3xl border-b border-gray-100 bg-white px-6 py-4">
						<h2 className="text-xl font-bold text-gray-900">Detalles del Objeto</h2>
						<button
							onClick={onClose}
							className="flex min-h-12 min-w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-gray-200 hover:text-gray-900 active:scale-95 sm:min-h-8 sm:min-w-8 sm:bg-transparent sm:hover:bg-gray-100"
							aria-label="Cerrar"
							type="button"
						>
							<i className="ri-close-line text-3xl sm:text-2xl"></i>
						</button>
					</div>
					<div className="p-6">
						<div className="mb-6 aspect-square overflow-hidden rounded-2xl bg-gray-50">
							<img
								alt={data.title}
								className="h-full w-full object-cover object-top"
								src={data.src}
							/>
						</div>
						<div className="mb-6 space-y-4">
							<div>
								<h3 className="mb-2 text-2xl font-bold text-gray-900">{data.title}</h3>
							</div>
						</div>

						<div className="border-t border-gray-100 pt-6">
							<h4 className="mb-4 flex items-baseline justify-between gap-2 font-semibold text-gray-900">
								<p></p>
								<p className="text-2xl font-bold text-teal-600">{data.amount}</p>
							</h4>

							<NumericForm onSubmit={onSubmit} stock={data.amount} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
