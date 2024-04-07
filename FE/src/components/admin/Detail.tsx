import moment from 'moment';
import { ITrip } from '../../interface/ITrip';
import { Link } from 'react-router-dom';

function Detail(props: {
	trips: ITrip[];
	isAction: boolean;
	onDelete: (id: string) => void;
}) {
	return (
		<>
			{props.trips.length == 0 && <h1>Not found trip</h1>}
			{props.trips.length > 0 &&
				props.trips.map((trip, index: number) => {
					return (
						<div
							key={index}
							className="flex justify-between py-8 pl-5 pr-5 bg-white rounded-lg"
						>
							<div className="flex">
								<div className="mr-5">
									<img src="../../images/AnhChuyeNDi.png" />
								</div>
								<div>
									<p className="font-semibold text-base">{trip.busHouseName}</p>
									<div className="flex mt-16">
										<div className="flex">
											<p className="font-semibold text-base mr-3">
												{trip.startHours}
												{' - '}
												{moment(trip.startTime).format('DD-MM-YYYY')}
											</p>
										</div>
									</div>
									<div className="flex flex-col">
										<p>
											{trip.fromStationName} - {trip.fromStationProvince}
										</p>
										<p>
											{trip.toStationName} - {trip.toStationProvince}
										</p>
									</div>
								</div>
							</div>
							<div className="ml-4">
								<div>
									<p className="font-semibold text-xl text-sky-500">
										{trip.price}đ
									</p>
								</div>

								<div className="mt-2">
									<p className="text-sm font-normal ml-10">
										Còn {trip.seats} chỗ
									</p>
								</div>
								<div className="mt-2">
									{props.isAction && (
										<div className="flex flex-col">
											<Link
												to={`update/${trip._id}`}
												className="w-28 px-3 py-2  rounded-xl bg-yellow-500  text-center text-sm font-medium"
											>
												Cập nhật
											</Link>

											<button
												className="text-white w-28 px-3 py-2 rounded-xl bg-red-500 my-2 h-9 text-center text-sm font-medium"
												onClick={() => props.onDelete(trip._id)}
											>
												Xoá
											</button>
										</div>
									)}
								</div>
							</div>
						</div>
					);
				})}
		</>
	);
}
export default Detail;
