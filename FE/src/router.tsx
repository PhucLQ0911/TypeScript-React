import { createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import AdminPage from './pages/admin/Admin';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: 'about',
		element: <AboutPage />,
	},
	{
		path: 'admin',
		element: <AdminPage />,
		children: [
			{
				path: '',
				element: <h1>Content</h1>,
			},
		],
	},
]);

export default router;
