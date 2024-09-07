import joi from "joi";

export const updateInventorySchema = joi.object({
  product_id: joi.string().required(),
  quantity: joi.number().required(),
  transaction_type: joi.string().required(),
  date: joi.date().required(),
});
