"use client";

import Link from "next/link";

import Container from "@/components/shared/Container";
import RegisterForm from "@/features/auth/components/RegisterForm";


export default function RegisterPage(){

  return (

    <main
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#f8f5ed]
      py-32
      "
    >

      <div
        className="
        absolute
        -left-32
        -top-32
        h-96
        w-96
        rounded-full
        bg-[#b9d19a]/30
        blur-3xl
        "
      />


      <div
        className="
        absolute
        -right-40
        bottom-0
        h-96
        w-96
        rounded-full
        bg-[#355e3b]/10
        blur-3xl
        "
      />


      <Container>

        <div className="relative z-10">


          <div
            className="
            mb-10
            text-center
            "
          >

            <p
              className="
              text-xs
              tracking-[0.45em]
              text-[#355e3b]
              "
            >
              MATCH--CAFE
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
              شروع تجربه جدید
            </h1>


            <p
              className="
              mt-4
              text-sm
              leading-8
              text-[#0d1a12]/60
              "
            >
              حساب خود را بسازید و به دنیای
              نوشیدنی‌های تخصصی MATCH وارد شوید.
            </p>


          </div>


          <RegisterForm />


          <p
            className="
            mx-auto
            mt-8
            max-w-md
            text-center
            text-sm
            text-[#0d1a12]/50
            "
          >

            قبلاً حساب دارید؟

            {" "}

            <Link
              href="/login"
              className="
              font-semibold
              text-[#355e3b]
              transition
              hover:text-[#0d1a12]
              "
            >
              ورود
            </Link>


          </p>


        </div>


      </Container>


    </main>

  );

}
