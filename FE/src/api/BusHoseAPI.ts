import instance from './instance';

export const getAllBusHose = async () => {
	const response = await instance.get('/bushouse');
	return response.data;
};

export const getBusHoseById = async (id: string) => {
	const response = await instance.get(`/bushouse/${id}`);
	return response.data;
};
