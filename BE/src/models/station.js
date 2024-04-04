import mongoose, { Schema } from "mongoose";

const stationSchema = new Schema(
   {
      name: {
         type: String,
         required: true
      },
      province: {
         type: String,
         required: true
      }
   },
   { timestamps: true, versionKey: false }
);

export default mongoose.model("Station", stationSchema);