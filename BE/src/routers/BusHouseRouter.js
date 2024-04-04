import { Router } from "express";
import { createBusHose, deleteBusHoseById, getAllBusHose, getBusHoseById, updateBusHoseById } from "../controllers/BusHouseController";

const router = Router();

router.get("/bushouse", getAllBusHose);
router.get("/bushouse/:id", getBusHoseById);
router.post("/bushouse", createBusHose);
router.patch("/bushouse/:id", updateBusHoseById);
router.delete("/bushouse/:id", deleteBusHoseById);

export default router;