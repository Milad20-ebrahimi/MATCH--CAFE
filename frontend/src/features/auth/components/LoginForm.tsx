"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/features/auth/hooks/useAuth";

export default function LoginForm() {

  const router = useRouter();

  const { login } = useAuth();

  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");



  function handleLogin() {

    const success = login(
      phone,
      password
    );


    if(!success){

      setError(
        "شماره تماس یا رمز عبور اشتباه است."
      );

      return;

    }


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
        ورود به حساب
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

          onClick={handleLogin}

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

          ورود

        </button>


      </div>


    </div>

  );

}
