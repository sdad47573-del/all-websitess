import { atom } from 'nanostores';
import type { ModalData } from '@react-components';

export const modalData = atom<ModalData | null>(null);
export const isModalOpen = atom<boolean>(false);
