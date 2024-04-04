function Sort() {
	return (
		<div className="content-arrange w-96 pl-5 py-5 mr-10 bg-white rounded-lg h-64">
			<p className="font-semibold text-base mb-4">Sắp xếp</p>
			<form>
				<div className="my-1 flex">
					<input className="mr-2" name="change" id="macdinh" type="radio" />
					<label htmlFor="macdinh">Mặc định</label>
				</div>
				<div className="my-1 flex">
					<input className="mr-2" name="change" id="macdinh1" type="radio" />
					<label htmlFor="macdinh1">Giờ đi sớm nhất</label>
				</div>
				<div className="my-1 flex">
					<input className="mr-2" name="change" id="macdinh2" type="radio" />
					<label htmlFor="macdinh2">Giờ đi muộn nhất</label>
				</div>
				<div className="my-1 flex">
					<input className="mr-2" name="change" id="macdinh3" type="radio" />
					<label htmlFor="macdinh3">Giờ đánh giá cao nhất</label>
				</div>
				<div className="my-1 flex">
					<input className="mr-2" name="change" id="macdinh4" type="radio" />
					<label htmlFor="macdinh4">Giờ tăng dần</label>
				</div>
				<div className="my-1 flex">
					<input className="mr-2" name="change" id="macdinh5" type="radio" />
					<label htmlFor="macdinh5">Giờ giảm dần</label>
				</div>
			</form>
		</div>
	);
}
export default Sort;
