import { Types } from "mongoose";
import { TProduct } from "../products/product.interface";

export type TOrder = {
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  productId?: string[];
};
