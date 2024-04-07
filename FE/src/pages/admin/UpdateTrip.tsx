/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getTripById, updateTripById } from '../../api/Trip';
import UpdateTripComponent from '../../components/admin/UpdateTrip';
import { ITrip } from '../../interface/ITrip';

const UpdateTrip = () => {
	const [trip, setTrip] = useState<ITrip | undefined>(undefined);
	const navigate = useNavigate();
	const { id } = useParams();
	const getTrip = async () => {
		if (typeof id === 'string') {
			try {
				const trip = await getTripById(id);
				setTrip(trip.tripData);
			} catch (error: any) {
				toast.error('Invalid trip');
			}
		} else {
			console.error('ID is undefined');
		}
	};

	useEffect(() => {
		getTrip();
	}, []);

	const onUpdate = async (data: ITrip) => {
		try {
			if (typeof id === 'string') {
				await updateTripById(id, data);
				alert('Update trip success!');
				navigate('/admin/trips');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<UpdateTripComponent trip={trip} onUpdate={onUpdate} />
			<ToastContainer />
		</div>
	);
};
export default UpdateTrip;
