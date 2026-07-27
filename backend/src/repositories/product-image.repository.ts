import { eq } from "drizzle-orm";

import { db } from "../database/index.js";
import { productImages } from "../database/schema/product-image.schema.js";


export async function findImagesByProductId(
  productId: string
) {

  return await db
    .select({
      id: productImages.id,
      productId: productImages.productId,
      imageUrl: productImages.imageUrl,
      isPrimary: productImages.isPrimary,
      sortOrder: productImages.sortOrder,
      createdAt: productImages.createdAt,
    })
    .from(productImages)
    .where(
      eq(productImages.productId, productId)
    );

}


export async function findImageById(
  id: string
) {

  const image = await db
    .select({
      id: productImages.id,
      productId: productImages.productId,
      imageUrl: productImages.imageUrl,
      isPrimary: productImages.isPrimary,
      sortOrder: productImages.sortOrder,
      createdAt: productImages.createdAt,
    })
    .from(productImages)
    .where(
      eq(productImages.id, id)
    )
    .limit(1);


  return image[0] ?? null;

}


type CreateProductImageInput = {
  productId: string;
  imageUrl: string;
  isPrimary?: boolean;
  sortOrder?: number;
};


export async function createProductImage(
  data: CreateProductImageInput
) {

  const image = await db
    .insert(productImages)
    .values(data)
    .returning({
      id: productImages.id,
      productId: productImages.productId,
      imageUrl: productImages.imageUrl,
      isPrimary: productImages.isPrimary,
      sortOrder: productImages.sortOrder,
      createdAt: productImages.createdAt,
    });


  return image[0];

}


export async function deleteProductImage(
  id: string
) {

  const image = await db
    .delete(productImages)
    .where(
      eq(productImages.id, id)
    )
    .returning({
      id: productImages.id,
      imageUrl: productImages.imageUrl,
    });


  return image[0] ?? null;

}