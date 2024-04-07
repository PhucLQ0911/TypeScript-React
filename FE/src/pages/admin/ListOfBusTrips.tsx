import { useEffect, useState } from 'react';
import Detail from '../../components/admin/Detail';
import { ITrip } from '../../interface/ITrip';
import instance from '../../api/instance';
import { Link } from 'react-router-dom';
import { deleteTripById } from '../../api/Trip';
import { ToastContainer, toast } from 'react-toastify';

const ListOfBusTrips = () => {
	const [trips, setTrips] = useState<ITrip[]>([]);
	const getAllTrip = async () => {
		try {
			const res = await instance.get('/trips/admin');
			setTrips(res.data.tripsData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllTrip();
	}, []);

	const onDelete = async (id: string) => {
		const confirm = window.confirm('Bạn có muốn xoá chuyến xe này không ?');
		if (confirm) {
			try {
				await deleteTripById(id);
				setTrips(trips.filter((trip) => trip._id != id));
				toast.success('Xoá thành công!');
			} catch (error) {
				toast.error('Xoá thất bại');
			}
		}
	};

	return (
		<>
			<ToastContainer />
			<div className="mt-5">
				<h1>
					<Link
						to={'add'}
						className="border p-3 bg-blue-600 hover:bg-blue-400 text-white rounded-lg"
					>
						Thêm chuyến xe
					</Link>
				</h1>
				<Detail onDelete={onDelete} trips={trips} isAction={true} />
			</div>
		</>
	);
};
export default ListOfBusTrips;
