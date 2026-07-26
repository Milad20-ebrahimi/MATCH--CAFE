import { eq } from "drizzle-orm";

import { db } from "../database/index.js";
import { products } from "../database/schema/product.schema.js";
type CreateProductInput = {
  name: string;
  slug: string;
  description: string | null;
  price: number;
  stock: number;
  imageUrl: string | null;
};
type UpdateProductInput = {
  name?: string;
  slug?: string;
  description?: string | null;
  price?: number;
  stock?: number;
  imageUrl?: string | null;
};
export async function findAllProducts() {
  return await db
    .select({
      id: products.id,
      name: products.name,
      slug: products.slug,
      price: products.price,
      stock: products.stock,
      imageUrl: products.imageUrl,
    })
    .from(products);
}

export async function findProductById(
  id: string
) {
  const product = await db
    .select({
      id: products.id,
      name: products.name,
      slug: products.slug,
      description: products.description,
      price: products.price,
      stock: products.stock,
      imageUrl: products.imageUrl,
    })
    .from(products)
    .where(eq(products.id, id))
    .limit(1);

  return product[0] ?? null;
}
export async function createProduct(
  data: CreateProductInput
) {
  const product = await db
    .insert(products)
    .values(data)
    .returning({
      id: products.id,
      name: products.name,
      slug: products.slug,
      description: products.description,
      price: products.price,
      stock: products.stock,
      imageUrl: products.imageUrl,
      createdAt: products.createdAt,
    });

  return product[0];
}
export async function updateProductById(
  id: string,
  data: UpdateProductInput
) {
  const product = await db
    .update(products)
    .set(data)
    .where(eq(products.id, id))
    .returning({
      id: products.id,
      name: products.name,
      slug: products.slug,
      description: products.description,
      price: products.price,
      stock: products.stock,
      imageUrl: products.imageUrl,
      updatedAt: products.updatedAt,
    });


  return product[0] ?? null;
}
export async function deleteProductById(
  id: string
) {
  const product = await db
    .delete(products)
    .where(eq(products.id, id))
    .returning({
      id: products.id,
      name: products.name,
      slug: products.slug,
    });

  return product[0] ?? null;
}