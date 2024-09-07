import { SupplierControllerType } from "./type";
import { BadRequestErr } from "../../lib/errors/badRequestErr";
import {
  saveSupplier,
  findSupplierByEmail,
  findAllSuppliers,
  findSupplierById,
  updateSupplier,
  suppliersCount,
  deleteSupplier,
} from "../../helpers/SupplierHelper";
import { ERROR_MESSAGES } from "../../utils/constants";
import { isValidObjectId } from "mongoose";

const {
  DUPLICATE_USER,
  INVALID_ID,
  SUPPLIER_NOT_FOUND,
  UPDATE_FAILED,
  NOT_DELETED,
} = ERROR_MESSAGES;

export const SupplierController = () =>
  ({
    addSuppliers: async (body) => {
      try {
        const findExistSupplier = await findSupplierByEmail(body.email);
        if (findExistSupplier) {
          throw new BadRequestErr(DUPLICATE_USER);
        }
        const newSupplier = await saveSupplier(body);
        return newSupplier;
      } catch (error) {
        throw error;
      }
    },
    getAllSuppliers: async (query) => {
      try {
        const { limit, skip, name } = query;

        const filters: any = {};

        if (name && name !== "") {
          filters.$or = [{ name: { $regex: name, $options: "i" } }];
        }

        const response = await findAllSuppliers(
          filters,
          Number(limit),
          Number(skip)
        );

        const totalSuppliers = await suppliersCount(filters);

        return {
          response,
          totalSuppliers,
        };
      } catch (error) {
        throw error;
      }
    },
    getSingleSupplier: async (supplierId) => {
      try {
        if (!isValidObjectId(supplierId)) {
          throw new BadRequestErr(INVALID_ID);
        }
        const response = await findSupplierById(supplierId);

        if (!response) {
          throw new BadRequestErr(SUPPLIER_NOT_FOUND);
        }

        return { response };
      } catch (error) {
        throw error;
      }
    },
    updateSupplier: async (body, supplierId) => {
      try {
        if (!isValidObjectId(supplierId)) {
          throw new BadRequestErr(INVALID_ID);
        }

        const response = await updateSupplier(body, supplierId);

        if (!response) {
          throw new BadRequestErr(UPDATE_FAILED);
        }

        return { message: "successfully updated" };
      } catch (error) {
        throw error;
      }
    },
    deleteSuppliers: async (supplierId) => {
      try {
        if (!isValidObjectId(supplierId)) {
          throw new BadRequestErr(INVALID_ID);
        }
        const response = await deleteSupplier(supplierId);

        if (!response) {
          throw new BadRequestErr(NOT_DELETED);
        }

        return { message: "successfully deleted" };
      } catch (error) {
        throw error;
      }
    },
  } as SupplierControllerType);
