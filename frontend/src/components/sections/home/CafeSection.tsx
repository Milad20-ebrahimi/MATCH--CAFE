"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";


export default function CafeSection() {

  return (

    <section
      className="
      bg-[#f8f5ed]
      py-24
      "
    >

      <Container>

        {/* Title */}

        <Reveal>

          <div className="text-center">

            <span
              className="
              text-sm
              font-semibold
              tracking-[0.25em]
              uppercase
              text-[#b58a47]
              "
            >
              Cafe Experience
            </span>

            <h2
              className="
              mt-4
              font-serif
              text-4xl
              font-bold
              text-[#203c27]
              md:text-5xl
              "
            >
              فضای کافه ماچا
            </h2>

            <p
              className="
              mx-auto
              mt-5
              max-w-2xl
              leading-8
              text-[#203c27]/70
              "
            >
              فضایی آرام، مینیمال و الهام گرفته از
              کافه‌های ژاپنی؛ جایی برای نوشیدن
              ماچا، قهوه تخصصی و ثبت لحظه‌های
              ماندگار.
            </p>

          </div>

        </Reveal>



        {/* Gallery */}

        <div
          className="
          mt-16
          grid
          gap-5
          lg:grid-cols-[2fr_1fr]
          "
        >


          {/* Main Image */}

          <Reveal>

            <div
              className="
              relative
              h-[500px]
              overflow-hidden
              rounded-[2rem]
              "
            >

              <Image
                src="/images/cafe/cafe-main.jpg"
                alt="Cafe"
                fill
                className="
                object-cover
                transition-transform
                duration-700
                hover:scale-105
                "
              />

            </div>

          </Reveal>




          {/* Small Images */}

          <div
            className="
            grid
            grid-cols-2
            gap-5
            "
          >


            {[
              "cafe-1.jpg",
              "cafe-2.jpg",
              "cafe-3.jpg",
              "cafe-4.jpg",
            ].map((image, index) => (

              <Reveal
                key={image}
                delay={index * 0.1}
              >

                <div
                  className="
                  relative
                  h-[240px]
                  overflow-hidden
                  rounded-3xl
                  "
                >

                  <Image
                    src={`/images/cafe/${image}`}
                    alt=""
                    fill
                    className="
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                    "
                  />

                </div>

              </Reveal>

            ))}

          </div>

        </div>




        {/* CTA */}

        <Reveal delay={0.4}>

          <div
            className="
            mt-16
            text-center
            "
          >

            <Link
              href="/reservation"
              className="
              inline-flex
              items-center
              rounded-full
              bg-[#203c27]
              px-10
              py-4
              text-white
              transition
              hover:bg-[#355e3b]
              "
            >
              رزرو میز
            </Link>

          </div>

        </Reveal>

      </Container>

    </section>

  );

}
