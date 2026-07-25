import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Coffee,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Container from "@/components/shared/Container";


export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}

      <div className="absolute inset-0">

        <Image
          src="/images/matcha-hero.jpg"
          alt="Matcha Cafe"
          fill
          priority
          className="object-cover"
        />


        {/* Dark overlay */}

        <div className="absolute inset-0 bg-black/45" />


        <div
          className="
          absolute
          inset-0
          bg-gradient-to-r
          from-forest/90
          via-forest/60
          to-transparent
          "
        />

      </div>



      <Container>

        <div
          className="
          relative
          flex
          min-h-[760px]
          flex-col
          justify-center
          gap-8
          py-28
          "
        >


          {/* Badge */}

          <span
            className="
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            bg-white/10
            px-5
            py-2
            text-sm
            text-white
            backdrop-blur-md
            "
          >
            <Leaf size={16}/>
            کافه تخصصی ماچا و قهوه
          </span>



          {/* Title */}

          <h1
            className="
            max-w-3xl
            font-serif
            text-5xl
            font-bold
            leading-[1.4]
            text-white
            md:text-7xl
            "
          >
            تجربه اصیل ماچا
            <br/>
            در خانه شما
          </h1>



          {/* Description */}

          <p
            className="
            max-w-xl
            text-base
            leading-8
            text-white/80
            md:text-lg
            "
          >
            بهترین ماچا، قهوه و محصولات پریمیوم
            با کیفیت کافه‌ای برای تجربه‌ای متفاوت
            در خانه شما.
          </p>



          {/* Buttons */}

          <div
            className="
            flex
            flex-wrap
            gap-4
            "
          >

            <Link
              href="/cafe"
              className="
              rounded-full
              bg-amber
              px-8
              py-4
              text-sm
              font-medium
              text-white
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
              text-sm
              font-medium
              text-white
              backdrop-blur-md
              transition
              hover:bg-white
              hover:text-forest
              "
            >
              خرید از فروشگاه
            </Link>


          </div>




          {/* Features */}

          <div
            className="
            mt-8
            max-w-2xl
            rounded-3xl
            border
            border-white/20
            bg-white/10
            p-6
            backdrop-blur-xl
            "
          >

            <div
              className="
              grid
              grid-cols-2
              gap-6
              text-white
              "
            >


              <Feature
                icon={<Leaf size={22}/>}
                title="Matcha Ceremony"
                desc="ماچای اصیل ژاپنی"
              />


              <Feature
                icon={<ShieldCheck size={22}/>}
                title="Quality"
                desc="تضمین کیفیت"
              />


              <Feature
                icon={<Coffee size={22}/>}
                title="Fresh Coffee"
                desc="قهوه تازه رُست"
              />


              <Feature
                icon={<Truck size={22}/>}
                title="Fast Delivery"
                desc="ارسال سریع"
              />


            </div>

          </div>


        </div>


      </Container>


    </section>
  );
}




function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {

  return (
    <div className="flex gap-3">

      <div
        className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        bg-white/20
        "
      >
        {icon}
      </div>


      <div>

        <p className="font-semibold">
          {title}
        </p>

        <span className="text-xs text-white/60">
          {desc}
        </span>

      </div>

    </div>
  );
}
