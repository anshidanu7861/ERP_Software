import { BadRequestErr } from "../lib/errors/badRequestErr";
import { adminLoginType } from "../types/products/admin.types";
import { adminLoginSchema } from "../validations/admin.validation";

export const adminLoginValidator = (body: adminLoginType) => {
  const { error, value } = adminLoginSchema.validate(body);

  if (error) {
    throw new BadRequestErr(error.message);
  } else {
    return Promise.resolve();
  }
};
