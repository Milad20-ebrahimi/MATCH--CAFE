import { Leaf } from "lucide-react";


export default function MenuHero() {

  return (

    <section
      dir="rtl"
      className="
      relative
      overflow-hidden
      bg-[#F8F3E7]
      px-6
      py-20
      "
    >


      {/* Glow */}

      <div
        className="
        absolute
        -top-32
        right-[-10%]
        h-[320px]
        w-[320px]
        rounded-full
        bg-[#C6A664]/20
        blur-[100px]
        "
      />


      <div
        className="
        absolute
        -bottom-32
        left-[-10%]
        h-[300px]
        w-[300px]
        rounded-full
        bg-[#A8C686]/20
        blur-[100px]
        "
      />



      <div
        className="
        relative
        mx-auto
        max-w-3xl
        text-center
        "
      >



        <div
          className="
          mx-auto
          mb-6
          flex
          w-fit
          items-center
          gap-2
          rounded-full
          bg-white
          px-5
          py-3
          text-sm
          font-bold
          text-[#203C27]
          shadow-sm
          "
        >

          <Leaf size={18}/>

          Premium Matcha Cafe

        </div>





        <h1
          className="
          font-serif
          text-5xl
          font-black
          leading-tight
          text-[#203C27]
          md:text-7xl
          "
        >

          منوی کافه

          <br />

          <span
            className="
            text-[#C6A664]
            "
          >
            ماچا
          </span>


        </h1>




        <p
          className="
          mx-auto
          mt-6
          max-w-xl
          text-lg
          leading-8
          text-[#203C27]/60
          "
        >

          مجموعه‌ای از نوشیدنی‌های دست‌ساز،
          قهوه تخصصی و دسرهای خاص
          با الهام از فرهنگ ژاپن.

        </p>




        <div
          className="
          mx-auto
          mt-10
          flex
          items-center
          justify-center
          gap-3
          "
        >

          <span
            className="
            h-px
            w-16
            bg-[#C6A664]
            "
          />

          <span
            className="
            text-sm
            tracking-[5px]
            text-[#C6A664]
            "
          >
            MENU
          </span>


          <span
            className="
            h-px
            w-16
            bg-[#C6A664]
            "
          />


        </div>


      </div>


    </section>

  );

}
