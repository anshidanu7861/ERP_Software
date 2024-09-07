import { IProduct } from "../../db/models/Products/product.model";
import {
  addProductTypes,
  updateProductType,
} from "../../types/products/product.types";

export interface ProductControllerType {
  addProducts: (body: addProductTypes) => Promise<Partial<IProduct>>;
  getAllProducts: (query: {
    limit?: number;
    skip?: number;
    name: string;
  }) => Promise<{ response: IProduct[]; totalProduct: number }>;
  getSingleProduct: (productId: string) => Promise<Partial<IProduct>>;
  updateProduct: (
    body: updateProductType,
    productId: string
  ) => Promise<Partial<IProduct>>;
  deleteProduct: (productId: string) => Promise<Partial<IProduct>>;
}
