import express from "express";
import { responseHandler } from "../../middlewares/responseHandler";
import { CustomRequest } from "../../types/CustomRequest";
import {
  addProductValidator,
  updateProductValidator,
} from "../../validator/product.validator";
import { ProductController } from "../../controllers/products/product.controllers";

const router = express.Router();

const {
  addProducts,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = ProductController();

router.post(
  "/add",
  responseHandler({
    validator: addProductValidator,
    controller: addProducts,
    props: (req: CustomRequest) => [req.body],
  })
);

router.get(
  "/all",
  responseHandler({
    controller: getAllProducts,
    props: (req: CustomRequest) => [req.query],
  })
);

router.get(
  "/single/:productId",
  responseHandler({
    controller: getSingleProduct,
    props: (req: CustomRequest) => [req.params.productId],
  })
);

router.put(
  "/update/:productId",

  responseHandler({
    validator: updateProductValidator,
    controller: updateProduct,
    props: (req: CustomRequest) => [req.body, req.params.productId],
  })
);

router.delete(
  "/delete/:productId",
  responseHandler({
    controller: deleteProduct,
    props: (req: CustomRequest) => [req.params.productId],
  })
);

export default router;
