import joi from "joi";

export const adminLoginSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});
