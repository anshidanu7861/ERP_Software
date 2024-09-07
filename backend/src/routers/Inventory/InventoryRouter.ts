import express from "express";
import { responseHandler } from "../../middlewares/responseHandler";
import { CustomRequest } from "../../types/CustomRequest";
import { InventoryController } from "../../controllers/inventory/inventory.controller";
import { updateInventoryValidator } from "../../validator/inventory.validator";

const { updateInventory } = InventoryController();

const router = express.Router();

router.post(
  "/update",
  responseHandler({
    validator: updateInventoryValidator,
    controller: updateInventory,
    props: (req: CustomRequest) => [req.body],
  })
);

export default router;
