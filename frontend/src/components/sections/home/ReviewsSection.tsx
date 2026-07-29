import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";

const reviews = [
  {
    name: "علی رضایی",
    comment:
      "کیفیت ماچا فوق‌العاده بود و فضای کافه حس یک کافه ژاپنی واقعی را منتقل می‌کرد.",
    rating: 5,
  },
  {
    name: "سارا محمدی",
    comment:
      "ارسال سریع، بسته‌بندی حرفه‌ای و کیفیت محصولات واقعاً عالی بود.",
    rating: 5,
  },
  {
    name: "محمد کریمی",
    comment:
      "بهترین قهوه‌ای که تا حالا نوشیدم. قطعاً دوباره سفارش می‌دهم.",
    rating: 4.8,
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-[#f8f5ed] py-24">

      <Container>

        <SectionTitle
          title="نظرات مشتریان"
          description="تجربه کسانی که کافه ماچا را انتخاب کرده‌اند"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="
              rounded-[2rem]
              border
              border-[#355e3b]/10
              bg-white/70
              p-8
              shadow-xl
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-2xl
              "
            >

              <div className="mb-5 text-amber-500 text-lg">
                {"★★★★★"}
              </div>

              <p
                className="
                leading-8
                text-[#355e3b]/80
                "
              >
                {review.comment}
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#355e3b]
                  text-lg
                  font-bold
                  text-white
                  "
                >
                  {review.name.charAt(0)}
                </div>

                <div>

                  <h4
                    className="
                    font-semibold
                    text-[#355e3b]
                    "
                  >
                    {review.name}
                  </h4>

                  <span
                    className="
                    text-sm
                    text-[#355e3b]/60
                    "
                  >
                    مشتری کافه ماچا
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}
