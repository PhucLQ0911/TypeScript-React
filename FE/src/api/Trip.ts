import instance from './instance';

export const getAllTrip = async (params: string) => {
	const res = await instance.get(`/trips?${params}`);
	return res.data;
};
