import { IAdmin } from "../../db/models/Admin/admin.model";
import { ITransaction } from "../../db/models/Products/transaction.model";
import { adminLoginType } from "../../types/products/admin.types";

export interface AdminAuthControllerType {
  adminLogin: (body: adminLoginType) => Promise<Partial<IAdmin>>;
  singleAdminDetails: (adminId: IAdmin) => Promise<Partial<IAdmin>>;
  dashBoadDetails: () => Promise<{
    recentTransactions: ITransaction[];
    totalTransactions: number;
    totalSuppliers: number;
    totalProducts: number;
  }>;
}
