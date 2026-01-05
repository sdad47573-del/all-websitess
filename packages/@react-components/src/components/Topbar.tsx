import { useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentType } from 'react';
import { twJoin } from 'tailwind-merge';

export interface SocialLinks {
	phone?: string;
	facebook?: string;
	instagram?: string;
	linkedin?: string;
}

export interface NavLink {
	name: string;
	href: string;
}

interface TopbarProps extends SocialLinks {
	logo: ReactNode;
	links: NavLink[];
	currentPath: string;
	LinkComponent: ComponentType<{
		href: string;
		className?: string;
		children: ReactNode;
		onClick?: () => void;
	}>;
}

export const Topbar = ({
	phone,
	facebook,
	instagram,
	linkedin,
	logo,
	links,
	currentPath,
	LinkComponent,
}: TopbarProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isMenuOpen &&
				menuRef.current &&
				!menuRef.current.contains(event.target as Node) &&
				buttonRef.current &&
				!buttonRef.current.contains(event.target as Node)
			) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isMenuOpen]);

	return (
		<>
			{(phone || facebook || instagram || linkedin) && (
				<div className="bg-accent text-accent-content">
					<div className="mx-auto flex items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
						<div className="flex items-center gap-2">
							{phone && (
								<>
									<i className="ri-phone-fill" />
									<span>Teléfono: </span>
									<a href={`tel:${phone}`} className="transition-colors hover:text-emerald-200">
										{phone}
									</a>
								</>
							)}
						</div>
						<div className="flex gap-3">
							{facebook && (
								<a
									target="_blank"
									href={facebook}
									className="transition-colors hover:text-emerald-200"
								>
									<i className="ri-facebook-fill flex h-5 w-5 items-center justify-center"> </i>
								</a>
							)}
							{instagram && (
								<a
									target="_blank"
									href={instagram}
									className="transition-colors hover:text-emerald-200"
								>
									<i className="ri-instagram-line flex h-5 w-5 items-center justify-center"> </i>
								</a>
							)}
							{linkedin && (
								<a
									target="_blank"
									href={linkedin}
									className="transition-colors hover:text-emerald-200"
								>
									<i className="ri-linkedin-fill flex h-5 w-5 items-center justify-center" />
								</a>
							)}
						</div>
					</div>
				</div>
			)}
			<header className="bg-base-100/90 sticky top-0 z-50 shadow-lg backdrop-blur-xl">
				<nav className="mx-auto px-4 py-2 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						<div className="">
							<LinkComponent href="/" className="font-title flex flex-col">
								{logo}
							</LinkComponent>
						</div>

						<div className="mr-2 ml-10 hidden overflow-x-auto md:block">
							<div className="flex items-baseline space-x-4">
								{links.map(({ name, href }) => {
									const isActive = currentPath === href;
									return (
										<LinkComponent
											key={name}
											className={twJoin(
												'cursor-pointer rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200',
												isActive
													? 'bg-primary text-primary-content shadow-md'
													: 'text-base-content/70 hover:bg-base-200 hover:text-primary dark:text-base-content/80 dark:hover:bg-base-300/50',
											)}
											href={href}
										>
											{name}
										</LinkComponent>
									);
								})}
							</div>
						</div>
						{phone && (
							<div className="hidden whitespace-nowrap md:block">
								<a
									className="btn btn-primary btn-sm px-4 py-0 text-sm font-medium transition-all hover:scale-105 active:scale-95"
									href={`tel:${phone}`}
								>
									Consulta Gratuita
								</a>
							</div>
						)}
						<div className="md:hidden">
							<button
								ref={buttonRef}
								onClick={toggleMenu}
								id="menu-toggle"
								className="inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-base-content/70 transition-colors hover:bg-base-200 hover:text-primary dark:hover:bg-base-300/50"
							>
								<div className="flex h-6 w-6 items-center justify-center">
									<i className="ri-menu-line text-xl"></i>
								</div>
							</button>
						</div>
					</div>
				</nav>
				<div
					ref={menuRef}
					id="mobile-menu"
					className={twJoin(
						'border-base-300 bg-base-100/95 absolute z-40 w-full border-t p-4 shadow-xl backdrop-blur-md transition-all duration-300 ease-in-out md:hidden',
						isMenuOpen
							? 'translate-y-0 opacity-100'
							: 'pointer-events-none -translate-y-4 opacity-0',
					)}
				>
					<div className="flex flex-col space-y-1">
						{links.map(({ name, href }) => {
							const isActive = currentPath === href;
							return (
								<LinkComponent
									key={name}
									className={twJoin(
										'cursor-pointer rounded-md px-4 py-3 text-base font-medium transition-all duration-200',
										isActive
											? 'bg-primary text-primary-content shadow-sm'
											: 'text-base-content/70 hover:bg-base-200 hover:text-primary dark:text-base-content/80 dark:hover:bg-base-300/50',
									)}
									href={href}
									onClick={() => setIsMenuOpen(false)}
								>
									{name}
								</LinkComponent>
							);
						})}
					</div>
				</div>
			</header>
		</>
	);
};
