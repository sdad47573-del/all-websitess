import { atom } from 'nanostores';
import type { ModalData } from '../components/Modal';

export const modalData = atom<ModalData | null>(null);
export const isModalOpen = atom<boolean>(false);
export const lastSale = atom<{ itemId: number; amountSold: number; timestamp: number } | null>(
	null,
);
