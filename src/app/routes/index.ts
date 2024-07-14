import { Router } from "express";
import { ProductRoutes } from "../modules/products/product.routes";

const router = Router();

const modulesRoutes = [
  {
    path: "/",
    route: ProductRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
