import { useLocation } from 'wouter';
import { useAuth } from '../contexts/AuthContext';
import { type ReactNode, useEffect } from 'react';

interface PrivateRouteProps {
	children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const { user, loading } = useAuth();
	const [, setLocation] = useLocation();

	useEffect(() => {
		if (!loading && !user) {
			setLocation('/login');
		}
	}, [user, loading, setLocation]);

	if (loading) {
		return <div>Loading...</div>; // Or a proper loading spinner
	}

	if (!user) {
		return null;
	}

	return <>{children}</>;
};
