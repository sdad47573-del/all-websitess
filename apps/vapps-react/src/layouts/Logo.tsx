import logo from '@assets/VAPS/ChopperLogo.webp';
import { twJoin } from 'tailwind-merge';

type Props = {
	className?: string;
};

export default function Logo({ className }: Props) {
	return <img src={logo} alt="Logo" className={twJoin(className, 'w-20')} />;
}
