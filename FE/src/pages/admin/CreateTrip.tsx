/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { getAllStationsAdmin } from '../../api/StationAPI';
import CreateTripComponent from '../../components/admin/CreateTrip';
import { IStations } from '../../interface/IStation';
import { IBusHouse } from '../../interface/IBusHose';
import { getAllBusHose } from '../../api/BusHoseAPI';
import { ITrip } from '../../interface/ITrip';
import { createTrip } from '../../api/Trip';
import { ToastContainer, toast } from 'react-toastify';

const CreateTrip = () => {
	const [stations, setStations] = useState<IStations[]>([]);
	const [busHouse, setBusHouse] = useState<IBusHouse[]>([]);

	const getStations = async () => {
		const res = await getAllStationsAdmin();
		setStations(res.stations);
	};
	const getBusHouse = async () => {
		const res = await getAllBusHose();
		setBusHouse(res.busHouses);
	};

	useEffect(() => {
		getStations();
		getBusHouse();
	}, []);

	const onSubmit = async (trip: ITrip) => {
		try {
			await createTrip(trip);
			toast.success('Create trip success!');
		} catch (error: any) {
			if (Array.isArray(error.response.data.message)) {
				toast.error(error.response.data.message[0]);
			} else {
				toast.error(error.response.data.message);
			}
		}
	};

	return (
		<div>
			<CreateTripComponent
				stations={stations}
				busHouse={busHouse}
				onSubmit={onSubmit}
			/>
			<ToastContainer />
		</div>
	);
};
export default CreateTrip;
