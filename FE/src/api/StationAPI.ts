import instance from './instance';

export const getAllStations = async () => {
	const res = await instance.get('/stations');
	return res.data;
};
