import { Route, Routes } from 'react-router-dom';
import Homee from '../pages/Homee';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import Basic from '../Layouts/Basic';
import DashboardLayouts from '../Layouts/DashboardLayouts';
import Reports from '../pages/dashboard/Reports';
import Schedule from '../pages/dashboard/Schedule';
import Dashboard from './pages/Dashboard';
import About from'./pages/About';

import PrivateRoute from './PrivateRoute';


export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<BasicLayouts />}>
				
				<Route path="/home" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Route>
			<Route
				path="/dashboard"
				element={
					<PrivateRoute>
						<DashboardLayouts />
					</PrivateRoute>
				}
			>
				<Route path="/dashboard/homee" element={<Homee />} />
				<Route path="/dashboard/reports" element={<Reports />} />
				<Route path="/dashboard/Schedule" element={<Schedule />} />
				 
				
				<Route path="/pages/about" element={<About />} />
				
			</Route>

			
		</Routes>
	);
}