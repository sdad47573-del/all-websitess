import type { ReactNode } from 'react';

export interface CollapsibleProps {
	isOpen: boolean;
	children: ReactNode;
}

export const Collapsible = ({ isOpen, children }: CollapsibleProps) => {
	const styles = isOpen
		? {
				maxHeight: 'unset',
				opacity: 1,
				transform: 'translateY(0)',
			}
		: {
				maxHeight: 0,
				opacity: 0,
				transform: 'translateY(-4px)',
			};

	return (
		<div
			aria-hidden={!isOpen}
			style={{
				...styles,
				transition: 'opacity 300ms ease, transform 300ms ease',
				overflow: 'hidden',
			}}
		>
			<div>{children}</div>
		</div>
	);
};
