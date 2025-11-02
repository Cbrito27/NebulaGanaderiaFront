import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Layout } from '../pages/Layout/Layout';
import { Dashboard } from '../pages/Dashboard';
import { Ganado } from '../pages/Ganado'
import { Alimentacion } from '../pages/Alimentacion';
import { Reproduccion } from '../pages/Reproduccion';
import { Produccion } from '../pages/Produccion';
const MyRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path='/' element={<Layout />}>
					<Route path='tablero' element={<Dashboard />} />
					<Route path='ganado' element={<Ganado />} />
					<Route path='alimentacion' element={<Alimentacion />} />
					<Route path='reproduccion' element={<Reproduccion />} />
					<Route path='produccion' element={<Produccion />} />
				</Route>
				<Route />
			</Routes>
		</BrowserRouter>
	);
};


export { MyRoutes };