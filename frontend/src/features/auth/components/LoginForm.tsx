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


    if (!success) {

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
      rounded-[40px]
      border
      border-[#b9d19a]/40
      bg-white/70
      p-8
      shadow-[0_30px_80px_-40px_rgba(13,26,18,0.35)]
      backdrop-blur-xl
      sm:p-10
      "
    >


      <div className="text-center">

        <p
          className="
          text-xs
          tracking-[0.3em]
          text-[#355e3b]
          "
        >
          ACCOUNT
        </p>


        <h2
          className="
          mt-4
          text-2xl
          font-light
          text-[#0d1a12]
          "
        >
          ورود به حساب
        </h2>

      </div>



      {
        error && (

          <p
            className="
            mt-6
            rounded-2xl
            bg-red-50
            px-4
            py-3
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
          border-[#0d1a12]/10
          bg-white/80
          px-5
          py-4
          text-sm
          outline-none
          transition
          placeholder:text-[#0d1a12]/30
          focus:border-[#b9d19a]
          focus:ring-4
          focus:ring-[#b9d19a]/20
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
          border-[#0d1a12]/10
          bg-white/80
          px-5
          py-4
          text-sm
          outline-none
          transition
          placeholder:text-[#0d1a12]/30
          focus:border-[#b9d19a]
          focus:ring-4
          focus:ring-[#b9d19a]/20
          "
        />



        <button
          onClick={handleLogin}
          className="
          mt-4
          w-full
          rounded-full
          bg-[#0d1a12]
          py-4
          text-sm
          font-medium
          text-[#f2e9d8]
          transition-all
          duration-500
          hover:bg-[#355e3b]
          hover:shadow-[0_15px_35px_-15px_rgba(13,26,18,0.5)]
          "
        >
          ورود
        </button>


      </div>


    </div>

  );
}
