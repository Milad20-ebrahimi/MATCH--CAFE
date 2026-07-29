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


        {/* Header */}

        <section className="mb-14 text-center">

          <p
            className="
            text-xs
            tracking-[0.35em]
            text-[#355e3b]
            "
          >
            MATCHA CART
          </p>


          <h1
            className="
            mt-4
            text-4xl
            font-light
            text-[#0d1a12]
            sm:text-5xl
            "
          >
            سبد خرید شما
          </h1>


          <p
            className="
            mx-auto
            mt-5
            max-w-xl
            text-sm
            leading-8
            text-[#0d1a12]/60
            "
          >
            محصولات انتخاب شده برای تجربه‌ای آرام و متفاوت.
          </p>


        </section>





        {
          items.length === 0 ? (

            <div
              className="
              rounded-[40px]
              border
              border-[#0d1a12]/10
              bg-white/70
              p-12
              text-center
              shadow-[0_30px_80px_-40px_rgba(13,26,18,0.35)]
              backdrop-blur-xl
              "
            >

              <h2
                className="
                text-2xl
                font-light
                text-[#0d1a12]
                "
              >
                سبد خرید خالی است
              </h2>


              <p
                className="
                mt-4
                text-sm
                text-[#0d1a12]/60
                "
              >
                هنوز محصولی انتخاب نکرده‌اید.
              </p>


              <Link
                href="/shop"
                className="
                mt-8
                inline-flex
                rounded-full
                bg-[#0d1a12]
                px-8
                py-3
                text-sm
                text-[#f2e9d8]
                transition
                hover:bg-[#203c27]
                "
              >
                رفتن به فروشگاه
              </Link>


            </div>


          ) : (


            <div
              className="
              grid
              gap-10
              lg:grid-cols-3
              "
            >



              {/* Items */}


              <div
                className="
                space-y-6
                lg:col-span-2
                "
              >


                {
                  items.map((item)=>(

                    <div
                      key={item.product.id}
                      className="
                      flex
                      flex-col
                      gap-6
                      rounded-[32px]
                      border
                      border-[#0d1a12]/10
                      bg-white/70
                      p-5
                      shadow-[0_25px_70px_-40px_rgba(13,26,18,0.4)]
                      backdrop-blur-xl
                      sm:flex-row
                      "
                    >



                      <div
                        className="
                        relative
                        h-36
                        w-full
                        overflow-hidden
                        rounded-3xl
                        sm:w-36
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
                          text-xl
                          font-light
                          text-[#0d1a12]
                          "
                        >
                          {item.product.name}
                        </h3>


                        <p
                          className="
                          mt-3
                          text-sm
                          text-[#355e3b]
                          "
                        >
                          {item.product.price.toLocaleString()} تومان
                        </p>



                        <div
                          className="
                          mt-6
                          flex
                          items-center
                          gap-4
                          "
                        >

                          <button
                            onClick={() =>
                              decreaseQuantity(item.product.id)
                            }
                            className="
                            h-10
                            w-10
                            rounded-full
                            bg-[#f8f5ed]
                            text-lg
                            text-[#0d1a12]
                            transition
                            hover:bg-[#b9d19a]
                            "
                          >
                            −
                          </button>


                          <span
                            className="
                            text-lg
                            font-medium
                            text-[#0d1a12]
                            "
                          >
                            {item.quantity}
                          </span>


                          <button
                            onClick={() =>
                              increaseQuantity(item.product.id)
                            }
                            className="
                            h-10
                            w-10
                            rounded-full
                            bg-[#0d1a12]
                            text-lg
                            text-[#f2e9d8]
                            transition
                            hover:bg-[#203c27]
                            "
                          >
                            +
                          </button>


                        </div>


                      </div>




                      <button
                        onClick={() =>
                          removeFromCart(item.product.id)
                        }
                        className="
                        h-fit
                        rounded-full
                        bg-red-50
                        px-5
                        py-2
                        text-sm
                        text-red-600
                        transition
                        hover:bg-red-100
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
  rounded-[32px]
  border
  border-[#b9d19a]/40
  bg-[#fffdf8]
  p-8
  text-[#0d1a12]
  shadow-[0_30px_80px_-40px_rgba(13,26,18,0.25)]
  "
>


                <p
                  className="
                  text-xs
                  tracking-[0.3em]
                  text-[#b9d19a]
                  "
                >
                  ORDER SUMMARY
                </p>


<h2
  className="
  text-xl
  font-light
  text-[#0d1a12]
  "
>
  خلاصه سفارش
</h2>

<div
  className="
  mt-6
  flex
  justify-between
  border-t
  border-[#0d1a12]/10
  pt-6
  "
>

<span className="text-[#0d1a12]/60">
  مجموع:
</span>

<strong
  className="
  text-xl
  text-[#355e3b]
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
