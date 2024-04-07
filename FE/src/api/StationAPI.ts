import instance from './instance';

export const getAllStations = async () => {
	const res = await instance.get('/stations');
	return res.data;
};

export const getAllStationsAdmin = async () => {
	const res = await instance.get('/stations/admin');
	return res.data;
};

export const getStationsById = async (id: string) => {
	const res = await instance.get(`/stations/${id}`);
	return res.data;
};
