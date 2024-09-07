import { BadRequestErr } from "../../lib/errors/badRequestErr";
import { AdminAuthControllerType } from "./types";
import { findAdminByEmail, findAdminById } from "../../helpers/AdminHelpers";
import { passwordManageMent } from "../../services/passwordServices";
import { ERROR_MESSAGES } from "../../utils/constants";
import { signJwt } from "../../services/jwtServieces";
import { isValidObjectId } from "mongoose";
import TransactionModel from "../../db/models/Products/transaction.model";
import SupplierModel from "../../db/models/Supplier/supplier.model";
import ProductModel from "../../db/models/Products/product.model";

const { INVALID_PASSWORD, INVALID_CREDENTIALS, INVALID_ID } = ERROR_MESSAGES;
const { comparePassword } = passwordManageMent();

export const AdminAuthController = () =>
  ({
    adminLogin: async (body) => {
      try {
        const findAdmin = await findAdminByEmail(body.email);

        if (findAdmin && findAdmin?._id) {
          const comparePss = await comparePassword(
            body.password,
            findAdmin.password
          );

          if (comparePss) {
            const adminId = findAdmin?._id.toString();
            const token = signJwt(adminId);

            return {
              findAdmin,
              token,
            };
          } else {
            throw new BadRequestErr(INVALID_PASSWORD);
          }
        } else {
          throw new BadRequestErr(INVALID_CREDENTIALS);
        }
      } catch (error) {
        throw error;
      }
    },

    singleAdminDetails: async (adminId) => {
      try {
        const id = adminId?._id as string;

        const response = await findAdminById(id);

        return { response };
      } catch (error) {
        throw error;
      }
    },
    dashBoadDetails: async () => {
      try {
        const recentTransactions = await TransactionModel.find()
          .populate("product_id")
          .sort({ createdAt: -1 })
          .limit(10);

        const totalTransactions =
          await TransactionModel.find().countDocuments();
        const totalSuppliers = await SupplierModel.find().countDocuments();
        const totalProducts = await ProductModel.find().countDocuments();
        return {
          recentTransactions,
          totalTransactions,
          totalSuppliers,
          totalProducts,
        };
      } catch (error) {
        throw error;
      }
    },
  } as AdminAuthControllerType);
