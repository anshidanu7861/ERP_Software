import express, { response } from "express";
import { responseHandler } from "../../middlewares/responseHandler";
import { AdminAuthController } from "../../controllers/auth/authControllers";
import { adminLoginValidator } from "../../validator/admin.validator";
import { CustomRequest } from "../../types/CustomRequest";
import { adminAuth } from "../../middlewares/adminAuthMiddlware";

const { adminLogin, singleAdminDetails, dashBoadDetails } =
  AdminAuthController();

const router = express.Router();

router.post(
  "/login",
  responseHandler({
    validator: adminLoginValidator,
    controller: adminLogin,
    props: (req: CustomRequest) => [req.body],
  })
);

router.use(adminAuth);
router.get(
  "/single",
  responseHandler({
    controller: singleAdminDetails,
    props: (req: CustomRequest) => [req.admin],
  })
);

router.get(
  "/dashboard",
  responseHandler({
    controller: dashBoadDetails,
  })
);

export default router;
