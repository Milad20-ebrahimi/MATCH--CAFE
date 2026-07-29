"use client";

import { useState } from "react";
import Image from "next/image";

import Container from "@/components/shared/Container";
import AddToCartButton from "@/features/products/components/AddToCartButton";

import type { Product } from "@/types/product";


interface ProductDetailProps {
  product: Product;
}


export default function ProductDetail({
  product,
}: ProductDetailProps) {


  const [quantity,setQuantity] = useState(1);



  return (

    <main className="bg-[#f7f4ec] py-28">


      <Container>


        <div
          className="
          grid
          gap-16
          lg:grid-cols-2
          "
        >



          {/* IMAGE */}


          <div
            className="
            relative
            h-[560px]
            overflow-hidden
            rounded-[48px]
            bg-[#eee8dc]
            shadow-[0_40px_100px_-40px_rgba(13,26,18,0.35)]
            "
          >


            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="
              object-cover
              transition
              duration-700
              hover:scale-105
              "
            />


            {
              product.badge && (

                <span
                  className="
                  absolute
                  left-6
                  top-6
                  rounded-full
                  bg-[#0d1a12]
                  px-5
                  py-2
                  text-xs
                  tracking-wider
                  text-[#f2e9d8]
                  "
                >

                  {product.badge}

                </span>

              )
            }


          </div>





          {/* INFO */}


          <div
            className="
            flex
            flex-col
            justify-center
            "
          >



            <p
              className="
              text-xs
              tracking-[0.35em]
              text-[#355e3b]
              "
            >
              MATCHA COLLECTION
            </p>



            <h1
              className="
              mt-5
              text-5xl
              font-light
              leading-tight
              text-[#0d1a12]
              "
            >

              {product.name}

            </h1>




            <div
              className="
              mt-6
              flex
              items-center
              gap-3
              "
            >

              <span className="text-xl text-yellow-600">
                ★
              </span>


              <span className="text-sm text-[#0d1a12]/60">

                {product.rating}

              </span>


            </div>






            <p
              className="
              mt-8
              max-w-xl
              leading-9
              text-[#0d1a12]/60
              "
            >

              محصول پریمیوم MATCH--CAFE،
              انتخاب شده از بهترین مواد اولیه برای تجربه‌ای
              آرام و متفاوت.

            </p>







            {/* PRICE */}


            <div
              className="
              mt-10
              "
            >

              <span
                className="
                text-4xl
                font-light
                text-[#0d1a12]
                "
              >

                {product.price.toLocaleString()}

                <span className="ml-2 text-base">
                  تومان
                </span>

              </span>


            </div>







            {/* FEATURES */}


            <div
              className="
              mt-8
              grid
              grid-cols-2
              gap-4
              "
            >


              <div
                className="
                rounded-2xl
                bg-white/70
                p-4
                text-sm
                text-[#0d1a12]/70
                "
              >
                ارسال سریع
              </div>



              <div
                className="
                rounded-2xl
                bg-white/70
                p-4
                text-sm
                text-[#0d1a12]/70
                "
              >
                کیفیت پریمیوم
              </div>


            </div>







            {/* QUANTITY */}


            <div
              className="
              mt-10
              flex
              items-center
              gap-5
              "
            >


              <button
                onClick={()=>setQuantity(q=>Math.max(1,q-1))}
                className="
                h-12
                w-12
                rounded-full
                border
                border-[#0d1a12]/10
                text-xl
                "
              >
                −
              </button>



              <span
                className="
                text-xl
                text-[#0d1a12]
                "
              >
                {quantity}
              </span>



              <button
                onClick={()=>setQuantity(q=>q+1)}
                className="
                h-12
                w-12
                rounded-full
                border
                border-[#0d1a12]/10
                text-xl
                "
              >
                +
              </button>


            </div>






            <div className="mt-8">

              <AddToCartButton
                product={product}
                quantity={quantity}
              />

            </div>



          </div>


        </div>


      </Container>


    </main>

  );
}
