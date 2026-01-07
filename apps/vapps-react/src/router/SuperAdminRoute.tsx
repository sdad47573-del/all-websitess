import type { JSX } from 'react';
import { Redirect } from 'wouter';
import { Loading } from '@react-components';
import { useAuth } from '../contexts/AuthContext';

interface SuperAdminRouteProps {
	children: JSX.Element | JSX.Element[];
}

export const SuperAdminRoute = ({ children }: SuperAdminRouteProps) => {
	const { profile, loading } = useAuth();

	if (loading) {
		return <Loading fullScreen />;
	}

	if (profile?.role !== 'superadmin') {
		return <Redirect to="/" />;
	}

	return children;
};
