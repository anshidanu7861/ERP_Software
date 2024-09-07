import jwt from "jsonwebtoken";
import { envConfig } from "../config";

export const signJwt = (_id: string) => {
  return jwt.sign({ _id }, envConfig.jwtSecret as string, { expiresIn: "2d" });
};

export const verifyJwt = (token: string) => {
  return jwt.verify(token, envConfig.jwtSecret as string);
};
