import { Schema, model, Document } from "mongoose";

export interface ITransaction extends Document {
  product_id: Schema.Types.ObjectId;
  quantity: number;
  transaction_type: string;
  date: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const TransactionSchema: Schema<ITransaction> = new Schema(
  {
    transaction_type: {
      type: String,
      required: true,
      enum: ["sale", "purchase"],
    },
    quantity: {
      type: Number,
      required: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "products",
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TransactionModel = model("transactions", TransactionSchema);
export default TransactionModel;
