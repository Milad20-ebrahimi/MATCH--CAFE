"use client";

import { useSearchParams } from "next/navigation";
import MenuCard from "./MenuCard";
import Reveal from "@/components/shared/Reveal";
import { menuItems } from "@/data/menuItems";

export default function MenuGrid() {


  const searchParams = useSearchParams();


  const activeCategory =
    searchParams.get("category");



  const filteredItems = activeCategory

    ? menuItems.filter(
        item =>
          item.category === activeCategory
      )

    : menuItems;



  return (

    <section
      id="menu"
      dir="rtl"
      className="
      relative
      overflow-hidden
      bg-[#f8f5ed]
      px-6
      pb-24
      pt-10
      "
    >


      {/* Decorative Glow */}

      <div
        className="
        pointer-events-none
        absolute
        right-[-120px]
        top-20
        h-[350px]
        w-[350px]
        rounded-full
        bg-[#C6A664]/10
        blur-[100px]
        "
      />



      <div
        className="
        relative
        mx-auto
        max-w-7xl
        "
      >



        {/* Section Title */}

        <div
          className="
          mb-14
          text-center
          "
        >

          <p
            className="
            text-sm
            tracking-[6px]
            text-[#C6A664]
            "
          >
            MENU
          </p>


          <h2
            className="
            mt-4
            font-serif
            text-4xl
            font-black
            text-[#203C27]
            md:text-5xl
            "
          >
            انتخاب‌های کافه ماچا
          </h2>


        </div>





        {/* Cards */}

        <div
          className="
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          "
        >


          {
            filteredItems.map((item,index)=>(

              <Reveal
                key={index}
                delay={index * 0.08}
              >

                <MenuCard
                  item={item}
                />

              </Reveal>

            ))
          }


        </div>


      </div>


    </section>

  );

}
