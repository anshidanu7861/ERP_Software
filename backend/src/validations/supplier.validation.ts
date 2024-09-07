import joi from "joi";

export const addSuppliersSchema = joi.object({
  name: joi.string().required(),
  phone: joi.string().required(),
  address: joi.string().required(),
  email: joi.string().required(),
  country: joi.string().required(),
  state: joi.string().required(),
  city: joi.string().required(),
});

export const updateSupplierSchema = joi.object({
  name: joi.string(),
  phone: joi.string(),
  address: joi.string(),
  email: joi.string(),
  country: joi.string(),
  state: joi.string(),
  city: joi.string(),
});
