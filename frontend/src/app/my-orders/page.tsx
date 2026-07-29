"use client";
import Link from "next/link";
import Container from "@/components/shared/Container";
import { useAuth } from "@/features/auth/hooks/useAuth";
import {
  getOrders,
} from "@/features/orders/services/order.service";
import type {
  Order,
} from "@/features/orders/types";
import { useEffect, useState } from "react";
export default function MyOrdersPage(){
  const { user } = useAuth();
  const [orders,setOrders] =
    useState<Order[]>([]);
  useEffect(()=>{
    if(!user){
      return;
    }
    const allOrders = getOrders();
const customerOrders =
  allOrders.filter(
    order =>
      order.customerId === user.id
  );
    setOrders(customerOrders);
  },[user]);
  if(!user){
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
            max-w-md
            rounded-3xl
            bg-white
            p-10
            text-center
            shadow
            "
          >
            <h1
              className="
              text-2xl
              font-bold
              text-[#203c27]
              "
            >
              ابتدا وارد حساب شوید
            </h1>
            <Link
              href="/login"
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
              ورود
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
        <h1
          className="
          font-serif
          text-4xl
          font-bold
          text-[#203c27]
          "
        >
          سفارش‌های من
        </h1>
        {
          orders.length === 0
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
                هنوز سفارشی ثبت نکرده‌اید.
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
              space-y-6
              "
            >
              {
                orders.map(order => (
                  <div
                    key={order.id}
                    className="
                    rounded-3xl
                    bg-white
                    p-6
                    shadow
                    "
                  >
                    <div
                      className="
                      flex
                      flex-col
                      gap-3
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      "
                    >
                      <div>
                        <h2
                          className="
                          text-xl
                          font-bold
                          text-[#203c27]
                          "
                        >
                          {order.id}
                        </h2>
                        <p className="mt-2 text-sm text-slate-500">
                          {
                            new Date(
                              order.createdAt
                            ).toLocaleDateString(
                              "fa-IR"
                            )
                          }
                        </p>
                      </div>
                      <div
                        className="
                        font-bold
                        text-[#d97706]
                        "
                      >
                        {
                          order.totalPrice.toLocaleString()
                        }
                        تومان
                      </div>
                    </div>
                    <div
                      className="
                      mt-6
                      border-t
                      pt-5
                      "
                    >
                      <h3
                        className="
                        font-semibold
                        text-[#203c27]
                        "
                      >
                        محصولات:
                      </h3>
                      <ul
                        className="
                        mt-3
                        space-y-2
                        text-sm
                        text-slate-600
                        "
                      >
                        {
                          order.items.map(item => (
                            <li key={item.id}>
                              {item.name}
                              {" × "}
                              {item.quantity}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                    <Link
                      href={`/track-order?id=${order.id}`}
                      className="
                      mt-6
                      inline-block
                      rounded-full
                      bg-[#355e3b]
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      "
                    >
                      پیگیری سفارش
                    </Link>
                  </div>
                ))
              }
            </div>
          )
        }
      </Container>
    </main>
  );
}
