import Joi from "joi";

export const busHoseCreateSchema = Joi.object({
   name: Joi.string().required().messages({
      "string.empty": "Name is not null.",
      "any.required": "Name is required.",
   }),
   address: Joi.string().required().messages({
      "string.empty": "Address is not null.",
      "any.required": "Address is required.",
   }),
   phone: Joi.string().required().messages({
      "string.empty": "Phone is not null.",
      "any.required": "Phone is required.",
   }),
});

export const busHoseUpdateSchema = Joi.object({
   name: Joi.string(),
   address: Joi.string().required().messages({
      "string.empty": "Address is not null.",
      "any.required": "Address is required.",
   }),
   phone: Joi.string().required().messages({
      "string.empty": "Phone is not null.",
      "any.required": "Phone is required.",
   }),
});
