import express from "express";
import { productRoutes } from "./products";
import { supplierRoutes } from "./suppliers";
import { InventoryManagementRoutes } from "./Inventory";
import { AdminAuthRoutes } from "./auth";
import { adminAuth } from "../middlewares/adminAuthMiddlware";
import { ReporterRoutes } from "./report";

const router = express.Router();

router.use("/auth", AdminAuthRoutes);

router.use(adminAuth);
router.use("/products", productRoutes);
router.use("/suppliers", supplierRoutes);
router.use("/inventory", InventoryManagementRoutes);
router.use("/report", ReporterRoutes);

export default router;
