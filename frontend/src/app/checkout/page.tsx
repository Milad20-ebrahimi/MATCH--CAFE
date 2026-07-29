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
export default function CheckoutPage(){
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
  (total, item) =>
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
  id: createOrderId(),
  createdAt: new Date().toISOString(),
  items: items.map((item) => ({
    id: item.product.id,
    name: item.product.name,
    price: item.product.price,
    quantity: item.quantity,
  })),
  totalPrice,
  status: "pending" as OrderStatus,
  customerId: user.id,
  customer: {
    name,
    phone,
    address,
  },
};
    saveOrder(order);
    clearCart();
    router.push("/order-success");
  }
  if(items.length === 0){
    return (
      <main className="min-h-screen bg-[#f8f5ed] py-32">
        <Container>
          <div className="
          rounded-3xl
          bg-white
          p-10
          text-center
          shadow
          ">
            <p>
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
              بازگشت به فروشگاه
            </Link>
          </div>
        </Container>
      </main>
    );
  }
  return (
    <main className="
    min-h-screen
    bg-[#f8f5ed]
    py-32
    ">
      <Container>
        <h1 className="
        font-serif
        text-4xl
        font-bold
        text-[#203c27]
        ">
          تسویه حساب
        </h1>
        <div className="
        mt-10
        grid
        gap-8
        lg:grid-cols-2
        ">
          <div className="
          rounded-3xl
          bg-white
          p-8
          shadow
          ">
            <h2 className="
            text-xl
            font-bold
            text-[#203c27]
            ">
              اطلاعات ارسال
            </h2>
            <div className="
            mt-6
            space-y-5
            ">
              <input
                value={name}
                onChange={(e)=>
                  setName(e.target.value)
                }
                placeholder="نام و نام خانوادگی"
                className="
                w-full
                rounded-2xl
                border
                px-5
                py-4
                "
              />
              <input
                value={phone}
                onChange={(e)=>
                  setPhone(e.target.value)
                }
                placeholder="شماره تماس"
                className="
                w-full
                rounded-2xl
                border
                px-5
                py-4
                "
              />
              <textarea
                value={address}
                onChange={(e)=>
                  setAddress(e.target.value)
                }
                placeholder="آدرس کامل"
                rows={5}
                className="
                w-full
                rounded-2xl
                border
                px-5
                py-4
                "
              />
            </div>
          </div>
          <div className="
          rounded-3xl
          bg-white
          p-8
          shadow
          h-fit
          ">
            <h2 className="
            text-xl
            font-bold
            text-[#203c27]
            ">
              خلاصه سفارش
            </h2>
            <div className="mt-6 space-y-4">
              {
                items.map(item=>(
                  <div
                    key={item.product.id}
                    className="
                    flex
                    justify-between
                    "
                  >
                    <span>
                      {item.product.name}
                      {" × "}
                      {item.quantity}
                    </span>
                    <span>
                      {
                        (
                          item.product.price *
                          item.quantity
                        )
                        .toLocaleString()
                      }
                      تومان
                    </span>
                  </div>
                ))
              }
            </div>
            <div className="
            mt-6
            border-t
            pt-5
            flex
            justify-between
            font-bold
            ">
              <span>
                مجموع
              </span>
              <span>
                {
                  totalPrice.toLocaleString()
                }
                تومان
              </span>
            </div>
            <button
              onClick={submitOrder}
              className="
              mt-8
              w-full
              rounded-full
              bg-[#d97706]
              py-4
              font-semibold
              text-white
              transition
              hover:scale-105
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
