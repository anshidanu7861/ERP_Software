import { Schema, model, Document } from "mongoose";

export interface IAdmin extends Document {
  name: string;
  email: string;
  password: string;
  lastLogin_date: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const AdminSchema: Schema<IAdmin> = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastLogin_date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

AdminSchema.methods.toJSON = function () {
  const admin = this;
  const adminObj = admin.toObject();
  delete adminObj.password;
  return adminObj;
};

const AdminModel = model("admins", AdminSchema);
export default AdminModel;
