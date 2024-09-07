import dotenv from "dotenv";
dotenv.config();

export const envConfig = {
  defAdminEmail: process.env.DEFAULT_ADMIN_EMAIL as string,
  defAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD as string,
  jwtSecret: process.env.JWT_SECRET,
};
