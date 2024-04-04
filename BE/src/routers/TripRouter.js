import { Router } from "express";
import { createTrip, getAllTrips, getAllTripsAdmin } from "../controllers/TripController";

const router = Router();

router.get("/trips", getAllTrips);
router.get("/trips/admin", getAllTripsAdmin);
router.post("/trips", createTrip);

export default router;