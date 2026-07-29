"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { getOrders } from "@/features/orders/services/order.service";
import type { Order } from "@/features/orders/types";
import { useEffect, useState } from "react";

export default function MyOrdersPage() {
  const { user } = useAuth();

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!user) return;

    const allOrders = getOrders();

    const customerOrders = allOrders.filter(
      (order) => order.customerId === user.id
    );

    setOrders(customerOrders);
  }, [user]);

  if (!user) {
    return (
      <main className="min-h-screen bg-[#f8f5ed] py-32">
        <Container>
          <div
            className="
            mx-auto
            max-w-md
            rounded-[32px]
            border
            border-[#b9d19a]/30
            bg-white/70
            p-10
            text-center
            backdrop-blur-xl
            shadow-[0_30px_80px_-40px_rgba(13,26,18,0.30)]
          "
          >
            <h1 className="text-2xl font-light text-[#0d1a12]">
              ابتدا وارد حساب شوید
            </h1>

            <Link
              href="/login"
              className="
              mt-8
              inline-flex
              rounded-full
              bg-[#0d1a12]
              px-8
              py-3
              font-medium
              text-[#f2e9d8]
              transition-all
              duration-500
              hover:bg-[#355e3b]
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
    <main className="min-h-screen bg-[#f8f5ed] py-32">
      <Container>
        <section className="mb-14 text-center">
          <p
            className="
            text-xs
            tracking-[0.35em]
            text-[#355e3b]
          "
          >
            MY ORDERS
          </p>

          <h1
            className="
            mt-5
            text-4xl
            font-light
            text-[#0d1a12]
            sm:text-5xl
          "
          >
            سفارش‌های من
          </h1>

          <p
            className="
            mt-4
            text-sm
            leading-8
            text-[#0d1a12]/60
          "
          >
            تمام سفارش‌های ثبت‌شده شما در یک نگاه.
          </p>
        </section>

        {orders.length === 0 ? (
          <div
            className="
            rounded-[32px]
            border
            border-[#b9d19a]/30
            bg-white/70
            p-12
            text-center
            backdrop-blur-xl
            shadow-[0_30px_80px_-40px_rgba(13,26,18,0.30)]
          "
          >
            <h2 className="text-2xl font-light text-[#0d1a12]">
              هنوز سفارشی ثبت نکرده‌اید
            </h2>

            <p className="mt-4 text-sm leading-8 text-[#0d1a12]/60">
              اولین سفارش خود را ثبت کنید و از محصولات ویژه MATCH--CAFE لذت
              ببرید.
            </p>

            <Link
              href="/shop"
              className="
              mt-8
              inline-flex
              rounded-full
              bg-[#0d1a12]
              px-8
              py-4
              font-medium
              text-[#f2e9d8]
              transition-all
              duration-500
              hover:bg-[#355e3b]
            "
            >
              رفتن به فروشگاه
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div
                key={order.id}
                className="
                rounded-[32px]
                border
                border-[#b9d19a]/30
                bg-white/70
                p-8
                backdrop-blur-xl
                shadow-[0_30px_80px_-40px_rgba(13,26,18,0.30)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_40px_100px_-40px_rgba(13,26,18,0.40)]
              "
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-[#0d1a12]">
                      {order.id}
                    </h2>

                    <p className="mt-2 text-sm text-[#0d1a12]/50">
                      {new Date(order.createdAt).toLocaleDateString("fa-IR")}
                    </p>

                    <span
                      className="
                      mt-4
                      inline-flex
                      rounded-full
                      bg-[#b9d19a]/20
                      px-4
                      py-2
                      text-xs
                      font-medium
                      text-[#355e3b]
                    "
                    >
                      {order.status}
                    </span>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-[#0d1a12]/50">مبلغ سفارش</p>

                    <div className="mt-2 text-2xl font-semibold text-[#355e3b]">
                      {order.totalPrice.toLocaleString()} تومان
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#0d1a12]/10 pt-6">
                  <h3 className="font-medium text-[#0d1a12]">
                    محصولات سفارش
                  </h3>

                  <div className="mt-5 space-y-3">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-[#0d1a12]">{item.name}</span>

                        <span className="text-[#0d1a12]/50">
                          × {item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/track-order?id=${order.id}`}
                  className="
                  mt-8
                  inline-flex
                  rounded-full
                  bg-[#0d1a12]
                  px-8
                  py-4
                  text-sm
                  font-medium
                  text-[#f2e9d8]
                  transition-all
                  duration-500
                  hover:bg-[#355e3b]
                "
                >
                  پیگیری سفارش
                </Link>
              </div>
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}
