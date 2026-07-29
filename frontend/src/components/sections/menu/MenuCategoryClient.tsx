"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { menuCategories } from "@/data/categories";


export default function MenuCategory() {

  const searchParams = useSearchParams();

  const active = searchParams.get("category");


  return (
    <div
      className="
      bg-[#F8F3E7]
      px-5
      py-6
      "
    >

      <div
        className="
        mx-auto
        flex
        max-w-7xl
        gap-3
        overflow-x-auto
        scrollbar-hide
        "
      >

        <Link
          href="/menu"
          className={`
          whitespace-nowrap
          rounded-full
          px-7
          py-3
          text-sm
          font-bold

          ${
            !active
            ? "bg-[#203C27] text-white shadow-lg"
            : "bg-white text-[#203C27]"
          }

          `}
        >
          همه
        </Link>


        {
          menuCategories.map((category)=>(

            <Link
              key={category.id}
              href={`/menu?category=${category.slug}`}

              className={`
              whitespace-nowrap
              rounded-full
              px-7
              py-3
              text-sm
              font-bold

              ${
                active === category.slug
                ? "bg-[#203C27] text-white shadow-lg"
                : "bg-white text-[#203C27]"
              }

              `}
            >

              {category.name}

            </Link>

          ))
        }


      </div>

    </div>
  );
}
