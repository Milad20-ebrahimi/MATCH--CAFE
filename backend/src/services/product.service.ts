import {
  findAllProducts,
  findProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} from "../repositories/product.repository.js";
import { findCategoryById } from "../repositories/category.repository.js";
import { findBrandById } from "../repositories/brand.repository.js";
import { toProductDTO } from "../mappers/product.mapper.js";
type CreateProductInput = {
  name: string;
  slug: string;
  description: string | null;
  price: number;
  stock: number;
  imageUrl: string | null;

  categoryId: string;
  brandId: string;
};
type UpdateProductInput = {
  name?: string;
  slug?: string;
  description?: string | null;
  price?: number;
  stock?: number;
  imageUrl?: string | null;

  categoryId?: string;
  brandId?: string;
};
export async function getProducts() {
  const products = await findAllProducts();

  return products.map(toProductDTO);
}

export async function getProductById(
  id: string
) {
  const product = await findProductById(id);

  if (!product) {
    return null;
  }

  return toProductDTO(product);
}
export async function createNewProduct(
  data: CreateProductInput
) {

  const category = await findCategoryById(data.categoryId);

  if (!category) {
    throw new Error("Category not found");
  }

  const brand = await findBrandById(data.brandId);

  if (!brand) {
    throw new Error("Brand not found");
  }

  return await createProduct(data);

}
export async function updateProduct(
  id: string,
  data: UpdateProductInput
) {
  return await updateProductById(id, data);
}
export async function deleteProduct(
  id: string
) {
  return await deleteProductById(id);
}