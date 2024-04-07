import { Link } from 'react-router-dom';

function LeftMenuComponent() {
	return (
		<div className="w-64 min-h-screen bg-gray-800 text-white">
			<ul className="space-y-2 p-4">
				<li>
					<Link to="/admin" className="block hover:bg-gray-700 px-2 py-1 rounded">
						Dashboard
					</Link>
				</li>
				<li>
					<Link
						to="trips/history"
						className="block hover:bg-gray-700 px-2 py-1 rounded"
					>
						Lịch sử chuyến xe
					</Link>
				</li>
				<li>
					<Link
						to="trips"
						className="block hover:bg-gray-700 px-2 py-1 rounded"
					>
						Chuyến xe
					</Link>
				</li>
				<li>
					<Link
						to="bushose"
						className="block hover:bg-gray-700 px-2 py-1 rounded"
					>
						Nhà xe
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default LeftMenuComponent;
