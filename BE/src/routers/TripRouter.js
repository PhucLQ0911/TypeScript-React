import { Router } from "express";
import { createTrip, deleteTrip, getAllTrips, getAllTripsAdmin, getAllTripsHistoryAdmin, getTripById, updateTrip } from "../controllers/TripController";

const router = Router();

router.get("/trips", getAllTrips);
router.get("/trips/admin", getAllTripsAdmin);
router.get("/trips/history/admin", getAllTripsHistoryAdmin);
router.get("/trips/:id", getTripById);
router.post("/trips", createTrip);
router.put("/trips/:id", updateTrip);
router.delete("/trips/:id", deleteTrip);

export default router;