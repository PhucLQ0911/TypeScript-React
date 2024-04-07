import { createBrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import AdminPage from './pages/admin/Admin';
import CreateTrip from './pages/admin/CreateTrip';
import ListOfBusTrips from './pages/admin/ListOfBusTrips';
import ListTripHistory from './pages/admin/ListTripsHistory';
import UpdateTrip from './pages/admin/UpdateTrip';

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
		path: '*',
		element: <NotFound />,
	},
	{
		path: 'admin',
		element: <AdminPage />,
		children: [
			{
				path: 'trips',
				element: <ListOfBusTrips />,
			},
			{
				path: 'trips/history',
				element: <ListTripHistory />,
			},
			{
				path: 'trips/add',
				element: <CreateTrip />,
			},
			{
				path: 'trips/update/:id',
				element: <UpdateTrip />,
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);

export default router;
