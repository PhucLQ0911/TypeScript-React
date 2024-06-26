import { Router } from "express";
import { getAllStation, getStationById, createStation, updateStationById, deleteStationById, getAllStationAdmin } from "../controllers/StationController";

const router = Router();

router.get("/stations", getAllStation);
router.get("/stations/admin", getAllStationAdmin);
router.get("/stations/:id", getStationById);
router.post("/stations", createStation);
router.put("/stations/:id", updateStationById);
router.delete("/stations/:id", deleteStationById);

export default router;