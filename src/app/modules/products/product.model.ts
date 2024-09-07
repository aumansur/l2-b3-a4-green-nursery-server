import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";
import { Category } from "./product.constants";

const ProductSchema = new Schema<TProduct>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: {
      values: Category,
    },
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    max: 5,
    default: 0,
  },

  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  images: {
    type: String,
    required: true,
  },
});

// 3. Create a Model.
export const Product = model<TProduct>("Product", ProductSchema);
