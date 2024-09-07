import express from "express";
import { ReportController } from "../../controllers/report/report.controller";
import { responseHandler } from "../../middlewares/responseHandler";
import { CustomRequest } from "../../types/CustomRequest";

const { getReports, getAllTransactions } = ReportController();

const router = express.Router();

router.get(
  "/",
  responseHandler({
    controller: getReports,
    props: (req: CustomRequest) => [req.query],
  })
);

router.get(
  "/transactions",
  responseHandler({
    controller: getAllTransactions,
    props: (req: CustomRequest) => [req.query],
  })
);

export default router;
