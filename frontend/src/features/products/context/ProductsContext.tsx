"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import type { Product } from "@/types/product";

import {
  fetchProducts,
  addProduct as addProductService,
  deleteProduct as deleteProductService,
  updateProduct as updateProductService,
} from "@/features/products/services/product.service";



interface ProductsContextType {

  products: Product[];

  loading: boolean;


  getProductBySlug(
    slug:string
  ): Product | undefined;



  addProduct(
    product:Product
  ): Promise<void>;



  deleteProduct(
    id:string
  ): Promise<void>;



  updateProduct(
    product:Product
  ): Promise<void>;

}



const ProductsContext =
createContext<ProductsContextType | undefined>(
  undefined
);





export function ProductsProvider({
  children,
}:{
  children:ReactNode;
}) {



  const [
    products,
    setProducts
  ] = useState<Product[]>([]);



  const [
    loading,
    setLoading
  ] = useState(true);





  useEffect(()=>{


    fetchProducts()

    .then((data)=>{


      setProducts(data);


    })

    .catch((error)=>{


      console.error(
        "Failed loading products:",
        error
      );


    })

    .finally(()=>{


      setLoading(false);


    });


  },[]);







  function getProductBySlug(
    slug:string
  ){


    return products.find(
      product =>
        product.slug === slug
    );


  }







  async function addProduct(
    product:Product
  ){


    await addProductService(product);



    setProducts(
      prev => [

        ...prev,

        product

      ]
    );


  }







  async function deleteProduct(
    id:string
  ){


    await deleteProductService(id);



    setProducts(
      prev =>

        prev.filter(
          product =>
            product.id !== id
        )

    );


  }








  async function updateProduct(
    product:Product
  ){


    await updateProductService(product);



    setProducts(
      prev =>

        prev.map(
          item =>

          item.id === product.id

          ? product

          : item

        )

    );


  }









return (

<ProductsContext.Provider


value={{

products,

loading,

getProductBySlug,

addProduct,

deleteProduct,

updateProduct,


}}


>

{children}


</ProductsContext.Provider>


);


}







export function useProducts(){


const context =
useContext(ProductsContext);



if(!context){


throw new Error(
"useProducts must be used inside ProductsProvider"
);


}



return context;


}
