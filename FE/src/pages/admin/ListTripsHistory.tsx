import { useEffect, useState } from 'react';
import instance from '../../api/instance';
import Detail from '../../components/admin/Detail';
import { ITrip } from '../../interface/ITrip';

const ListTripHistory = () => {
	const [trips, setTrips] = useState<ITrip[]>([]);
	const getAllTrip = async () => {
		try {
			const res = await instance.get('/trips/history/admin');
			setTrips(res.data.tripsData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllTrip();
	}, []);

	return (
		<>
			<Detail trips={trips} isAction={false} />
		</>
	);
};
export default ListTripHistory;
