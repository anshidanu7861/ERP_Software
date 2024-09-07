import { Response } from "express";
import { ExitStatus } from "typescript";

const sendErrorResponse = (
  res: Response,
  status: number | undefined,
  err: Error
) => {
  return res.status(status ? status : 500).json({
    error: err.message
      ? err.message
      : err
      ? err
      : "somthing wend wrong , try again",
  });
};

export default sendErrorResponse;
