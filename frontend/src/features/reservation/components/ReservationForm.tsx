import Container from "@/components/shared/Container";

export default function ReservationForm() {
  return (
    <section className="bg-[#f8f5ed] py-24">

      <Container>

        <div
          className="
          mx-auto
          max-w-4xl
          rounded-[2rem]
          bg-white
          p-10
          shadow-2xl
          "
        >

          <h2
            className="
            text-center
            text-3xl
            font-bold
            text-[#355e3b]
            "
          >
            فرم رزرو میز
          </h2>

          <p
            className="
            mt-3
            text-center
            text-[#355e3b]/70
            "
          >
            اطلاعات خود را وارد کنید تا درخواست رزرو شما ثبت شود.
          </p>

          <form className="mt-12 space-y-6">

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-medium text-[#355e3b]">
                  نام و نام خانوادگی
                </label>

                <input
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  className="
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-[#355e3b]
                  "
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium text-[#355e3b]">
                  شماره موبایل
                </label>

                <input
                  type="tel"
                  placeholder="09xxxxxxxxx"
                  className="
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-[#355e3b]
                  "
                />

              </div>

            </div>

            <div className="grid gap-6 md:grid-cols-3">

              <div>

                <label className="mb-2 block text-sm font-medium text-[#355e3b]">
                  تعداد نفرات
                </label>

                <input
                  type="number"
                  min="1"
                  placeholder="2"
                  className="
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  px-4
                  py-3
                  outline-none
                  focus:border-[#355e3b]
                  "
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium text-[#355e3b]">
                  تاریخ
                </label>

                <input
                  type="date"
                  className="
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  px-4
                  py-3
                  outline-none
                  focus:border-[#355e3b]
                  "
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-medium text-[#355e3b]">
                  ساعت
                </label>

                <input
                  type="time"
                  className="
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  px-4
                  py-3
                  outline-none
                  focus:border-[#355e3b]
                  "
                />

              </div>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium text-[#355e3b]">
                توضیحات
              </label>

              <textarea
                rows={5}
                placeholder="در صورت نیاز توضیحات خود را بنویسید..."
                className="
                w-full
                rounded-xl
                border
                border-gray-200
                px-4
                py-3
                outline-none
                transition
                focus:border-[#355e3b]
                "
              />

            </div>

            <button
              type="submit"
              className="
              w-full
              rounded-full
              bg-[#355e3b]
              py-4
              font-semibold
              text-white
              transition
              hover:bg-[#27462d]
              "
            >
              ثبت درخواست رزرو
            </button>

          </form>

        </div>

      </Container>

    </section>
  );
}
