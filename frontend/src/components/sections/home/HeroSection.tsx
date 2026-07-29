"use client";

import Reveal from "@/components/shared/Reveal";
import Image from "next/image";
import Link from "next/link";

import {
  Leaf,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  heroSlides,
} from "./heroSlides";

import Container from "@/components/shared/Container";


export default function HeroSection() {


  const [activeSlide,setActiveSlide] =
  useState(0);



  useEffect(()=>{

    const timer =
    setInterval(()=>{

      setActiveSlide(
        prev =>
        (prev + 1) % heroSlides.length
      );

    },6000);


    return ()=>clearInterval(timer);


  },[]);



  return (

    <section
      className="
      relative
      h-screen
      overflow-hidden
      "
    >



      {/* Background Slider */}

      {
        heroSlides.map((slide,index)=>(


          <div
            key={slide.image}
            className={`
            absolute
            inset-0
            transition-opacity
            duration-[1500ms]

            ${
              activeSlide === index
              ?
              "opacity-100"
              :
              "opacity-0"
            }

            `}
          >


            <Image

              src={slide.image}

              alt="Matcha Cafe"

              fill

              priority={index===0}

              className={`
              object-cover

              ${
                activeSlide === index
                ?
                "animate-heroZoom"
                :
                ""
              }

              `}
            />

          </div>


        ))
      }





      {/* Dark Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-black/40
        "
      />



      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#203c27]/90
        via-[#203c27]/50
        to-transparent
        "
      />







      <Container>


        <div
          className="
          relative
          flex
          h-screen
          items-center
          "
        >



          {/* ثابت می ماند */}

          <div
            className="
            max-w-3xl
            text-white
            "
          >


            <Reveal>


              <span
                className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white/10
                px-5
                py-2
                backdrop-blur-md
                "
              >

                <Leaf size={16}/>

                کافه تخصصی ماچا و قهوه


              </span>


            </Reveal>





            <Reveal delay={0.2}>


              <h1
                className="
                mt-6
                font-serif
                text-5xl
                font-bold
                leading-[1.4]
                md:text-7xl
                "
              >

                تجربه اصیل ماچا

                <br/>

                در خانه شما


              </h1>


            </Reveal>





            <Reveal delay={0.3}>


              <p
                className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-white/80
                "
              >

                بهترین ماچا، قهوه و محصولات پریمیوم
                با کیفیت کافه‌ای برای تجربه‌ای متفاوت
                در خانه شما.


              </p>


            </Reveal>






            <Reveal delay={0.4}>


              <div
                className="
                mt-10
                flex
                gap-4
                "
              >


                <Link

                href="/cafe"

                className="
                rounded-full
                bg-[#d97706]
                px-8
                py-4
                font-semibold
                transition
                hover:scale-105
                "

                >

                مشاهده منوی کافه

                </Link>



                <Link

                href="/shop"

                className="
                rounded-full
                border
                border-white/40
                bg-white/10
                px-8
                py-4
                backdrop-blur-md
                "

                >

                خرید از فروشگاه

                </Link>



              </div>


            </Reveal>

          </div>


        </div>
     {/* Slider Dots */}

<div
  className="
  absolute
  bottom-8
  right-12
  z-20
  flex
  items-center
  gap-2
  "
>
{
  heroSlides.map((slide,index)=>(

    <button

      key={slide.image}

      onClick={() => setActiveSlide(index)}

      aria-label={`slide ${index + 1}`}

      className={`
      rounded-full
      transition-all
      duration-500

      ${
        activeSlide === index

        ?

        "h-2.5 w-2.5 bg-white"

        :

        "h-2 w-2 bg-white/50 hover:bg-white"

      }

      `}

    />

  ))
}

</div>
      </Container>


    </section>

  );

}
