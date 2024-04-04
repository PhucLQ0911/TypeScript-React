const Card = () => {
	return (
		<a href="#" className="block rounded-lg shadow-sm shadow-indigo-100">
			<img src="../../images/sgnt.png" className="object-cover" />
			<div className="mt-2 px-3 py-4">
				<div>
					<dt className="sr-only">Sai Gon - Nha Trang</dt>
					<dd className="font-medium">Sai Gon - Nha Trang</dd>
				</div>
				<div>
					<dt className="sr-only">Address</dt>
					<dd className=" text-sm text-gray-500">
						Từ 200.000đ <span className="line-through">250.000đ</span>
					</dd>
				</div>
			</div>
		</a>
	);
};

export default Card;
