"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/shared/Container";
import { useAuth } from "@/features/auth/hooks/useAuth";
import {
  getOrders,
  updateOrderStatus,
} from "@/features/orders/services/order.service";
import type {
  Order,
  OrderStatus,
} from "@/features/orders/types";
const statusLabels: Record<OrderStatus,string> = {
  pending: "در انتظار بررسی",
  preparing: "در حال آماده‌سازی",
  ready: "آماده ارسال",
  completed: "تکمیل شده",
  cancelled: "لغو شده",
};
export default function AdminOrdersPage(){
  const router = useRouter();
  const { user } = useAuth();
  const [orders,setOrders] =
    useState<Order[]>([]);
  useEffect(()=>{
    if(!user){
      router.push("/admin/login");
      return;
    }
    if(user.role !== "admin"){
      router.push("/");
      return;
    }
    setOrders(
      getOrders()
    );
  },[user,router]);
  function changeStatus(
    id:string,
    status:OrderStatus
  ){
    updateOrderStatus(
      id,
      status
    );
    setOrders(
      getOrders()
    );
  }
  if(
    !user ||
    user.role !== "admin"
  ){
    return null;
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
          مدیریت سفارش‌ها
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
              سفارشی وجود ندارد.
            </div>
          )
          :
          (
            <div
              className="
              mt-10
              space-y-8
              "
            >
            {
              orders.map(order=>(
                <div
                  key={order.id}
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
                    flex-col
                    gap-4
                    border-b
                    pb-5
                    md:flex-row
                    md:items-center
                    md:justify-between
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
                        سفارش {order.id}
                      </h2>
                      <p
                        className="
                        mt-2
                        text-sm
                        text-slate-500
                        "
                      >
                        {
                          new Date(
                            order.createdAt
                          )
                          .toLocaleString("fa-IR")
                        }
                      </p>
                    </div>
                    <select
                      value={order.status}
                      onChange={(e)=>
                        changeStatus(
                          order.id,
                          e.target.value as OrderStatus
                        )
                      }
                      className="
                      rounded-full
                      border
                      px-5
                      py-3
                      outline-none
                      "
                    >
                      <option value="pending">
                        در انتظار بررسی
                      </option>
                      <option value="preparing">
                        در حال آماده‌سازی
                      </option>
                      <option value="ready">
                        آماده ارسال
                      </option>
                      <option value="completed">
                        تکمیل شده
                      </option>
                    </select>
                  </div>
                  <div
                    className="
                    mt-6
                    grid
                    gap-8
                    md:grid-cols-2
                    "
                  >
                    <div>
                      <h3
                        className="
                        font-bold
                        text-[#203c27]
                        "
                      >
                        مشتری
                      </h3>
                      <p className="mt-3">
                        {order.customer.name}
                      </p>
                      <p className="mt-2 text-sm text-slate-500">
                        {order.customer.phone}
                      </p>
                      <p className="mt-2 text-sm text-slate-500">
                        {order.customer.address}
                      </p>
                    </div>
                    <div>
                      <h3
                        className="
                        font-bold
                        text-[#203c27]
                        "
                      >
                        محصولات
                      </h3>
                      <div
                        className="
                        mt-3
                        space-y-3
                        "
                      >
                        {
                          order.items.map(item=>(
                            <div
                              key={item.id}
                              className="
                              flex
                              justify-between
                              rounded-xl
                              bg-[#f8f5ed]
                              px-4
                              py-3
                              text-sm
                              "
                            >
                              <span>
                                {item.name}
                                {" × "}
                                {item.quantity}
                              </span>
                              <span>
                                {
                                  (
                                    item.price *
                                    item.quantity
                                  )
                                  .toLocaleString()
                                }
                                {" تومان"}
                              </span>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                    mt-6
                    flex
                    justify-between
                    border-t
                    pt-5
                    font-bold
                    text-[#203c27]
                    "
                  >
                    <span>
                      وضعیت:
                      {" "}
                      {statusLabels[order.status]}
                    </span>
                    <span>
                      {
                        order.totalPrice.toLocaleString()
                      }
                      {" تومان"}
                    </span>
                  </div>
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
