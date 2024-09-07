import SupplierModel from "../db/models/Supplier/supplier.model";
import {
  addSuppliersType,
  updateSupplierType,
} from "../types/products/supplier.types";

const saveSupplier = async (data: addSuppliersType) => {
  try {
    return await SupplierModel.create(data);
  } catch (error) {
    throw error;
  }
};

const findSupplierByEmail = async (email: string) => {
  try {
    return await SupplierModel.findOne({ email: email });
  } catch (error) {
    throw error;
  }
};

const findAllSuppliers = async (filters: any, limit: number, skip: number) => {
  try {
    const suppliers = await SupplierModel.find(filters)
      .limit(limit)
      .skip(limit * skip)
      .sort({ createdAt: -1 });

    return suppliers;
  } catch (error) {
    throw error;
  }
};

const findSupplierById = async (id: string) => {
  try {
    return await SupplierModel.findById(id);
  } catch (error) {
    throw error;
  }
};

const updateSupplier = async (data: updateSupplierType, id: string) => {
  try {
    const update = await SupplierModel.updateOne({ _id: id }, { ...data });
    return update;
  } catch (error) {
    throw error;
  }
};

const suppliersCount = async (filters: any) => {
  try {
    const suppliersCount = await SupplierModel.find(filters).countDocuments();
    return suppliersCount;
  } catch (error) {
    throw error;
  }
};

const deleteSupplier = async (supplierId: string) => {
  try {
    return await SupplierModel.deleteOne({ _id: supplierId });
  } catch (error) {
    throw error;
  }
};

export {
  saveSupplier,
  findSupplierByEmail,
  findAllSuppliers,
  findSupplierById,
  updateSupplier,
  suppliersCount,
  deleteSupplier,
};
