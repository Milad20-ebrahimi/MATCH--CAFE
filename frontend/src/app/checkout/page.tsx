"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Container from "@/components/shared/Container";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { useCart } from "@/features/cart/hooks/useCart";

import {
  saveOrder,
  createOrderId,
} from "@/features/orders/services/order.service";

import type {
  OrderStatus,
} from "@/features/orders/types";


export default function CheckoutPage() {

  const router = useRouter();

  const { user } = useAuth();

  const {
    items,
    clearCart,
  } = useCart();


  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");


  const totalPrice = items.reduce(
    (total,item)=>
      total +
      item.product.price *
      item.quantity,
    0
  );



  function submitOrder(){

    if(!user){

      router.push("/login");

      return;

    }



    const order = {

      id:createOrderId(),

      createdAt:new Date().toISOString(),

      items:items.map(item=>({

        id:item.product.id,

        name:item.product.name,

        price:item.product.price,

        quantity:item.quantity,

      })),

      totalPrice,

      status:"pending" as OrderStatus,

      customerId:user.id,

      customer:{

        name,

        phone,

        address,

      },

    };



    saveOrder(order);

    clearCart();

    router.push("/order-success");

  }





  if(items.length===0){

    return (

      <main className="min-h-screen bg-[#f8f5ed] py-32">

        <Container>

          <div
            className="
            rounded-[40px]
            border
            border-[#0d1a12]/10
            bg-white/70
            p-12
            text-center
            backdrop-blur-xl
            "
          >

            <p className="text-[#0d1a12]/60">
              سبد خرید شما خالی است.
            </p>


            <Link

              href="/shop"

              className="
              mt-6
              inline-block
              rounded-full
              bg-[#0d1a12]
              px-8
              py-3
              text-[#f2e9d8]
              "
            >

              بازگشت به فروشگاه

            </Link>


          </div>

        </Container>

      </main>

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


<section className="mb-14">

<p
className="
text-xs
tracking-[0.35em]
text-[#355e3b]
"
>
CHECKOUT
</p>


<h1
className="
mt-4
font-serif
text-5xl
font-light
text-[#0d1a12]
"
>
تکمیل سفارش
</h1>


<p
className="
mt-5
max-w-xl
leading-8
text-[#0d1a12]/60
"
>
اطلاعات ارسال را وارد کنید و سفارش خود را نهایی کنید.
</p>


</section>



<div
className="
grid
gap-10
lg:grid-cols-2
"
>



{/* Customer */}

<div
className="
rounded-[40px]
border
border-[#0d1a12]/10
bg-white/70
p-10
backdrop-blur-xl
shadow-[0_30px_80px_-40px_rgba(13,26,18,0.35)]
"
>


<h2
className="
text-2xl
font-light
text-[#0d1a12]
"
>
اطلاعات ارسال
</h2>



<div className="mt-8 space-y-5">


<input

value={name}

onChange={(e)=>setName(e.target.value)}

placeholder="نام و نام خانوادگی"

className="
w-full
rounded-2xl
border
border-[#0d1a12]/10
bg-white
px-5
py-4
outline-none
focus:border-[#b9d19a]
focus:ring-4
focus:ring-[#b9d19a]/20
"

/>



<input

value={phone}

onChange={(e)=>setPhone(e.target.value)}

placeholder="شماره تماس"

className="
w-full
rounded-2xl
border
border-[#0d1a12]/10
bg-white
px-5
py-4
outline-none
focus:border-[#b9d19a]
focus:ring-4
focus:ring-[#b9d19a]/20
"

/>



<textarea

value={address}

onChange={(e)=>setAddress(e.target.value)}

rows={5}

placeholder="آدرس کامل"

className="
w-full
rounded-2xl
border
border-[#0d1a12]/10
bg-white
px-5
py-4
outline-none
focus:border-[#b9d19a]
focus:ring-4
focus:ring-[#b9d19a]/20
"

/>


</div>


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

  <h2
    className="
    text-xl
    font-light
    text-[#0d1a12]
    "
  >
    خلاصه سفارش
  </h2>


  <div className="mt-6 space-y-4">

    {items.map((item) => (

      <div
        key={item.product.id}
        className="
        flex
        justify-between
        text-sm
        "
      >

        <span className="text-[#0d1a12]/70">
          {item.product.name}
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
              item.product.price *
              item.quantity
            ).toLocaleString()
          }
          تومان
        </span>

      </div>

    ))}

  </div>



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



  <button
    onClick={submitOrder}
    className="
    mt-8
    w-full
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
    ثبت سفارش
  </button>


</div>


</div>


</Container>


</main>


);

}
