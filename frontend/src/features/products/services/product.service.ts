import type { Product } from "@/types/product";

import {
  getStoredProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "./product.storage";



export async function fetchProducts(): Promise<Product[]> {

  return getStoredProducts();

}



export async function fetchProductBySlug(
  slug:string
): Promise<Product | undefined> {

  const products =
    getStoredProducts();


  return products.find(
    product =>
      product.slug === slug
  );

}



export {
  addProduct,
  deleteProduct,
  updateProduct,
};
