export interface ITrip {
	_id: string;
	busHouseAddress: string;
	busHouseName: string;
	busHousePhone: string;
	fromStationName: string;
	fromStationProvince: string;
	price: number;
	seats: number;
	startHours: string;
	startTime: Date | string;
	toStationName: string;
	toStationProvince: string;
	toStationId?: string;
	fromStationId?: string;
	busHouseId?: string;
}
