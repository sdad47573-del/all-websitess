import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ConnectedModal from './ConnectedModal';
import { isModalOpen, modalData } from '../stores/modal.store';

// Mock hook
const mockMutate = vi.fn();
vi.mock('../../hooks', () => ({
	useMutationInsertSale: () => ({
		mutate: mockMutate,
	}),
}));

// Mock toastify
vi.mock('toastify-js', () => ({
	default: vi.fn(() => ({ showToast: vi.fn() })),
}));

// Mock Modal component from @react-components
vi.mock('@react-components', () => ({
	Modal: ({ isOpen, onClose, data, onSubmit }: any) =>
		isOpen ? (
			<div data-testid="mock-modal">
				<h1>{data?.title}</h1>
				<button aria-label="Close" onClick={onClose}>
					Close
				</button>
				<button
					aria-label="Submit"
					onClick={() =>
						onSubmit({ amount: 2, price_per_unit: 10, concept: 'test', payment: true })
					}
				>
					Submit
				</button>
			</div>
		) : null,
}));

describe('ConnectedModal', () => {
	beforeEach(() => {
		mockMutate.mockClear();
		isModalOpen.set(false);
		modalData.set(null);
	});

	it('renders when store is open', () => {
		modalData.set({ id: 1, title: 'Item 1', src: 'img', amount: 100 });
		isModalOpen.set(true);

		render(<ConnectedModal />);
		expect(screen.getByTestId('mock-modal')).toBeInTheDocument();
		expect(screen.getByText('Item 1')).toBeInTheDocument();
	});

	it('does not render when store is closed', () => {
		isModalOpen.set(false);
		render(<ConnectedModal />);
		expect(screen.queryByTestId('mock-modal')).not.toBeInTheDocument();
	});

	it('closes modal on Close click', () => {
		modalData.set({ id: 1, title: 'Item 1', src: 'img', amount: 100 });
		isModalOpen.set(true);

		render(<ConnectedModal />);

		screen.getByLabelText('Close').click();
		expect(isModalOpen.get()).toBe(false);
	});

	it('submits data and shows toast', () => {
		modalData.set({ id: 1, title: 'Item 1', src: 'img', amount: 100 });
		isModalOpen.set(true);

		render(<ConnectedModal />);

		screen.getByLabelText('Submit').click();

		expect(mockMutate).toHaveBeenCalledWith(
			expect.objectContaining({
				item_id: 1,
				amount: 2,
				price_per_unit: 10,
			}),
		);

		// Modal should close after submit
		expect(isModalOpen.get()).toBe(false);
	});

	it('opens modal when openModal event is dispatched', () => {
		render(<ConnectedModal />);
		const detail = { id: 10, title: 'Item X', src: 'img', amount: 99 };
		window.dispatchEvent(new CustomEvent('openModal', { detail }));
		expect(isModalOpen.get()).toBe(true);
		expect(modalData.get()).toEqual(detail);
	});
});
