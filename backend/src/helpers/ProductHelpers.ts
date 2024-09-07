import ProductModel from "../db/models/Products/product.model";
import {
  addProductTypes,
  updateProductType,
} from "../types/products/product.types";

const saveNewProduct = async (data: addProductTypes) => {
  try {
    return await ProductModel.create(data);
  } catch (error) {
    throw error;
  }
};

const findAllProducts = async (filters: any, limit: number, skip: number) => {
  try {
    return await ProductModel.find(filters)
      .populate("supplier_id")
      .limit(limit)
      .skip(limit * skip)
      .sort({ createdAt: -1 });
  } catch (error) {
    throw error;
  }
};

const totalProducts = async (filters: any) => {
  try {
    return await ProductModel.find(filters).countDocuments();
  } catch (error) {
    throw error;
  }
};

const sinleProductDetails = async (id: string) => {
  try {
    return await ProductModel.findById(id).populate("supplier_id");
  } catch (error) {
    throw error;
  }
};

const updateProductDetails = async (data: updateProductType, id: string) => {
  try {
    const update = await ProductModel.updateOne({ _id: id }, { ...data });
    return update;
  } catch (error) {
    throw error;
  }
};

const deleteProducts = async (id: string) => {
  try {
    return await ProductModel.deleteOne({ _id: id });
  } catch (error) {
    throw error;
  }
};

export {
  saveNewProduct,
  findAllProducts,
  totalProducts,
  sinleProductDetails,
  updateProductDetails,
  deleteProducts,
};
