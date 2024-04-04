import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/admin/HeaderComponent';
import LeftMenuPage from './LeftMenuPage';
function AdminPage() {
	return (
		<>
			<HeaderComponent />
			<div className="flex h-screen">
				<div className="w-1/4">
					{/* Nội dung của phần Left */}
					<LeftMenuPage />
				</div>
				<div className="w-3/4">
					{/* Nội dung của phần Right */}
					<Outlet />
				</div>
			</div>
		</>
	);
}
export default AdminPage;
