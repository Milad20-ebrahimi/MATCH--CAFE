import type { Product } from "@/types/product";
import { products as defaultProducts } from "../data/products";


const PRODUCT_KEY = "matcha-products";



export function getStoredProducts(): Product[] {

  if(typeof window === "undefined"){
    return defaultProducts;
  }


  const saved =
    localStorage.getItem(PRODUCT_KEY);



  if(!saved){

    localStorage.setItem(
      PRODUCT_KEY,
      JSON.stringify(defaultProducts)
    );

    return defaultProducts;

  }



  return JSON.parse(saved);

}





export function saveProducts(
  products: Product[]
){

  localStorage.setItem(
    PRODUCT_KEY,
    JSON.stringify(products)
  );

}





export function addProduct(
  product: Product
){

  const products =
    getStoredProducts();


  saveProducts([
    ...products,
    product
  ]);

}





export function deleteProduct(
  id:string
){

  const products =
    getStoredProducts();


  saveProducts(
    products.filter(
      product =>
        product.id !== id
    )
  );

}





export function updateProduct(
  updatedProduct: Product
){

  const products =
    getStoredProducts();


  saveProducts(
    products.map(
      product =>
        product.id === updatedProduct.id
        ? updatedProduct
        : product
    )
  );

}
