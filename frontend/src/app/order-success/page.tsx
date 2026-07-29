"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Container from "@/components/shared/Container";

import type { Order } from "@/features/orders/types";


export default function OrderSuccessPage() {

  const [order,setOrder] = useState<Order | null>(null);


  useEffect(()=>{

    const data = localStorage.getItem(
      "last-order"
    );

    if(data){

      setOrder(
        JSON.parse(data)
      );

    }

  },[]);



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
          mx-auto
          max-w-3xl
          rounded-[40px]
          border
          border-[#b9d19a]/40
          bg-[#fffdf8]
          p-8
          shadow-[0_30px_80px_-40px_rgba(13,26,18,0.25)]
          sm:p-12
          "
        >



          {/* Success Icon */}

          <div
            className="
            mx-auto
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-[#0d1a12]
            text-5xl
            text-[#b9d19a]
            shadow-lg
            "
          >
            ✓
          </div>




          <div className="mt-8 text-center">


            <p
              className="
              text-xs
              tracking-[0.35em]
              text-[#355e3b]
              "
            >
              ORDER SUCCESS
            </p>


            <h1
              className="
              mt-4
              font-serif
              text-4xl
              font-light
              text-[#0d1a12]
              "
            >
              سفارش شما ثبت شد
            </h1>


            <p
              className="
              mt-5
              leading-8
              text-[#0d1a12]/60
              "
            >
              ممنون از انتخاب شما.
              سفارش شما با موفقیت ثبت و آماده پردازش است.
            </p>


          </div>





          {
            order && (

              <div
                className="
                mt-12
                rounded-[32px]
                border
                border-[#b9d19a]/40
                bg-[#f8f5ed]
                p-8
                "
              >


                <div
                  className="
                  flex
                  justify-between
                  text-sm
                  "
                >

                  <span className="text-[#0d1a12]/60">
                    شماره سفارش
                  </span>


                  <strong
                    className="
                    text-[#355e3b]
                    "
                  >
                    {order.id}
                  </strong>


                </div>




                <div
                  className="
                  mt-5
                  flex
                  justify-between
                  text-sm
                  "
                >

                  <span className="text-[#0d1a12]/60">
                    مشتری
                  </span>


                  <strong>
                    {order.customer.name}
                  </strong>


                </div>





                <div
                  className="
                  mt-5
                  flex
                  justify-between
                  border-t
                  border-[#0d1a12]/10
                  pt-5
                  "
                >

                  <span className="text-[#0d1a12]/60">
                    مبلغ سفارش
                  </span>


                  <strong
                    className="
                    text-xl
                    text-[#355e3b]
                    "
                  >
                    {order.totalPrice.toLocaleString()}
                    تومان
                  </strong>


                </div>






                <div
                  className="
                  mt-8
                  border-t
                  border-[#0d1a12]/10
                  pt-6
                  "
                >

                  <h2
                    className="
                    text-lg
                    font-light
                    text-[#0d1a12]
                    "
                  >
                    محصولات سفارش
                  </h2>



                  <div
                    className="
                    mt-5
                    space-y-4
                    "
                  >

                    {
                      order.items.map(item=>(

                        <div
                          key={item.id}
                          className="
                          flex
                          justify-between
                          text-sm
                          "
                        >

                          <span className="text-[#0d1a12]/70">
                            {item.name}
                            {" × "}
                            {item.quantity}
                          </span>


                          <span
                            className="
                            text-[#355e3b]
                            "
                          >

                            {
                              (
                                item.price *
                                item.quantity
                              ).toLocaleString()

                            }

                            تومان

                          </span>


                        </div>

                      ))
                    }

                  </div>


                </div>



              </div>

            )
          }





          <Link
            href="/shop"
            className="
            mt-10
            block
            rounded-full
            bg-[#0d1a12]
            py-4
            text-center
            font-semibold
            text-[#f2e9d8]
            transition-all
            duration-500
            hover:bg-[#355e3b]
            "
          >
            بازگشت به فروشگاه
          </Link>



        </div>


      </Container>


    </main>

  );

}
