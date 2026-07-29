import type { Product } from "@/types/product";
import { products } from "../data/products";
export async function getProducts(): Promise<Product[]> {
return products;}
export async function getProductBySlug(
  slug:string
): Promise<Product | undefined> {
return products.find(
    (product)=>product.slug === slug
  );}
