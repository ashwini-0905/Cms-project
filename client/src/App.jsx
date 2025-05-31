
import './App.css';
import { AuthProvider } from './context/Authcontext';

import AppRoutes from './routes/AppRoutes';

function App() {
	return (
		<AuthProvider>
			<StorageProvider>
				<AppRoutes />
			</StorageProvider>
		</AuthProvider>
	);
}

export default App;