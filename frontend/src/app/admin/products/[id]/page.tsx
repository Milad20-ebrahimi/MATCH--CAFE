"use client";

import {
  useState
} from "react";

import {
  useParams,
  useRouter,
} from "next/navigation";

import Container from "@/components/shared/Container";

import useProducts from "@/features/products/hooks/useProducts";

import {
  updateProduct,
} from "@/features/products/services/product.service";


export default function EditProductPage(){

  const router = useRouter();

  const params = useParams();

  const id = params.id as string;


  const {
    products,
  } = useProducts();


  const product =
    products.find(
      item =>
        item.id === id
    );


  const [name,setName] =
    useState(product?.name ?? "");

  const [category,setCategory] =
    useState(product?.category ?? "");

  const [price,setPrice] =
    useState(
      product?.price.toString() ?? ""
    );

  const [rating,setRating] =
    useState(
      product?.rating.toString() ?? ""
    );



  if(!product){

    return null;

  }



function submit(){

  if(!product){
    return;
  }


  updateProduct({

    id: product.id,

  slug: product.slug,

  name,

  category,

  price:
  Number(price),

  rating:
  Number(rating),

  image:
  product.image,

  badge:
  product.badge,

});
    router.push(
      "/admin/products"
    );

  }



  return (

    <main
      className="
      min-h-screen
      bg-[#f8f5ed]
      py-32
      "
    >

      <Container>

        <div
          className="
          max-w-xl
          rounded-3xl
          bg-white
          p-8
          shadow-xl
          "
        >

          <h1
            className="
            text-3xl
            font-bold
            text-[#203c27]
            "
          >
            ویرایش محصول
          </h1>


          <div
            className="
            mt-8
            space-y-5
            "
          >

            <input
              value={name}
              onChange={
                e=>setName(e.target.value)
              }
              className="
              w-full
              rounded-2xl
              border
              px-5
              py-4
              "
            />


            <input
              value={category}
              onChange={
                e=>setCategory(e.target.value)
              }
              className="
              w-full
              rounded-2xl
              border
              px-5
              py-4
              "
            />


            <input
              value={price}
              onChange={
                e=>setPrice(e.target.value)
              }
              className="
              w-full
              rounded-2xl
              border
              px-5
              py-4
              "
            />


            <input
              value={rating}
              onChange={
                e=>setRating(e.target.value)
              }
              className="
              w-full
              rounded-2xl
              border
              px-5
              py-4
              "
            />


            <button
              onClick={submit}
              className="
              w-full
              rounded-full
              bg-[#d97706]
              py-4
              font-bold
              text-white
              "
            >
              ذخیره تغییرات
            </button>


          </div>


        </div>


      </Container>

    </main>

  );

}
