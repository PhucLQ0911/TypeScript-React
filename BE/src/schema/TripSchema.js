import Joi from "joi"

export const tripCreateSchema = Joi.object({
   fromStationId: Joi.string().required().messages({
      "any.required": "From station is required.",
      "string.empty": "From station must not be empty."
   }),
   toStationId: Joi.string().required().messages({
      "any.required": "To station is required.",
      "string.empty": "To station must not be empty."
   }),
   startTime: Joi.string().required().messages({
      "any.required": "Start time is required.",
      "string.empty": "Start time must not be empty."
   }),
   startHours: Joi.string().required().messages({
      "any.required": "Start hours is required.",
   }),
   seats: Joi.number().min(0).required().messages({
      "any.required": "Seats is required.",
      "number.min": "Seats must be greater than or equal to 0."
   }),
   price: Joi.number().min(0).required().messages({
      "any.required": "Price is required.",
      "number.min": "Price must be greater than or equal to 0."
   }),
   busHouseId: Joi.string().required().messages({
      "any.required": "Bus house is required.",
      "string.empty": "Bus house must not be empty."
   }),
})