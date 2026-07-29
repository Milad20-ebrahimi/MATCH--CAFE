"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/features/auth/hooks/useAuth";


export default function RegisterForm(){

  const router = useRouter();

  const { register } = useAuth();


  const [name,setName] = useState("");

  const [phone,setPhone] = useState("");

  const [password,setPassword] = useState("");

  const [error,setError] = useState("");



  function handleRegister(){


    if(
      !name ||
      !phone ||
      !password
    ){

      setError(
        "لطفاً همه اطلاعات را وارد کنید."
      );

      return;

    }



    register({

      name,

      phone,

      password,

    });



    router.push("/");


  }




  return (

    <div
      className="
      mx-auto
      max-w-md
      rounded-3xl
      bg-white
      p-8
      shadow-xl
      "
    >


      <h1
        className="
        text-center
        font-serif
        text-3xl
        font-bold
        text-[#203c27]
        "
      >
        ساخت حساب کاربری
      </h1>



      {
        error && (

          <p
            className="
            mt-5
            rounded-xl
            bg-red-50
            p-3
            text-center
            text-sm
            text-red-600
            "
          >

            {error}

          </p>

        )
      }



      <div
        className="
        mt-8
        space-y-5
        "
      >


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
          outline-none
          focus:border-[#355e3b]
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
          outline-none
          focus:border-[#355e3b]
          "

        />



        <input

          type="password"

          value={password}

          onChange={(e)=>
            setPassword(e.target.value)
          }

          placeholder="رمز عبور"

          className="
          w-full
          rounded-2xl
          border
          px-5
          py-4
          outline-none
          focus:border-[#355e3b]
          "

        />



        <button

          onClick={handleRegister}

          className="
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

          ثبت‌نام

        </button>


      </div>


    </div>

  );

}
