import moment from 'moment';
import { SubmitHandler, useForm } from 'react-hook-form';

type SearchForm = {
	toStation: string;
	fromStation: string;
	startTime: string;
};

function SearchDetail(props: {
	provinces: string[];
	onSearch: (query: string) => void;
}) {
	const { register, handleSubmit } = useForm<SearchForm>();
	const onSubmit: SubmitHandler<SearchForm> = async (data) => {
		const query = new URLSearchParams(data);
		props.onSearch(query.toString());
	};

	return (
		<div className="content mx-80 py-10">
			<div className=" bg-white rounded-md">
				<div className="flex items-center justify-center">
					<div className="flex my-2 mx-4 banner-services-item">
						<img className="mr-2" src="../../images/XeKhach.svg" />
						<p>Xe khách</p>
					</div>
					<div className="flex my-2 mx-4 banner-services-item">
						<img className="mr-2" src="../../images/MayBay.svg" />
						<p>Máy bay</p>
					</div>
					<div className="flex my-2 mx-4 banner-services-item">
						<img className="mr-2" src="../../images/TauHoa.svg" />
						<p>Tàu hỏa</p>
					</div>
				</div>
				<hr />
				<form className="flex" onSubmit={handleSubmit(onSubmit)}>
					<div className="flex w-10/12 items-center justify-between m-5 rounded-md border border-text-slate-300-600">
						<div className="flex my-1 items-center">
							<div className="m-2">
								<img src="../../images/pickup.svg" />
							</div>
							<div>
								<div className="border-spacing-0">
									<label className="block text-gray-900 text-left">
										Nơi xuất phát
									</label>
									<select
										{...register('fromStation')}
										name="fromStation"
										id="fromStation"
										className="mt-1.5 w-full text-gray-700"
									>
										<option value={1}>Chọn điểm đi</option>
										{props.provinces?.map((province, index: number) => (
											<option key={index} value={province}>
												{province}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>

						<div className="flex my-1 items-center">
							<div className="m-2">
								<img src="../../images/dropoff.svg" />
							</div>
							<div>
								<div className="border-spacing-0">
									<label className="block text-gray-900 text-left">
										Nơi đến
									</label>
									<select
										{...register('toStation')}
										name="toStation"
										id="toStation"
										className="mt-1.5 w-full text-gray-700"
									>
										<option>Chọn điểm đến</option>
										{props.provinces?.map((province, index: number) => (
											<option key={index} value={province}>
												{province}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>

						<div className="flex my-1 items-center">
							<div className="m-2">
								<img src="../../images/event.svg" />
							</div>
							<div>
								<div className="border-spacing-0">
									<label className="block text-gray-900 text-left">
										Ngày đi
									</label>
									<input
										{...register('startTime')}
										type="date"
										min={moment().format('YYYY-MM-DD')}
									/>
								</div>
							</div>
						</div>
					</div>
					<div>
						<button
							className="w-36 bg-yellow-400 h-14 my-5 mr-4 text-center rounded-md font-medium"
							type="submit"
						>
							Tìm kiếm
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
export default SearchDetail;
