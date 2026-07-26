import {
  findAllProducts,
  findProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} from "../repositories/product.repository.js";
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
export async function getProducts() {
  return await findAllProducts();
}

export async function getProductById(
  id: string
) {
  return await findProductById(id);
}
export async function createNewProduct(
  data: CreateProductInput
) {
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