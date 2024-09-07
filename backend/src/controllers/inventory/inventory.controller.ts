import ProductModel from "../../db/models/Products/product.model";
import { BadRequestErr } from "../../lib/errors/badRequestErr";
import { InventoryControllerType } from "./types";
import { ERROR_MESSAGES } from "../../utils/constants";
import TransactionModel from "../../db/models/Products/transaction.model";

const { PRODUCT_NOT_FOUND } = ERROR_MESSAGES;

export const InventoryController = () =>
  ({
    updateInventory: async (body) => {
      try {
        const findProduct = await ProductModel.findOne({
          _id: body.product_id,
        });

        if (!findProduct) {
          throw new BadRequestErr(PRODUCT_NOT_FOUND);
        }

        if (body.transaction_type === "sale") {
          console.log(findProduct, body.quantity);

          if (findProduct.stock_level >= body.quantity) {
            const transaction = new TransactionModel({
              date: body.date,
              product_id: body.product_id,
              transaction_type: body.transaction_type,
              quantity: body.quantity,
            });

            await transaction.save();

            findProduct.stock_level =
              Number(findProduct.stock_level) - Number(body.quantity);
            await findProduct.save();

            return { transaction };
          } else {
            throw new BadRequestErr("no quantity available");
          }
        } else if (body.transaction_type === "purchase") {
          const transaction = new TransactionModel({
            product_id: body.product_id,
            transaction_type: body.transaction_type,
            quantity: body.quantity,
            date: body.date,
          });

          await transaction.save();

          findProduct.stock_level =
            Number(findProduct.stock_level) + Number(body.quantity);
          await findProduct.save();

          return transaction;
        }
      } catch (error) {
        throw error;
      }
    },
  } as InventoryControllerType);
