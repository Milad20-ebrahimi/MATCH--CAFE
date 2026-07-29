"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Container from "@/components/shared/Container";

import { useAuth } from "@/features/auth/hooks/useAuth";



export default function AdminLoginPage(){


  const router = useRouter();


  const {
    login,
    user,
  } = useAuth();



  const [phone,setPhone] = useState("");

  const [password,setPassword] = useState("");




  function handleLogin(){



    const success = login(
      phone,
      password
    );



    if(!success){


      alert(
        "اطلاعات ورود اشتباه است"
      );


      return;

    }





    const currentUser =
      JSON.parse(
        localStorage.getItem(
          "matcha-user"
        ) || "{}"
      );




    if(
      currentUser.role !== "admin"
    ){


      alert(
        "شما دسترسی مدیریت ندارید"
      );


      return;

    }





    router.push(
      "/admin/orders"
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
          max-w-md
          rounded-3xl
          bg-white
          p-10
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
            ورود مدیریت
          </h1>





          <input

            value={phone}

            onChange={(e)=>
              setPhone(
                e.target.value
              )
            }

            placeholder="شماره مدیر"

            className="
            mt-8
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
              setPassword(
                e.target.value
              )
            }

            placeholder="رمز عبور"

            className="
            mt-5
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
            mt-6
            w-full
            rounded-full
            bg-[#355e3b]
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
            "

          >

            ورود به پنل مدیریت

          </button>





        </div>


      </Container>


    </main>


  );

}
