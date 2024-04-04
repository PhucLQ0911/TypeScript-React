import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";
import User from "../models/user";
import { signinSchema, signupSchema } from "../schema/UserSchema";

export const signup = async (req, res) => {
   try {
      const { email, password } = req.body;
      //validate
      const { error } = await signupSchema.validate(req.body, { abortEarly: false });
      if (error) {
         const message = error.details.map((e) => e.message);
         return res.status(400).json({ message });
      }
      //Check email exits
      const emailExits = await User.findOne({ email });
      if (emailExits) {
         return res.status(400).json({ message: "Email exits" })
      }

      //Ma hoa mat khau
      const hashPassword = await bcryptjs.hash(password, 10);
      const role = (await User.countDocuments({})) === 0 ? "admin" : "user";

      //Luu
      const user = await User.create({
         ...req.body,
         password: hashPassword,
         role
      }
      );

      user.password = undefined;
      return res.status(201).json({ message: "Create user success", user });

   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export const signin = async (req, res) => {
   try {
      const { email, password } = req.body;
      const { error } = signinSchema.validate(req.body, { abortEarly: false });

      if (error) {
         const message = error.details.map((e) => e.message);
         return res.status(400).json({ message });
      }

      const user = await User.findOne({ email });
      if (!user) {
         return res.status(400).json({ message: "Email not exits." });
      }

      const isMachPassword = await bcryptjs.compare(password, user.password);
      if (!isMachPassword) {
         return res.status(400).json({ message: "Password is wrong." });
      }
      const token = await jwt.sign({ _id: user._id }, "123456");
      return res.status(200).json({ message: "Login success", token });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}