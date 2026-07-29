"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import { useCart } from "@/features/cart/hooks/useCart";


export default function CartPage() {

  const {
    items,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();



const totalPrice = items.reduce(
  (total, item) =>
    total + item.product.price * item.quantity,
  0
);



  return (
    <main className="min-h-screen bg-[#f8f5ed] py-32">

      <Container>


        <h1
          className="
          font-serif
          text-4xl
          font-bold
          text-[#203c27]
          "
        >
          سبد خرید
        </h1>



        {
          items.length === 0

          ?

          (
            <div
              className="
              mt-10
              rounded-3xl
              bg-white
              p-10
              text-center
              shadow
              "
            >

              <p className="text-slate-600">
                سبد خرید شما خالی است.
              </p>


              <Link
                href="/shop"
                className="
                mt-6
                inline-block
                rounded-full
                bg-[#d97706]
                px-8
                py-3
                text-white
                "
              >
                رفتن به فروشگاه
              </Link>

            </div>
          )


          :


          (

            <div
              className="
              mt-10
              grid
              gap-8
              lg:grid-cols-3
              "
            >



              {/* Products */}


              <div
                className="
                space-y-6
                lg:col-span-2
                "
              >


                {
                  items.map(item => (


                    <div
                      key={item.product.id}
                      className="
                      flex
                      flex-col
                      gap-5
                      rounded-3xl
                      bg-white
                      p-5
                      shadow
                      sm:flex-row
                      "
                    >



                      <div
                        className="
                        relative
                        h-32
                        w-full
                        overflow-hidden
                        rounded-2xl
                        sm:w-32
                        "
                      >

                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />

                      </div>





                      <div className="flex-1">


                        <h3
                          className="
                          text-lg
                          font-bold
                          text-[#203c27]
                          "
                        >
                          {item.product.name}
                        </h3>



                        <p
                          className="
                          mt-2
                          text-sm
                          text-slate-500
                          "
                        >
                          {item.product.price.toLocaleString()} تومان
                        </p>





                        <div
                          className="
                          mt-5
                          flex
                          items-center
                          gap-3
                          "
                        >


                          <button
                          onClick={() => decreaseQuantity(item.product.id)}
                            className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-[#f8f5ed]
                            text-lg
                            "
                          >
                            -
                          </button>



                          <span
                            className="
                            font-bold
                            text-[#203c27]
                            "
                          >
                            {item.quantity}
                          </span>




                          <button
                            onClick={() => increaseQuantity(item.product.id)}
                            className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-[#355e3b]
                            text-lg
                            text-white
                            "
                          >
                            +
                          </button>



                        </div>


                      </div>





                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="
                        h-fit
                        rounded-full
                        bg-red-50
                        px-4
                        py-2
                        text-sm
                        text-red-600
                        "
                      >
                        حذف
                      </button>



                    </div>


                  ))
                }



              </div>







              {/* Summary */}


              <div
                className="
                h-fit
                rounded-3xl
                bg-white
                p-6
                shadow
                "
              >


                <h2
                  className="
                  text-xl
                  font-bold
                  text-[#203c27]
                  "
                >
                  خلاصه سفارش
                </h2>




                <div
                  className="
                  mt-6
                  flex
                  justify-between
                  "
                >

                  <span>
                    مجموع:
                  </span>


                  <strong
                    className="
                    text-[#203c27]
                    "
                  >
                    {totalPrice.toLocaleString()} تومان
                  </strong>


                </div>





                <Link
                  href="/checkout"
                  className="
                  mt-8
                  block
                  w-full
                  rounded-full
                  bg-[#d97706]
                  py-4
                  text-center
                  font-semibold
                  text-white
                  transition
                  hover:scale-105
                  "
                >
                  ادامه پرداخت
                </Link>



              </div>



            </div>

          )

        }



      </Container>


    </main>
  );
}
