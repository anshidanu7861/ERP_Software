import { Document } from "mongoose";
import { Request } from "express";
import { IAdmin } from "../db/models/Admin/admin.model";

export interface CustomRequest extends Request {
  admin?: IAdmin | null;
}
