import mongoose, { Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>(
  {
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    customerAddress: { type: String, required: true },
    // array of objects productId
    productId: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },

  {
    timestamps: true,
  }
);

export const Order = mongoose.model<TOrder>("Order", orderSchema);
