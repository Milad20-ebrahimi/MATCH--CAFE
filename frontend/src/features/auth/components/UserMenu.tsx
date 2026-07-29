"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "../hooks/useAuth";


export default function UserMenu(){

  const router = useRouter();

  const {
    user,
    logout,
    isAdmin,
  } = useAuth();


  function handleLogout(){

    logout();

    router.push("/login");

  }


  if(!user){

    return (

      <div className="flex gap-3">

        <Link
          href="/login"
          className="
          rounded-full
          border
          border-[#355e3b]
          px-5
          py-2
          text-sm
          text-[#355e3b]
          "
        >
          ورود
        </Link>


        <Link
          href="/register"
          className="
          rounded-full
          bg-[#d97706]
          px-5
          py-2
          text-sm
          text-white
          "
        >
          ثبت‌نام
        </Link>

      </div>

    );

  }



  return (

    <div className="flex items-center gap-4">


      <div className="text-right">

        <p
          className="
          text-sm
          font-semibold
          text-[#203c27]
          "
        >
          {user.name}
        </p>


        {
          isAdmin() && (

            <span
              className="
              text-xs
              text-[#d97706]
              "
            >
              مدیر
            </span>

          )
        }

      </div>



      <Link
        href="/account"
        className="
        rounded-full
        border
        px-4
        py-2
        text-sm
        "
      >
        حساب
      </Link>



      <button

        onClick={handleLogout}

        className="
        rounded-full
        bg-red-50
        px-4
        py-2
        text-sm
        text-red-600
        "

      >
        خروج

      </button>


    </div>

  );

}
