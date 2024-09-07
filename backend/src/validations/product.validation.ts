import joi from "joi";

export const AddProductSchema = joi.object({
  name: joi.string().required(),
  description: joi.string(),
  price: joi.number().required(),
  stock_level: joi.number().required(),
  supplier_id: joi.string().required(),
});

export const UpdateProductSchema = joi.object({
  name: joi.string(),
  description: joi.string(),
  price: joi.number(),
  stock_level: joi.number(),
  supplier_id: joi.string(),
});
