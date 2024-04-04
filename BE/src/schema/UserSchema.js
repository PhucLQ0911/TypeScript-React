import Joi from "joi";

export const signupSchema = Joi.object({
   name: Joi.string(),
   email: Joi.string().email().required().messages({
      "string.email": "Please enter a valid email",
      "any.required": "Email is required",
      "string.empty": "Email is not null"
   }),
   password: Joi.string().min(6).required().messages({
      "string.min": "Password is too short. Please enter more than 6 characters",
      "any.required": "Password is required",
      "string.empty": "Password is not null"
   }),
   confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
      "any.only": "Confirm password must match password",
      "any.required": "Confirm password is required",
      "string.empty": "Confirm password is not null"
   }),
   role: Joi.string().valid("admin", "user").messages({
      "string.valid": "Role must be 'admin' or 'user'",
   })
});


export const signinSchema = Joi.object({
   email: Joi.string().email().required().messages({
      "string.email": "Please enter a valid email",
      "any.required": "Email is required",
      "string.empty": "Email is not null"
   }),
   password: Joi.string().min(6).required().messages({
      "string.min": "Password is too short. Please enter more than 6 characters",
      "any.required": "Password is required",
      "string.empty": "Password is not null"
   })
})