"use client";

import Link from "next/link";

import Container from "@/components/shared/Container";
import RegisterForm from "@/features/auth/components/RegisterForm";


export default function RegisterPage(){

  return (

    <main
      className="
      min-h-screen
      bg-[#f8f5ed]
      py-32
      "
    >

      <Container>


        <RegisterForm />


        <p
          className="
          mx-auto
          mt-6
          max-w-md
          text-center
          text-sm
          text-slate-500
          "
        >

          قبلاً حساب دارید؟

          {" "}

          <Link
            href="/login"
            className="
            font-semibold
            text-[#355e3b]
            "
          >
            ورود
          </Link>

        </p>


      </Container>


    </main>

  );

}
