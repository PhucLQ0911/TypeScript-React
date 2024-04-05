/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { getAllStations } from '../api/StationAPI';
import { getAllTrip } from '../api/Trip';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ListDetail from '../components/ListDetail';
import { ITrip } from '../interface/ITrip';

import { toast, ToastContainer } from 'react-toastify';

function About() {
	const [provinces, setProvinces] = useState<string[]>([]);
	const [trips, setTrips] = useState<ITrip[]>([]);
	const getStation = async () => {
		const res = await getAllStations();
		setProvinces(res.provinces);
	};

	useEffect(() => {
		getStation();
	}, []);

	const handleSearch = async (query: string) => {
		try {
			const res = await getAllTrip(query);
			setTrips(res.tripsData);
		} catch (error: any) {
			toast.error(error.response.data.message);
		}
	};

	return (
		<>
			<Header />
			<ToastContainer />
			<div className="bg-[#F2F2F2]">
				<ListDetail
					provinces={provinces}
					onSearch={handleSearch}
					trips={trips}
				/>
			</div>
			<Footer />
		</>
	);
}
export default About;
