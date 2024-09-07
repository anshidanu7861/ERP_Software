import { ISuppliers } from "../../db/models/Supplier/supplier.model";
import {
  addSuppliersType,
  updateSupplierType,
} from "../../types/products/supplier.types";

export interface SupplierControllerType {
  addSuppliers: (body: addSuppliersType) => Promise<Partial<ISuppliers>>;
  getAllSuppliers: (query: {
    limit?: number;
    skip?: number;
    name?: string;
  }) => Promise<{ response: ISuppliers[]; totalSuppliers: number }>;

  getSingleSupplier: (supplierId: string) => Promise<Partial<ISuppliers>>;
  updateSupplier: (
    body: updateSupplierType,
    supplierId: string
  ) => Promise<Partial<ISuppliers>>;
  deleteSuppliers: (supplierId: string) => Promise<Partial<ISuppliers>>;
}
