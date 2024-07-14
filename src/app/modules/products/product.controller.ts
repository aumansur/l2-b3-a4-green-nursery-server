import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { NurseryServices } from "./product.service";

const createProduct: RequestHandler = catchAsync(async (req, res) => {
  const result = await NurseryServices.productCreateIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Nursery Product  created successfully",
    data: result,
  });
});

// update product

const updateProduct: RequestHandler = catchAsync(async (req, res) => {
  const result = await NurseryServices.updateProductIntoDB(
    req.params.id,
    req.body
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Nursery Product updated successfully",
    data: result,
  });
});
// delete product

const deleteProduct: RequestHandler = catchAsync(async (req, res) => {
  const result = await NurseryServices.deleteProductFromDB(req.params.id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Nursery Product deleted successfully",
    data: result,
  });
});

const getAllProducts: RequestHandler = catchAsync(async (req, res) => {
  const result = await NurseryServices.getAllProductFromDB(req?.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Nursery Products retrieved successfully",
    data: result,
  });
});

export const NurseryControllers = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
