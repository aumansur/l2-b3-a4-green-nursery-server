import express, { Router } from "express";
import { NurseryControllers } from "./product.controller";

const router = Router();
router.post("/create-product", NurseryControllers.createProduct);
router.get("/products", NurseryControllers.getAllProducts);
// update product
router.put("/update-product/:id", NurseryControllers.updateProduct);
router.delete("/delete-product/:id", NurseryControllers.deleteProduct);

export const ProductRoutes = router;
