import { stationSchema } from "../schema/StationSchema";
import Station from "../models/station";

export const getAllStation = async (req, res) => {
   try {
      const provinces = await Station.distinct('province');
      return res.status(200).json({ provinces });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export const getAllStationAdmin = async (req, res) => {
   try {
      const stations = await Station.find();
      return res.status(200).json({ stations });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export const getStationById = async (req, res) => {
   try {
      const stations = await Station.findById(req.params.id);
      return res.status(200).json({ stations });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export const createStation = async (req, res) => {
   try {
      const { name, province } = req.body;

      const { error } = await stationSchema.validate(req.body, { abortEarly: false });
      if (error) {
         const message = error.details.map(e => e.message);
         return res.status(400).json({ message });
      }

      const exitsNameAndProvince = await Station.find({ name, province });
      if (exitsNameAndProvince.length > 0) {
         return res.status(400).json({ message: "Name and province is exits." })
      }

      const station = await Station.create({ name, province });
      return res.status(201).json({ message: "Create station success", station });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}


export const updateStationById = async (req, res) => {
   try {
      const { name, province } = req.body;

      const { error } = await stationSchema.validate(req.body, { abortEarly: false });
      if (error) {
         const message = error.details.map(e => e.message);
         return res.status(400).json({ message });
      }

      const exitsNameAndProvince = await Station.find({ name, province });
      if (exitsNameAndProvince.length > 0) {
         return res.status(400).json({ message: "Name and province is exits." })
      }

      const station = await Station.findByIdAndUpdate(req.params.id, { name, province }, { new: true });
      return res.status(201).json({ message: "Update station success", station });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export const deleteStationById = async (req, res) => {
   try {
      const stations = await Station.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: "Delete station success", stations });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}