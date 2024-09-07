import AdminModel from "../../db/models/Admin/admin.model";
import { passwordManageMent } from "../../services/passwordServices";
import { envConfig } from "../../config";
import { ConntectToDatabase } from "../../db/connect.db";
const { hashPassword } = passwordManageMent();
import mongoose from "mongoose";
import { ERROR_MESSAGES } from "../../utils/constants";

const { WENT_WRONG } = ERROR_MESSAGES;

export const seedAdmin = async () => {
  try {
    const hashPss = await hashPassword(envConfig.defAdminPassword);

    await ConntectToDatabase();

    const admin = new AdminModel({
      email: envConfig.defAdminEmail,
      password: hashPss,
    });

    await admin.save();
  } catch (error) {
    console.log(WENT_WRONG, error);
  } finally {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
      console.log("Database connection closed.");
    }
  }
};
