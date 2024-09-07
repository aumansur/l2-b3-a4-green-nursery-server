import { Router } from "express";
import { ProductRoutes } from "../modules/products/product.routes";
import { OrderRoutes } from "../modules/order/order.route";

const router = Router();

const modulesRoutes = [
  {
    path: "/",
    route: ProductRoutes,
  },
  {
    path: "/",
    route: OrderRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
