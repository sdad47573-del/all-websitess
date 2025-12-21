import { Redirect } from 'wouter';
import { useAuth } from '../contexts/AuthContext';
import type { JSX } from 'react';

interface PrivateRouteProps {
	children: JSX.Element | JSX.Element[];
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const { user, loading } = useAuth();

	if (loading) {
		return <div aria-busy="true">Loading...</div>;
	}

	if (!user) {
		return <Redirect to="/login" />;
	}

	return children;
};
