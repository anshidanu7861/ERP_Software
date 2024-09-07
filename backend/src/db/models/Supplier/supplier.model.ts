import { Schema, model, Document } from "mongoose";

export interface ISuppliers extends Document {
  name: string;
  phone: string;
  address: string;
  email: string;
  country: string;
  state: string;
  city: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const SupplierSchema: Schema<ISuppliers> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SupplierModel = model("suppliers", SupplierSchema);
export default SupplierModel;
