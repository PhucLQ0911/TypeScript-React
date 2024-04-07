import { ITrip } from '../interface/ITrip';
import instance from './instance';

export const getAllTrip = async (params: string) => {
	const res = await instance.get(`/trips?${params}`);
	return res.data;
};

export const getTripById = async (id: string) => {
	const res = await instance.get(`/trips/${id}`);
	return res.data;
};

export const createTrip = async (trip: ITrip) => {
	const res = await instance.post('trips', trip);
	return res.data;
};

export const updateTripById = async (id: string, trip: ITrip) => {
	const res = await instance.put(`/trips/${id}`, trip);
	return res.data;
};

export const deleteTripById = async (id: string) => {
	const res = await instance.delete(`/trips/${id}`);
	return res.data;
};
