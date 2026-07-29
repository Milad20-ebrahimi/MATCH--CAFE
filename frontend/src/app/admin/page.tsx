"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Container from "@/components/shared/Container";

import { useAuth } from "@/features/auth/hooks/useAuth";

import {
  getOrders,
} from "@/features/orders/services/order.service";

import type {
  Order,
} from "@/features/orders/types";


export default function AdminDashboardPage(){

  const router = useRouter();

  const {
    user,
  } = useAuth();


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




  if(
    !user ||
    user.role !== "admin"
  ){

    return null;

  }




  const totalOrders =
    orders.length;



  const pendingOrders =
    orders.filter(
      order =>
        order.status === "pending"
    ).length;



  const preparingOrders =
    orders.filter(
      order =>
        order.status === "preparing"
    ).length;



  const totalSales =
    orders.reduce(
      (sum,order)=>
        sum + order.totalPrice,
      0
    );



  const cards = [

    {
      title:"کل سفارش‌ها",
      value: totalOrders,
    },

    {
      title:"در انتظار بررسی",
      value: pendingOrders,
    },

    {
      title:"در حال آماده‌سازی",
      value: preparingOrders,
    },

    {
      title:"فروش کل",
      value:
        totalSales.toLocaleString()
        + " تومان",
    },

  ];




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
          داشبورد مدیریت
        </h1>



        <div
          className="
          mt-10
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
          "
        >

          {
            cards.map(card=>(

              <div
                key={card.title}
                className="
                rounded-3xl
                bg-white
                p-6
                shadow-xl
                "
              >

                <p
                  className="
                  text-sm
                  text-slate-500
                  "
                >
                  {card.title}
                </p>


                <p
                  className="
                  mt-4
                  text-3xl
                  font-bold
                  text-[#203c27]
                  "
                >
                  {card.value}
                </p>


              </div>

            ))
          }


        </div>



        <div
          className="
          mt-12
          rounded-3xl
          bg-white
          p-8
          shadow-xl
          "
        >

          <div
            className="
            flex
            justify-between
            items-center
            "
          >

            <h2
              className="
              text-xl
              font-bold
              text-[#203c27]
              "
            >
              آخرین سفارش‌ها
            </h2>


            <button
              onClick={()=>
                router.push("/admin/orders")
              }
              className="
              rounded-full
              bg-[#355e3b]
              px-5
              py-2
              text-white
              "
            >
              مشاهده همه
            </button>


          </div>



          <div
            className="
            mt-6
            space-y-4
            "
          >

          {
            orders
            .slice(-5)
            .reverse()
            .map(order=>(

              <div
                key={order.id}
                className="
                flex
                justify-between
                rounded-2xl
                bg-[#f8f5ed]
                p-4
                "
              >

                <div>

                  <p
                    className="
                    font-bold
                    text-[#203c27]
                    "
                  >
                    {order.id}
                  </p>


                  <p
                    className="
                    text-sm
                    text-slate-500
                    "
                  >
                    {order.customer.name}
                  </p>

                </div>


                <div
                  className="
                  text-left
                  "
                >

                  <p
                    className="
                    font-bold
                    "
                  >
                    {
                      order.totalPrice
                      .toLocaleString()
                    }
                    {" تومان"}
                  </p>


                  <p
                    className="
                    text-sm
                    text-slate-500
                    "
                  >
                    {order.status}
                  </p>

                </div>


              </div>

            ))
          }


          {
            orders.length === 0 && (

              <p
                className="
                text-center
                text-slate-500
                "
              >
                هنوز سفارشی ثبت نشده است.
              </p>
            )}
          </div>
        </div>
      </Container>
    </main>
  );}
