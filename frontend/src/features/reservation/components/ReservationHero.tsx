import Container from "@/components/shared/Container";

export default function ReservationHero() {
  return (
    <section className="bg-[#203c27] py-32 text-white">
      <Container>

        <h1 className="font-serif text-5xl font-bold">
          رزرو میز
        </h1>

        <p className="mt-6 max-w-xl leading-8 text-white/80">
          میز خود را به صورت آنلاین رزرو کنید و از تجربه‌ای
          آرام و دلنشین در کافه ماچا لذت ببرید.
        </p>

      </Container>
    </section>
  );
}
