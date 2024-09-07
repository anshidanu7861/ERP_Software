import { IProduct } from "../../db/models/Products/product.model";
import { ITransaction } from "../../db/models/Products/transaction.model";

export interface ReportControllerType {
  getReports: (query: {
    limit?: number;
    skip?: number;
  }) => Promise<{ response: IProduct[]; totalReport: number }>;
  getAllTransactions: (query: {
    limit?: number;
    skip?: number;
  }) => Promise<{ response: ITransaction[]; totalTransactions: number }>;
}
