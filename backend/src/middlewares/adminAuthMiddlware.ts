import { UnauthrizedErr } from "../lib/errors/unAthrizedErr";
import { CustomRequest } from "../types/CustomRequest";
import { NextFunction, Response } from "express";
import { ERROR_CODES, ERROR_MESSAGES } from "../utils/constants";
import { verifyJwt } from "../services/jwtServieces";
import AdminModel from "../db/models/Admin/admin.model";
import { BadRequestErr } from "../lib/errors/badRequestErr";
import sendErrorResponse from "./errorMiddlware";

export const adminAuth = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const accessToken = req.headers.authorization?.split(" ")[1];

    if (accessToken) {
      const decode: any = await verifyJwt(accessToken);

      const id: string = decode?._id;

      const admin = await AdminModel.findOne({ _id: id });

      if (!admin) {
        sendErrorResponse(
          res,
          ERROR_CODES.UNAUTHORIZED,
          new BadRequestErr(ERROR_MESSAGES.USER_NOT_FOUND)
        );
      }

      req.admin = admin;
      next();
    } else {
      sendErrorResponse(
        res,
        ERROR_CODES.UNAUTHORIZED,
        new BadRequestErr(ERROR_MESSAGES.MISSING_AUTHORIZATION_TOKEN)
      );
    }
  } catch (error) {
    sendErrorResponse(
      res,
      ERROR_CODES.UNAUTHORIZED,
      new BadRequestErr(ERROR_MESSAGES.UNAUTHORIZED)
    );
  }
};
