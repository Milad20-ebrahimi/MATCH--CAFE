import {
  findImagesByProductId,
  findImageById,
  createProductImage,
  deleteProductImage,
} from "../repositories/product-image.repository.js";


type CreateProductImageInput = {
  productId: string;
  imageUrl: string;
  isPrimary?: boolean;
  sortOrder?: number;
};


export async function getProductImages(
  productId: string
) {

  return await findImagesByProductId(productId);

}


export async function getProductImageById(
  id: string
) {

  return await findImageById(id);

}


export async function createNewProductImage(
  data: CreateProductImageInput
) {

  return await createProductImage(data);

}


export async function deleteExistingProductImage(
  id: string
) {

  return await deleteProductImage(id);

}