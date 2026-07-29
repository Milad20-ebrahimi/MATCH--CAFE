"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import type { Product } from "@/types/product";
import AddToCartButton from "@/features/products/components/AddToCartButton";


export default function ProductCard({
  product,
}: {
  product: Product;
}) {


  return (

    <div
      className="
      group
      flex
      h-full
      flex-col
      overflow-hidden
      rounded-3xl
      bg-white
      shadow-md
      transition-all
      duration-500
      hover:-translate-y-1
      hover:shadow-xl
      "
    >


      <Link href={`/shop/${product.slug}`}>



        {/* Product Image */}

        <div
          className="
          relative
          h-72
          overflow-hidden
          bg-[#f5f1e8]
          "
        >


          <Image

            src={product.image}

            alt={product.name}

            fill

            className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
            "

          />



          {/* Favorite Button */}

          <button
            type="button"
            className="
            absolute
            right-4
            top-4
            z-10
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-[#203c27]
            shadow-md
            backdrop-blur-sm
            transition-all
            duration-300
            hover:bg-[#203c27]
            hover:text-white
            "
            aria-label="افزودن به علاقه‌مندی"
          >

            <Heart size={20}/>

          </button>





          {
            product.badge && (

              <span
                className="
                absolute
                left-4
                top-4
                rounded-full
                bg-[#355e3b]
                px-3
                py-1.5
                text-xs
                font-bold
                text-white
                shadow-md
                "
              >

                {product.badge}

              </span>

            )
          }


        </div>





        {/* Product Info */}


        <div
          className="
          flex-1
          p-4
          "
        >



          {/* Product Name */}

          <h3
            className="
            font-serif
            text-lg
            font-bold
            text-[#203c27]
            transition-colors
            duration-300
            group-hover:text-[#d97706]
            "
          >

            {product.name}

          </h3>






          {/* Price */}

          <div
            className="
            mt-2
            flex
            items-center
            gap-3
            "
          >


            <span
              className="
              text-lg
              font-bold
              text-[#d97706]
              "
            >

              {product.price.toLocaleString()}

              <span
                className="
                ml-1
                text-xs
                font-normal
                "
              >
                تومان
              </span>


            </span>




            {
              product.oldPrice && (

                <span
                  className="
                  text-sm
                  text-gray-400
                  line-through
                  "
                >

                  {product.oldPrice.toLocaleString()}

                </span>

              )
            }


          </div>







          {/* Rating */}

          <div
            className="
            mt-2
            flex
            items-center
            gap-2
            "
          >

            <span className="text-yellow-500">
              ★
            </span>


            <span
              className="
              text-sm
              text-gray-500
              "
            >

              {product.rating}

            </span>


          </div>



        </div>


      </Link>





      {/* Add To Cart */}


      <div
        className="
        mt-auto
        px-5
        pb-5
        "
      >


        <AddToCartButton
          product={product}
        />


      </div>



    </div>

  );

}
