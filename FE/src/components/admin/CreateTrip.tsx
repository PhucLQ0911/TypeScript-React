import { useForm } from 'react-hook-form';
import { ITrip } from '../../interface/ITrip';
import { IStations } from '../../interface/IStation';
import { IBusHouse } from '../../interface/IBusHose';
import moment from 'moment';

const CreateTripComponent = (props: {
	stations: IStations[];
	busHouse: IBusHouse[];
	onSubmit: (data: ITrip) => void;
}) => {
	const { register, handleSubmit } = useForm<ITrip>();

	return (
		<>
			<div className="bg-gray-200 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
					<form onSubmit={handleSubmit(props.onSubmit)} className="space-y-4">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div>
								<label
									htmlFor="HeadlineAct"
									className="block text-sm font-medium text-gray-900"
								>
									From station
								</label>

								<select
									{...register('fromStationId')}
									name="fromStationId"
									id="fromStationId"
									className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
								>
									{props.stations?.map((station, index: number) => (
										<option key={index} value={station._id}>
											{station.name}
											{' - '}
											{station.province}
										</option>
									))}
								</select>
							</div>

							<div>
								<label
									htmlFor="HeadlineAct"
									className="block text-sm font-medium text-gray-900"
								>
									To station
								</label>

								<select
									{...register('toStationId')}
									name="toStationId"
									id="toStationId"
									className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
								>
									{props.stations?.map((station, index: number) => (
										<option key={index} value={station._id}>
											{station.name}
											{' - '}
											{station.province}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div>
								<label
									htmlFor="HeadlineAct"
									className="block text-sm font-medium text-gray-900"
								>
									Start time
								</label>
								<input
									{...register('startTime')}
									className="w-full rounded-lg border-gray-200 p-3 text-sm"
									type="date"
									min={moment().format('YYYY-MM-DD')}
								/>
							</div>

							<div>
								<label
									htmlFor="HeadlineAct"
									className="block text-sm font-medium text-gray-900"
								>
									Start hours
								</label>
								<input
									{...register('startHours')}
									className="w-full rounded-lg border-gray-200 p-3 text-sm"
									type="time"
								/>
							</div>
						</div>

						<div className="grid grid-cols-3 gap-3">
							<div>
								<label
									htmlFor="HeadlineAct"
									className="block text-sm font-medium text-gray-900"
								>
									Seats
								</label>
								<input
									{...register('seats')}
									className="w-full rounded-lg border-gray-200 p-3 text-sm"
									type="number"
									placeholder="Số ghế ngồi"
								/>
							</div>

							<div>
								<label
									htmlFor="HeadlineAct"
									className="block text-sm font-medium text-gray-900"
								>
									Price
								</label>
								<input
									{...register('price')}
									className="w-full rounded-lg border-gray-200 p-3 text-sm"
									type="number"
									placeholder="Giá tiền"
								/>
							</div>

							<div>
								<label
									htmlFor="HeadlineAct"
									className="block text-sm font-medium text-gray-900"
								>
									Bus House
								</label>

								<select
									{...register('busHouseId')}
									name="busHouseId"
									id="busHouseId"
									className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
								>
									{props.busHouse.map((b, index: number) => (
										<option key={index} value={b._id}>
											{b.name}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="mt-4">
							<button
								type="submit"
								className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
							>
								Tạo chuyến
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default CreateTripComponent;
