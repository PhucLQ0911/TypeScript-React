import mongoose, { Schema } from "mongoose";

const busHoseSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
         unique: true
      },
      address: {
         type: String,
         required: true
      },
      phone: {
         type: String,
         required: true
      }
   },
   { timestamps: true, versionKey: false }
);

export default mongoose.model("BusHouse", busHoseSchema);