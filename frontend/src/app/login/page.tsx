"use client";

import Link from "next/link";

import Container from "@/components/shared/Container";
import LoginForm from "@/features/auth/components/LoginForm";

export default function LoginPage(){

  return (

    <main
      className="
      min-h-screen
      bg-[#f8f5ed]
      py-32
      "
    >

      <Container>

        <LoginForm />


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

          حساب ندارید؟

          {" "}

          <Link
            href="/register"
            className="
            font-semibold
            text-[#355e3b]
            "
          >
            ثبت‌نام
          </Link>

        </p>


      </Container>

    </main>

  );

}
