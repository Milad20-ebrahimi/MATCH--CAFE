import type {
  Request,
  Response,
} from "express";

import {
  getProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
} from "../services/product.service.js";
import { AppError } from "../utils/AppError.js";


export const getAllProducts = async (
  req: Request,
  res: Response
) => {

  const products = await getProducts();

  res.json({
    products,
  });

};

export const getProduct = async (
  req: Request<{ id: string }>,
  res: Response
) => {

  const { id } = req.params;

  const product = await getProductById(id);
if (!product) {
  throw new AppError(
    "Product not found",
    404
  );
}

  res.json({
    product,
  });
};
export const createProduct = async (
  req: Request,
  res: Response
) => {

const product = await createNewProduct(req.body);

  return res.status(201).json({
    message: "Product created successfully",
    product,
  });

};
export const updateProductController = async (
  req: Request<{ id: string }>,
  res: Response
) => {

  const { id } = req.params;

  const product = await updateProduct(
    id,
    req.body
  );

  if (!product) {
  throw new AppError(
    "Product not found",
    404
  );
}

  return res.json({
    message: "Product updated successfully",
    product,
  });

};
export const deleteProductController = async (
  req: Request<{ id: string }>,
  res: Response
) => {

  const { id } = req.params;

  const product = await deleteProduct(id);

  if (!product) {
  throw new AppError(
    "Product not found",
    404
  );
}

  return res.json({
    message: "Product deleted successfully",
    product,
  });

};