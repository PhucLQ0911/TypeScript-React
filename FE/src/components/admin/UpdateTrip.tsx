import moment from 'moment';
import { ITrip } from '../../interface/ITrip';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const UpdateTripComponent = (props: {
	trip: ITrip | undefined;
	onUpdate: (data: ITrip) => void;
}) => {
	const { register, handleSubmit, setValue } = useForm<ITrip>();

	useEffect(() => {
		if (props.trip) {
			setValue('fromStationId', props.trip.fromStationId);
			setValue('toStationId', props.trip.toStationId);
			setValue('startTime', moment(props.trip.startTime).format('YYYY-MM-DD'));
			setValue('startHours', props.trip.startHours);
			setValue('seats', props.trip.seats);
			setValue('price', props.trip.price);
			setValue('busHouseId', props.trip.busHouseId);
		}
	}, [props.trip, setValue]);

	return (
		<>
			<div className="bg-gray-200 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
					<form onSubmit={handleSubmit(props.onUpdate)} className="space-y-4">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div>
								<label
									htmlFor="HeadlineAct"
									className="block text-sm font-medium text-gray-900"
								>
									From station
								</label>

								<select
									disabled
									{...register('fromStationId')}
									name="fromStationId"
									id="fromStationId"
									className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
								>
									<option value={props.trip?.fromStationId}>
										{props.trip?.fromStationName}
										{' - '}
										{props.trip?.fromStationProvince}
									</option>
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
									disabled
									{...register('toStationId')}
									name="toStationId"
									id="toStationId"
									className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
								>
									<option value={props.trip?.toStationId}>
										{props.trip?.toStationName}
										{' - '}
										{props.trip?.toStationProvince}
									</option>
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
									disabled
									{...register('startTime')}
									className="w-full rounded-lg border-gray-200 p-3 text-sm"
									type="date"
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
									disabled
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
									disabled
									{...register('busHouseId')}
									name="busHouseId"
									id="busHouseId"
									className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
								>
									<option value={props.trip?.busHouseId}>
										{props.trip?.busHouseName}
									</option>
								</select>
							</div>
						</div>

						<div className="mt-4">
							<button
								type="submit"
								className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
							>
								Cập nhật chuyến
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default UpdateTripComponent;
