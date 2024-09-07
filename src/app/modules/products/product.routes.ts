import express, { Router } from "express";
import { NurseryControllers } from "./product.controller";

const router = Router();
router.post("/create-product", NurseryControllers.createProduct);
router.get("/products", NurseryControllers.getAllProducts);
// update product
router.put("/update-product/:id", NurseryControllers.updateProduct);
router.delete("/delete-product/:id", NurseryControllers.deleteProduct);
// single product

router.get("/product/:id", NurseryControllers.getSingleProduct);
router.get("/product-count", NurseryControllers.getProductCount);

// e:\work\PH\Batch-3\all-assignment\l2-b3-assignment-4\l2b2-assignment-4-server\src\app\modules\products\product.routes.ts

export const ProductRoutes = router;
