import mongoose from "mongoose";

export const connectDB = async (uri) => {
   try {
      await mongoose.connect(uri);
      console.log("Connect Success");
   } catch (error) {
      console.log("Connect Fail. ", error);
   }
}