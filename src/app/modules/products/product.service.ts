import { QueryBuilder } from "../../builder/SearchQuery";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const productCreateIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    runValidators: true,
  });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};
// get all products, search for products with pagination
const getAllProductFromDB = async (query: Record<string, unknown>) => {
  const productSearchableField = ["title", "category", "description"];

  const productQuery = new QueryBuilder(Product.find(), query)
    .paginate()
    .search(productSearchableField)
    .sort();

  const result = await productQuery.modelQuery;
  return result;
};

// get single product

const getProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
// get product by  estimatedDocumentCount method

const getProductCount = async () => {
  const result = await Product.estimatedDocumentCount();
  return result;
};

export const NurseryServices = {
  productCreateIntoDB,
  getAllProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
  getProductById,
  getProductCount,
};
