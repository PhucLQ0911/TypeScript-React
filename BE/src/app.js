import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { connectDB } from "./config/db";
import AuthRouter from "./routers/UserRouter";
import StationRouter from "./routers/StationRouter"
import BusHouseRouter from "./routers/BusHouseRouter"
import TripRouter from "./routers/TripRouter"

const app = express();
dotenv.config();

//Connect to DB
connectDB(process.env.DB);

//Middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

//Router
app.use("/api/v1", AuthRouter);
app.use("/api/v1", StationRouter);
app.use("/api/v1", BusHouseRouter);
app.use("/api/v1", TripRouter);

export const viteNodeApp = app;