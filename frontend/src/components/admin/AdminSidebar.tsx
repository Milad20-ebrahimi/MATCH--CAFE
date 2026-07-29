"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/features/auth/hooks/useAuth";


export default function AdminSidebar(){

  const router = useRouter();

  const {
    logout,
  } = useAuth();



  function handleLogout(){

    logout();

    router.push("/admin/login");

  }



  return (

    <aside
      className="
      w-full
      rounded-3xl
      bg-[#203c27]
      p-6
      text-white
      lg:w-72
      "
    >

      <h2
        className="
        text-xl
        font-bold
        "
      >
        پنل مدیریت
      </h2>



      <nav
        className="
        mt-8
        space-y-3
        "
      >

        <Link
          href="/admin"
          className="
          block
          rounded-xl
          px-4
          py-3
          transition
          hover:bg-white/10
          "
        >
          داشبورد
        </Link>



        <Link
          href="/admin/orders"
          className="
          block
          rounded-xl
          px-4
          py-3
          transition
          hover:bg-white/10
          "
        >
          سفارش‌ها
        </Link>



        <Link
          href="/admin/products"
          className="
          block
          rounded-xl
          px-4
          py-3
          transition
          hover:bg-white/10
          "
        >
          محصولات
        </Link>



        <Link
          href="/admin/customers"
          className="
          block
          rounded-xl
          px-4
          py-3
          transition
          hover:bg-white/10
          "
        >
          مشتری‌ها
        </Link>


      </nav>




      <button
        onClick={handleLogout}
        className="
        mt-10
        w-full
        rounded-full
        bg-[#d97706]
        py-3
        font-semibold
        transition
        hover:scale-105
        "
      >
        خروج
      </button>


    </aside>

  );

}
