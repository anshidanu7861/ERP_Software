import { BadRequestErr } from "../lib/errors/badRequestErr";
import { updateInvetoryTypes } from "../types/products/inventory.types";
import { updateInventorySchema } from "../validations/inventory.validation";

export const updateInventoryValidator = (body: updateInvetoryTypes) => {
  const { error, value } = updateInventorySchema.validate(body);

  if (error) {
    throw new BadRequestErr(error.message);
  } else {
    return Promise.resolve();
  }
};
