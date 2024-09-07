import { BadRequestErr } from "../lib/errors/badRequestErr";
import {
  addProductTypes,
  updateProductType,
} from "../types/products/product.types";
import {
  AddProductSchema,
  UpdateProductSchema,
} from "../validations/product.validation";

export const addProductValidator = (body: addProductTypes) => {
  const { error, value } = AddProductSchema.validate(body);

  if (error) {
    throw new BadRequestErr(error.message);
  } else {
    return Promise.resolve();
  }
};

export const updateProductValidator = (body: updateProductType) => {
  const { error, value } = UpdateProductSchema.validate(body);

  if (error) {
    throw new BadRequestErr(error.message);
  } else {
    return Promise.resolve();
  }
};
