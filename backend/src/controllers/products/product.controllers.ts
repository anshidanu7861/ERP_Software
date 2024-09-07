import { ProductControllerType } from "../../controllers/products/types";
import { BadRequestErr } from "../../lib/errors/badRequestErr";
import {
  saveNewProduct,
  findAllProducts,
  totalProducts,
  sinleProductDetails,
  updateProductDetails,
  deleteProducts,
} from "../../helpers/ProductHelpers";
import { ERROR_MESSAGES } from "../../utils/constants";
import { isValidObjectId } from "mongoose";
import { findSupplierById } from "../../helpers/SupplierHelper";

const {
  PRODUCT_NOT_SAVE,
  INVALID_ID,
  UPDATE_FAILED,
  NOT_DELETED,
  SUPPLIER_NOT_FOUND,
} = ERROR_MESSAGES;

export const ProductController = () =>
  ({
    addProducts: async (body) => {
      try {
        if (!isValidObjectId(body.supplier_id)) {
          throw new BadRequestErr(INVALID_ID);
        }

        const findSupplier = await findSupplierById(body.supplier_id);

        if (!findSupplier) {
          throw new BadRequestErr(SUPPLIER_NOT_FOUND);
        }

        const response = await saveNewProduct(body);

        if (!response) {
          throw new BadRequestErr(PRODUCT_NOT_SAVE);
        }

        return response;
      } catch (err) {
        throw err;
      }
    },
    getAllProducts: async (query) => {
      try {
        const { limit, skip, name } = query;

        const filters: any = {};

        if (name && name !== "") {
          filters.$or = [{ name: { $regex: name, $options: "i" } }];
        }

        const response = await findAllProducts(
          filters,
          Number(limit),
          Number(skip)
        );

        const totalProduct = await totalProducts(filters);

        return {
          response,
          totalProduct,
        };
      } catch (error) {
        throw error;
      }
    },
    getSingleProduct: async (productId) => {
      try {
        if (!isValidObjectId(productId)) {
          throw new BadRequestErr(INVALID_ID);
        }

        const response = await sinleProductDetails(productId);

        return { response };
      } catch (error) {
        throw error;
      }
    },

    updateProduct: async (body, productId) => {
      try {
        if (!isValidObjectId(productId)) {
          throw new BadRequestErr(INVALID_ID);
        }

        const response = await updateProductDetails(body, productId);

        if (!response) {
          throw new BadRequestErr(UPDATE_FAILED);
        }

        return { messaeg: "successfully updated" };
      } catch (error) {
        throw error;
      }
    },
    deleteProduct: async (productId) => {
      try {
        if (!isValidObjectId(productId)) {
          throw new BadRequestErr(INVALID_ID);
        }

        const response = await deleteProducts(productId);

        if (!response) {
          throw new BadRequestErr(NOT_DELETED);
        }

        return { message: "successfully deleted" };
      } catch (error) {
        throw error;
      }
    },
  } as ProductControllerType);
