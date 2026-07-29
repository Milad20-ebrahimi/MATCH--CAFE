"use client";

import {
  useState,
} from "react";

import Link from "next/link";

import Container from "@/components/shared/Container";

import useProducts from "@/features/products/hooks/useProducts";

import {
  deleteProduct,
} from "@/features/products/services/product.service";


export default function AdminProductsPage(){

  const {
    products,
  } = useProducts();


  const [, refresh] = useState(0);



  function handleDelete(
    id:string
  ){

    const confirmed =
    confirm(
      "آیا از حذف محصول مطمئن هستید؟"
    );


    if(!confirmed){
      return;
    }


    deleteProduct(id);


    refresh(
      value => value + 1
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
          rounded-3xl
          bg-white
          p-8
          shadow-xl
          "
        >


          <div
            className="
            flex
            items-center
            justify-between
            "
          >

            <h1
              className="
              font-serif
              text-3xl
              font-bold
              text-[#203c27]
              "
            >
              مدیریت محصولات
            </h1>


            <Link
              href="/admin/products/new"
              className="
              rounded-full
              bg-[#d97706]
              px-6
              py-3
              font-semibold
              text-white
              "
            >
              افزودن محصول
            </Link>


          </div>



          <div
            className="
            mt-8
            overflow-x-auto
            "
          >

            <table
              className="
              w-full
              text-right
              "
            >

              <thead>

                <tr
                  className="
                  border-b
                  text-[#203c27]
                  "
                >

                  <th className="p-4">
                    نام محصول
                  </th>


                  <th className="p-4">
                    دسته
                  </th>


                  <th className="p-4">
                    قیمت
                  </th>


                  <th className="p-4">
                    امتیاز
                  </th>


                  <th className="p-4">
                    عملیات
                  </th>


                </tr>

              </thead>



              <tbody>

              {
                products.map(product => (

                  <tr
                    key={product.id}
                    className="
                    border-b
                    "
                  >


                    <td
                      className="
                      p-4
                      font-semibold
                      "
                    >
                      {product.name}
                    </td>



                    <td className="p-4">
                      {product.category}
                    </td>



                    <td className="p-4">

                      {
                        product.price.toLocaleString()
                      }

                      {" تومان"}

                    </td>



                    <td className="p-4">

                      ★ {product.rating}

                    </td>



                    <td className="p-4">

                      <div
                        className="
                        flex
                        gap-3
                        justify-end
                        "
                      >

                        <Link
                          href={
                            `/admin/products/${product.id}`
                          }
                          className="
                          rounded-full
                          bg-[#203c27]
                          px-5
                          py-2
                          text-white
                          "
                        >
                          ویرایش
                        </Link>



                        <button
                          onClick={() =>
                            handleDelete(product.id)
                          }
                          className="
                          rounded-full
                          bg-red-600
                          px-5
                          py-2
                          text-white
                          "
                        >
                          حذف
                        </button>


                      </div>

                    </td>



                  </tr>

                ))
              }


              </tbody>


            </table>


          </div>


        </div>


      </Container>


    </main>

  );

}
