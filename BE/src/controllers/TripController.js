import { tripCreateSchema } from "../schema/TripSchema";
import Trip from "../models/trip";
import Station from "../models/station";

export const getAllTrips = async (req, res) => {
   try {

      if (!req.query.fromStation) {
         return res.status(400).json({ message: "Please choose from station." })
      }
      if (!req.query.toStation) {
         return res.status(400).json({ message: "Please choose to station." })
      }
      if (!req.query.startTime) {
         return res.status(400).json({ message: "Please choose start time." })
      }

      const current = new Date();
      const dateStart = new Date(req.query.startTime);

      if (current.toDateString() === dateStart.toDateString()) {
         dateStart.setHours(current.getHours() + 1, current.getMinutes(), 0, 0);
      } else {
         dateStart.setHours(0, 0, 0, 0);
      }

      const nextDay = new Date(dateStart);
      nextDay.setDate(nextDay.getDate() + 1);

      if (req.query.fromStation === req.query.toStation) {
         return res.status(400).json({ message: "From station and to station must be different." })
      }

      const fromStationData = await Station.find({ province: req.query.fromStation });
      const fromStationIds = fromStationData.map(station => station._id);

      const toStationData = await Station.find({ province: req.query.toStation });
      const toStationIds = toStationData.map(station => station._id);


      const trips = await Trip.find({
         startTime: {
            $gte: dateStart,
            $lte: nextDay
         },
         fromStationId: { $in: fromStationIds },
         toStationId: { $in: toStationIds }
      })
         .populate("fromStationId")
         .populate("toStationId")
         .populate("busHouseId")
         .sort({ startTime: 1 });


      const tripsData = trips.map(item => ({
         _id: item._id,
         fromStationName: item.fromStationId.name,
         fromStationProvince: item.fromStationId.province,
         toStationName: item.toStationId.name,
         toStationProvince: item.toStationId.province,
         startTime: item.startTime,
         startHours: item.startHours,
         seats: item.seats,
         price: item.price,
         busHouseName: item.busHouseId.name,
         busHouseAddress: item.busHouseId.address,
         busHousePhone: item.busHouseId.phone,
      }));

      return res.status(200).json({ tripsData });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export const getAllTripsAdmin = async (req, res) => {
   try {
      const now = new Date();

      const trips = await Trip.find({
         startTime: { $gte: now }
      })
         .populate("fromStationId")
         .populate("toStationId")
         .populate("busHouseId")
         .sort({ startTime: 1 });

      const tripsData = trips.map(item => ({
         _id: item._id,
         fromStationName: item.fromStationId.name,
         fromStationProvince: item.fromStationId.province,
         toStationName: item.toStationId.name,
         toStationProvince: item.toStationId.province,
         startTime: item.startTime,
         startHours: item.startHours,
         seats: item.seats,
         price: item.price,
         busHouseName: item.busHouseId.name,
         busHouseAddress: item.busHouseId.address,
         busHousePhone: item.busHouseId.phone,
      }));

      return res.status(200).json({ tripsData });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }


}

export const getAllTripsHistoryAdmin = async (req, res) => {
   try {
      const now = new Date();

      const trips = await Trip.find({
         startTime: { $lt: now }
      })
         .populate("fromStationId")
         .populate("toStationId")
         .populate("busHouseId")
         .sort({ startTime: 1 });

      const tripsData = trips.map(item => ({
         _id: item._id,
         fromStationName: item.fromStationId.name,
         fromStationProvince: item.fromStationId.province,
         toStationName: item.toStationId.name,
         toStationProvince: item.toStationId.province,
         startTime: item.startTime,
         startHours: item.startHours,
         seats: item.seats,
         price: item.price,
         busHouseName: item.busHouseId.name,
         busHouseAddress: item.busHouseId.address,
         busHousePhone: item.busHouseId.phone,
      }));

      return res.status(200).json({ tripsData });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export const getTripById = async (req, res) => {
   try {
      const trip = await Trip.findById(req.params.id)
         .populate("fromStationId")
         .populate("toStationId")
         .populate("busHouseId")

      const tripData = {
         _id: trip._id,
         fromStationId: trip.fromStationId._id,
         fromStationName: trip.fromStationId.name,
         fromStationProvince: trip.fromStationId.province,
         toStationId: trip.toStationId._id,
         toStationName: trip.toStationId.name,
         toStationProvince: trip.toStationId.province,
         startTime: trip.startTime,
         startHours: trip.startHours,
         seats: trip.seats,
         price: trip.price,
         busHouseId: trip.busHouseId._id,
         busHouseName: trip.busHouseId.name,
         busHouseAddress: trip.busHouseId.address,
         busHousePhone: trip.busHouseId.phone,
      };

      return res.status(200).json({ tripData });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export const createTrip = async (req, res) => {
   try {
      const { fromStationId, toStationId, startTime, startHours } = req.body;

      const { error } = await tripCreateSchema.validate(req.body, { abortEarly: false });
      if (error) {
         const message = error.details.map((e) => e.message);
         return res.status(400).json({ message });
      }

      if (fromStationId == toStationId) {
         return res.status(400).json({
            message: "From station and to station must be different."
         });
      }

      const startTimeDate = new Date(`${startTime}T${startHours}:00`);

      if (isNaN(startTimeDate.getTime())) {
         return res.status(400).json({ message: "Start time must be greater than now." });
      }

      const current = new Date();

      const currentDate = new Date(current.getFullYear(), current.getMonth(), current.getDate(), current.getHours(), current.getMinutes());

      let twoHours = 2 * 60 * 60 * 1000;
      if (current.getMinutes() > 30) {
         twoHours = 1.5 * 60 * 60 * 1000;
      }

      if (startTimeDate.getTime() < currentDate.getTime()) {
         return res.status(400).json({ message: "Start hours must be greater than now." });
      } else if (startTimeDate.getTime() - currentDate.getTime() < twoHours) {
         return res.status(400).json({ message: "Start hours must be greater than 1 hour 30 minutes from now." });
      }

      const trip = await Trip.create({
         ...req.body,
         startTime: startTimeDate,
      });
      return res.status(201).json({ trip });

   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export const updateTrip = async (req, res) => {
   try {
      const { fromStationId, toStationId, startTime, startHours } = req.body;

      const { error } = await tripCreateSchema.validate(req.body, { abortEarly: false });
      if (error) {
         const message = error.details.map((e) => e.message);
         return res.status(400).json({ message });
      }

      const startTimeDate = new Date(`${startTime}T${startHours}:00`);

      const trip = await Trip.findByIdAndUpdate(
         req.params.id,
         {
            ...req.body,
            startTime: startTimeDate
         },
         { new: true });
      return res.status(201).json({ message: "Update trip successs", trip });

   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export const deleteTrip = async (req, res) => {
   try {
      const trip = await Trip.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: "Delete success", trip })
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}