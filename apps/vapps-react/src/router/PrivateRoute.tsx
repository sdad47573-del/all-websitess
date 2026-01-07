import type { JSX } from 'react';
import { Redirect } from 'wouter';
import { Loading } from '@react-components';
import { useAuth } from '../contexts/AuthContext';

interface PrivateRouteProps {
	children: JSX.Element | JSX.Element[];
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const { user, profile, loading } = useAuth();

	if (loading) {
		return <Loading fullScreen />;
	}

	if (!user || !profile) {
		return <Redirect to="/login" />;
	}

	return children;
};
