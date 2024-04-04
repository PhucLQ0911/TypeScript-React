function LeftMenuComponent() {
	return (
		<div className="w-64 min-h-screen bg-gray-800 text-white">
			<ul className="space-y-2 p-4">
				<li>
					<a href="#" className="block hover:bg-gray-700 px-2 py-1 rounded">
						Dashboard
					</a>
				</li>
				<li>
					<a href="#" className="block hover:bg-gray-700 px-2 py-1 rounded">
						Lịch sử chuyến xe
					</a>
				</li>
				<li>
					<a href="#" className="block hover:bg-gray-700 px-2 py-1 rounded">
						Chuyến xe
					</a>
				</li>
				<li>
					<a href="#" className="block hover:bg-gray-700 px-2 py-1 rounded">
						Nhà xe
					</a>
				</li>
			</ul>
		</div>
	);
}

export default LeftMenuComponent;
