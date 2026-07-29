"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Container from "@/components/shared/Container";
import { useAuth } from "@/features/auth/hooks/useAuth";



export default function AccountPage(){


  const router = useRouter();


  const {
    user,
    logout,
  } = useAuth();





  function handleLogout(){


    logout();

    router.push("/login");


  }





  if(!user){


    return (

      <main
        className="
        min-h-screen
        bg-[#f8f5ed]
        py-32
        "
      >

        <Container>


          <div
            className="
            mx-auto
            max-w-md
            rounded-3xl
            bg-white
            p-10
            text-center
            shadow-xl
            "
          >


            <h1
              className="
              text-2xl
              font-bold
              text-[#203c27]
              "
            >
              وارد حساب خود شوید
            </h1>



            <Link
              href="/login"
              className="
              mt-6
              inline-block
              rounded-full
              bg-[#d97706]
              px-8
              py-3
              text-white
              "
            >
              ورود
            </Link>


          </div>


        </Container>


      </main>

    );


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


        <div
          className="
          mx-auto
          max-w-2xl
          "
        >



          <h1
            className="
            font-serif
            text-4xl
            font-bold
            text-[#203c27]
            "
          >
            حساب کاربری
          </h1>







          <div
            className="
            mt-10
            rounded-3xl
            bg-white
            p-8
            shadow-xl
            "
          >





            <div
              className="
              rounded-2xl
              bg-[#f8f5ed]
              p-5
              "
            >


              <h2
                className="
                text-xl
                font-bold
                text-[#203c27]
                "
              >
                اطلاعات مشتری
              </h2>



              <p className="mt-4">

                نام:
                {" "}

                <strong>
                  {user.name}
                </strong>

              </p>




              <p className="mt-3">

                شماره تماس:
                {" "}

                <strong>
                  {user.phone}
                </strong>

              </p>



            </div>









            <div
              className="
              mt-8
              grid
              gap-4
              "
            >



              <Link
                href="/my-orders"
                className="
                rounded-full
                bg-[#355e3b]
                py-4
                text-center
                font-semibold
                text-white
                transition
                hover:scale-105
                "
              >
                سفارش‌های من
              </Link>







              <Link
                href="/shop"
                className="
                rounded-full
                border
                border-[#355e3b]
                py-4
                text-center
                font-semibold
                text-[#355e3b]
                "
              >
                بازگشت به فروشگاه
              </Link>








              <button
                onClick={handleLogout}
                className="
                rounded-full
                bg-red-50
                py-4
                font-semibold
                text-red-600
                "
              >
                خروج از حساب
              </button>



            </div>




          </div>




        </div>


      </Container>


    </main>

  );

}
