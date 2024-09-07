import { Request, Response, NextFunction } from "express";
import { CustomError } from "./customErr";
import { ERROR_CODES, ERROR_MESSAGES } from "../../utils/constants";

const { WENT_WRONG } = ERROR_MESSAGES;

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeError() });
  }

  console.error(err);
  res.status(ERROR_CODES.BAD_REQUEST).send({
    errors: [{ message: WENT_WRONG }],
  });
};
