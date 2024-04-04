import mongoose, { Schema } from "mongoose";

export const userSchema = new Schema(
   {
      email: {
         type: String,
         required: true,
         unique: true
      },
      password: {
         type: String,
         required: true,
         minlength: 6
      },
      name: {
         type: String,
      },
      role: {
         type: String,
         enum: ['admin', 'user'],
         default: "user"
      }
   },
   { timestamps: true, versionKey: false }
);

export default mongoose.model("User", userSchema);