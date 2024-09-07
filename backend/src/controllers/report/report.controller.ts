import { ReportControllerType } from "./type";
import ProductModel from "../../db/models/Products/product.model";
import TransactionModel from "../../db/models/Products/transaction.model";

export const ReportController = () =>
  ({
    getReports: async (query) => {
      try {
        const { limit, skip } = query;

        const response = await ProductModel.find({ stock_level: { $lte: 10 } })
          .limit(Number(limit))
          .skip(Number(limit) * Number(skip));

        const totalReport = await ProductModel.find({
          stock_level: { $lte: 10 },
        }).countDocuments();

        return {
          response,
          totalReport,
        };
      } catch (error) {
        throw error;
      }
    },

    getAllTransactions: async (query) => {
      try {
        const { limit, skip } = query;

        const response = await TransactionModel.find()
          .populate("product_id")
          .sort({ createdAt: -1 })
          .limit(Number(limit))
          .skip(Number(limit) * Number(skip));

        const totalTransactions =
          await TransactionModel.find().countDocuments();
        return {
          response,
          totalTransactions,
        };
      } catch (error) {
        throw error;
      }
    },
  } as ReportControllerType);
