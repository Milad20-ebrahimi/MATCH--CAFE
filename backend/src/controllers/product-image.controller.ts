import type {
  Request,
  Response,
} from "express";

import {
  getProductImages,
  getProductImageById,
  createNewProductImage,
  deleteExistingProductImage,
} from "../services/product-image.service.js";

import { AppError } from "../utils/AppError.js";


export const getImagesByProduct = async (
  req: Request<{ productId: string }>,
  res: Response
) => {

  const { productId } = req.params;

  const images = await getProductImages(productId);

  res.json({
    images,
  });

};



export const getImage = async (
  req: Request<{ id: string }>,
  res: Response
) => {

  const { id } = req.params;

  const image = await getProductImageById(id);


  if (!image) {
    throw new AppError(
      "Image not found",
      404
    );
  }


  res.json({
    image,
  });

};



export const createImage = async (
  req: Request<{ productId: string }>,
  res: Response
) => {

  const { productId } = req.params;


  const image = await createNewProductImage({
    productId,
    ...req.body,
  });


  res.status(201).json({
    message: "Product image created successfully",
    image,
  });

};



export const deleteImage = async (
  req: Request<{ id: string }>,
  res: Response
) => {

  const { id } = req.params;


  const image = await deleteExistingProductImage(id);


  if (!image) {
    throw new AppError(
      "Image not found",
      404
    );
  }


  res.json({
    message: "Product image deleted successfully",
    image,
  });

};