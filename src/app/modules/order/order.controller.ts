import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

import { OrderServices } from "./order.services";

const createOrder = catchAsync(async (req, res) => {
  const orderData = req.body;

  const result = await OrderServices.createOrderIntoDb(orderData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Order is created successfully",
    data: result,
  });
});

export const OrderController = {
  createOrder,
};
