import express from "express";
import { responseHandler } from "../../middlewares/responseHandler";
import { CustomRequest } from "../../types/CustomRequest";
import { SupplierController } from "../../controllers/suppliers/supplier.controllers";
import {
  addSupplierValidator,
  updateSupplierValidato,
} from "../../validator/supplierValidator";

const router = express.Router();
const {
  addSuppliers,
  getAllSuppliers,
  getSingleSupplier,
  updateSupplier,
  deleteSuppliers,
} = SupplierController();

router.post(
  "/add",
  responseHandler({
    validator: addSupplierValidator,
    controller: addSuppliers,
    props: (req: CustomRequest) => [req.body],
  })
);

router.get(
  "/all",
  responseHandler({
    controller: getAllSuppliers,
    props: (req: CustomRequest) => [req.query],
  })
);

router.get(
  "/single/:supplierId",
  responseHandler({
    controller: getSingleSupplier,
    props: (req: CustomRequest) => [req.params.supplierId],
  })
);

router.put(
  "/update/:supplierId",
  responseHandler({
    validator: updateSupplierValidato,
    controller: updateSupplier,
    props: (req: CustomRequest) => [req.body, req.params.supplierId],
  })
);

router.delete(
  "/delete/:supplierId",
  responseHandler({
    controller: deleteSuppliers,
    props: (req: CustomRequest) => [req.params.supplierId],
  })
);

export default router;
