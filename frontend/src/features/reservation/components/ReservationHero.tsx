import Container from "@/components/shared/Container";

export default function ReservationHero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#f8f5ed]
      py-32
      "
    >
      <Container>

        <section
          className="
          relative
          overflow-hidden
          rounded-[36px]
          bg-[#0d1a12]
          px-8
          py-14
          text-right
          text-[#f2e9d8]
          "
        >

          <div
            className="
            absolute
            -right-20
            -top-20
            h-64
            w-64
            rounded-full
            bg-[#b9d19a]/20
            blur-3xl
            "
          />

          <div
            className="
            absolute
            -left-20
            bottom-0
            h-52
            w-52
            rounded-full
            bg-[#d97706]/10
            blur-3xl
            "
          />

          <div className="relative z-10">

            <p
              className="
              text-xs
              tracking-[0.35em]
              text-[#b9d19a]
              "
            >
              TABLE RESERVATION
            </p>

            <h1
              className="
              mt-4
              text-3xl
              font-light
              leading-relaxed
              sm:text-4xl
              "
            >
              رزرو میز
            </h1>

            <p
              className="
              mt-4
              max-w-xl
              text-sm
              leading-8
              text-[#f2e9d8]/60
              "
            >
              میز خود را به صورت آنلاین رزرو کنید و تجربه‌ای آرام،
              مینیمال و دلنشین در MATCH--CAFE داشته باشید.
            </p>

          </div>

        </section>

      </Container>
    </section>
  );
}
