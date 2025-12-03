import { atom } from 'nanostores';

export interface VaperData {
	src: any;
	title: string;
	amount: number;
}

export const isModalOpen = atom(false);
export const modalData = atom<VaperData | null>(null);

export function openModal(data: VaperData) {
	modalData.set(data);
	isModalOpen.set(true);
}

export function closeModal() {
	isModalOpen.set(false);
}
