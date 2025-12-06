import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Ventas from './pages/Ventas';
import Compras from './pages/Compras';
import Ingresos from './pages/Ingresos';
import Estadisticas from './pages/Estadisticas';
import VentasHistorial from './pages/VentasHistorial';

function App() {
	const { user, loading } = useAuth();

	if (loading) {
		return (
			<div className="flex h-screen items-center justify-center">
				<div className="h-12 w-12 animate-spin rounded-full border-4 border-teal-600 border-t-transparent"></div>
			</div>
		);
	}

	return (
		<Routes>
			{/* Public Routes */}
			<Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />

			{/* Protected Routes */}
			<Route
				path="/"
				element={
					<ProtectedRoute>
						<Home />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/ventas"
				element={
					<ProtectedRoute>
						<Ventas />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/compras"
				element={
					<ProtectedRoute>
						<Compras />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/ingresos"
				element={
					<ProtectedRoute>
						<Ingresos />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/estadisticas"
				element={
					<ProtectedRoute>
						<Estadisticas />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/ventas-historial"
				element={
					<ProtectedRoute>
						<VentasHistorial />
					</ProtectedRoute>
				}
			/>

			{/* Catch all */}
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
}

export default App;
