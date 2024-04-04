import instance from './instance';

export const getAllBusHose = async () => {
	const response = await instance.get('/bushouse');
	return response.data;
};
