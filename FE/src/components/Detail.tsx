import { ITrip } from '../interface/ITrip';

function Detail(props: { trip: ITrip }) {
	return (
		<div className="flex justify-between py-8 pl-5 pr-5 bg-white rounded-lg">
			<div className="flex">
				<div className="mr-5">
					<img src="../../images/AnhChuyeNDi.png" />
				</div>
				<div>
					<p className="font-semibold text-base">{props.trip.busHouseName}</p>
					<div className="flex mt-16">
						<div className="flex">
							<p className="font-semibold text-base mr-3">
								{props.trip.startHours}
							</p>
						</div>
					</div>
					<div className="flex flex-col">
						<p>
							{props.trip.fromStationName} - {props.trip.fromStationProvince}
						</p>
						<p>
							{props.trip.toStationName} - {props.trip.toStationProvince}
						</p>
					</div>
				</div>
			</div>
			<div className="ml-4">
				<div>
					<p className="font-semibold text-xl text-sky-500">Từ {props.trip.price}đ</p>
				</div>

				<div className='mt-2'>
					<p className="text-sm font-normal ml-10">Còn {props.trip.seats} chỗ</p>
				</div>
				<div>
					<button className="w-28 bg-yellow-500 my-5 h-9 text-center text-sm font-medium">
						Chọn chuyến
					</button>
				</div>
			</div>
		</div>
	);
}
export default Detail;
