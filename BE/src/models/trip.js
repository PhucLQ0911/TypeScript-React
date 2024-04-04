import mongoose, { Schema } from "mongoose";

const tripSchema = new Schema(
   {
      fromStationId: {
         type: Schema.Types.ObjectId,
         ref: "Station",
         required: true,
      },
      toStationId: {
         type: Schema.Types.ObjectId,
         ref: "Station",
         required: true,
      },
      startTime: {
         type: Date,
         required: true
      },
      startHours: {
         type: String,
      },
      seats: {
         type: Number,
         required: true,
         min: 0
      },
      price: {
         type: Number,
         required: true,
         min: 0
      },
      busHouseId: {
         type: Schema.Types.ObjectId,
         ref: "BusHouse",
         required: true
      }
   },
   { versionKey: false, timestamps: true }
);

export default mongoose.model("Trip", tripSchema);