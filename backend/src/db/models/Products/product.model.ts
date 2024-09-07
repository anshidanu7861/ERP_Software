import { Schema, model, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock_level: number;
  supplier_id: Schema.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    stock_level: {
      type: Number,
      required: true,
    },
    supplier_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "suppliers",
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = model("products", ProductSchema);
export default ProductModel;
