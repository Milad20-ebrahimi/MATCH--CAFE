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
    <main className="min-h-screen bg-[#f8f5ed] py-32">
      <Container>
        <div
          className="
          mx-auto
          max-w-2xl
          rounded-[2rem]
          bg-white
          p-10
          shadow-xl
          "
        >
          <div
            className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-[#355e3b]
            text-4xl
            text-white
            "
          >
            ✓
          </div>
          <h1
            className="
            mt-8
            text-center
            font-serif
            text-3xl
            font-bold
            text-[#203c27]
            "
          >
            سفارش شما ثبت شد
          </h1>
          <p
            className="
            mt-4
            text-center
            leading-8
            text-slate-600
            "
          >
            از خرید شما ممنونیم.
            سفارش شما با موفقیت ثبت شد.
          </p>
          {
            order && (

              <div
                className="
                mt-10
                rounded-3xl
                bg-[#f8f5ed]
                p-6
                "
              >
                <div
                  className="
                  flex
                  justify-between
                  "
                >
                  <span>
                    شماره سفارش:
                  </span>
                  <strong className="text-[#355e3b]">
                    {order.id}
                  </strong>
                </div>
                <div
                  className="
                  mt-4
                  flex
                  justify-between
                  "
                >
                  <span>
                    مشتری:
                  </span>
                  <strong>
                    {order.customer.name}
                  </strong>
                </div>
                <div
                  className="
                  mt-4
                  flex
                  justify-between
                  "
                >
                  <span>
                    مبلغ پرداختی:
                  </span>
                  <strong>
                    {order.totalPrice.toLocaleString()} تومان
                  </strong>
                </div>
                <div className="mt-8 border-t pt-5">
                  <h2
                    className="
                    font-bold
                    text-[#203c27]
                    "
                  >
                    محصولات سفارش
                  </h2>
                  <div className="mt-4 space-y-3">
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
                          <span>
                            {item.name} × {item.quantity}
                          </span>
                          <span>
                            {
                              (
                                item.price *
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
                </div>
              </div>
            )
          }
          <Link
            href="/shop"
            className="
            mt-8
            block
            rounded-full
            bg-[#d97706]
            px-8
            py-4
            text-center
            font-semibold
            text-white
            transition
            hover:scale-105
            "
          >
            بازگشت به فروشگاه
          </Link>
        </div>
      </Container>
    </main>
  );
}
