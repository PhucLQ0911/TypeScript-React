import BusHouse from "../models/busHouse";
import { busHoseCreateSchema, busHoseUpdateSchema } from "../schema/BusHoseSchema";

export const getAllBusHose = async (req, res) => {
   try {
      const busHouses = await BusHouse.find();
      return res.status(200).json({ busHouses });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export const getBusHoseById = async (req, res) => {
   try {
      const busHoses = await BusHouse.findById(req.params.id);
      return res.status(200).json({ busHoses });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export const createBusHose = async (req, res) => {
   try {
      const { name } = req.body;

      const { error } = await busHoseCreateSchema.validate(req.body, { abortEarly: false });
      if (error) {
         const message = error.details.map(e => e.message);
         return res.status(400).json({ message });
      }

      const exitsName = await BusHouse.find({ name });
      if (exitsName.length > 0) {
         return res.status(400).json({ message: "Name is exits." });
      }

      const busHouse = await BusHouse.create(req.body);
      return res.status(201).json({ message: "Create bus house success.", busHouse });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export const updateBusHoseById = async (req, res) => {
   try {

      const { name, address, phone } = req.body;

      const { error } = await busHoseUpdateSchema.validate(req.body, { abortEarly: false });
      if (error) {
         const message = error.details.map(e => e.message);
         return res.status(400).json({ message });
      }

      const exitsName = await BusHouse.find({ name });
      if (exitsName.length > 0) {
         return res.status(400).json({ message: "Name is exits." });
      }

      const busHouse = await BusHouse.findByIdAndUpdate(req.params.id, { name, address, phone }, { new: true });
      return res.status(201).json({ message: "Update bus house success.", busHouse });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}


export const deleteBusHoseById = async (req, res) => {
   try {
      const busHoses = await BusHouse.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: "Delete bus house success.", busHoses });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}
