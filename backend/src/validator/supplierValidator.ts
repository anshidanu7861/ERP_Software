import { BadRequestErr } from "../lib/errors/badRequestErr";
import {
  addSuppliersType,
  updateSupplierType,
} from "../types/products/supplier.types";
import {
  addSuppliersSchema,
  updateSupplierSchema,
} from "../validations/supplier.validation";

export const addSupplierValidator = (body: addSuppliersType) => {
  const { error, value } = addSuppliersSchema.validate(body);

  if (error) {
    throw new BadRequestErr(error.message);
  } else {
    return Promise.resolve();
  }
};

export const updateSupplierValidato = (body: updateSupplierType) => {
  const { error, value } = updateSupplierSchema.validate(body);

  if (error) {
    throw new BadRequestErr(error.message);
  } else {
    return Promise.resolve();
  }
};
