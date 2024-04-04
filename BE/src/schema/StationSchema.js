import Joi from "joi";

export const stationSchema = Joi.object({
   name: Joi.string().required().messages({
      "string.empty": "Name is not null.",
      "any.required": "Name is required"
   }),
   province: Joi.string().required().messages({
      "string.empty": "Province is not null.",
      "any.required": "Province is required"
   }),
});