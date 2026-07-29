"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";

export default function ReservationForm() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    message: "",
  });


  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");



  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  }



  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();


    if (
      !formData.name ||
      !formData.phone ||
      !formData.guests ||
      !formData.date ||
      !formData.time
    ) {

      setError("لطفاً تمام فیلدهای ضروری را پر کنید.");
      setSubmitted(false);

      return;

    }


    setError("");
    setSubmitted(true);


    console.log(formData);


    setFormData({
      name: "",
      phone: "",
      guests: "",
      date: "",
      time: "",
      message: "",
    });

  }



  return (
    <section className="relative -mt-20 bg-[#f8f5ed] pb-24">

      <Container>

        <div
          className="
          mx-auto
          max-w-4xl
          rounded-[40px]
          border
          border-[#0d1a12]/10
          bg-white/70
          p-8
          shadow-[0_30px_80px_-40px_rgba(13,26,18,0.35)]
          backdrop-blur-xl
          sm:p-12
          "
        >

          <div className="text-center">

            <p className="
              text-xs
              tracking-[0.35em]
              text-[#355e3b]
            ">
              RESERVATION
            </p>


            <h2 className="
              mt-4
              text-3xl
              font-light
              text-[#0d1a12]
              sm:text-4xl
            ">
              فرم رزرو میز
            </h2>


            <p className="
              mx-auto
              mt-4
              max-w-lg
              text-sm
              leading-8
              text-[#0d1a12]/60
            ">
              اطلاعات خود را وارد کنید تا میز شما در
              فضای آرام کافه ماچا آماده شود.
            </p>

          </div>



          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
          >


            <div className="grid gap-6 md:grid-cols-2">


              <div>

                <label className="mb-2 block text-sm text-[#0d1a12]/70">
                  نام و نام خانوادگی
                </label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-[#0d1a12]/10
                  bg-white/80
                  px-5
                  py-4
                  text-sm
                  outline-none
                  transition
                  focus:border-[#b9d19a]
                  focus:ring-4
                  focus:ring-[#b9d19a]/20
                  "
                />

              </div>



              <div>

                <label className="mb-2 block text-sm text-[#0d1a12]/70">
                  شماره موبایل
                </label>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="09xxxxxxxxx"
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-[#0d1a12]/10
                  bg-white/80
                  px-5
                  py-4
                  text-sm
                  outline-none
                  transition
                  focus:border-[#b9d19a]
                  focus:ring-4
                  focus:ring-[#b9d19a]/20
                  "
                />

              </div>


            </div>




            <div className="grid gap-6 md:grid-cols-3">


              <div>

                <label className="mb-2 block text-sm text-[#0d1a12]/70">
                  تعداد نفرات
                </label>

                <input
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  type="number"
                  min="1"
                  placeholder="2"
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-[#0d1a12]/10
                  bg-white/80
                  px-5
                  py-4
                  outline-none
                  focus:border-[#b9d19a]
                  "
                />

              </div>



              <div>

                <label className="mb-2 block text-sm text-[#0d1a12]/70">
                  تاریخ
                </label>

                <input
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  type="date"
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-[#0d1a12]/10
                  bg-white/80
                  px-5
                  py-4
                  outline-none
                  focus:border-[#b9d19a]
                  "
                />

              </div>



              <div>

                <label className="mb-2 block text-sm text-[#0d1ا12]/70">
                  ساعت
                </label>

                <input
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  type="time"
                  className="
                  w-full
                  rounded-2xl
                  border
                  border-[#0d1a12]/10
                  bg-white/80
                  px-5
                  py-4
                  outline-none
                  focus:border-[#b9d19a]
                  "
                />

              </div>


            </div>




            <div>

              <label className="mb-2 block text-sm text-[#0d1a12]/70">
                توضیحات
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="در صورت نیاز توضیحات خود را بنویسید..."
                className="
                w-full
                rounded-2xl
                border
                border-[#0d1a12]/10
                bg-white/80
                px-5
                py-4
                text-sm
                outline-none
                transition
                focus:border-[#b9d19a]
                focus:ring-4
                focus:ring-[#b9d19a]/20
                "
              />

            </div>



            {
              error && (
                <div className="
                  rounded-2xl
                  bg-red-50
                  px-5
                  py-4
                  text-sm
                  text-red-600
                ">
                  {error}
                </div>
              )
            }



            {
              submitted && (
                <div className="
                  rounded-2xl
                  bg-[#b9d19a]/20
                  px-5
                  py-4
                  text-sm
                  text-[#355e3b]
                ">
                  درخواست رزرو شما ثبت شد. به‌زودی با شما تماس می‌گیریم.
                </div>
              )
            }




            <button
              type="submit"
              className="
              w-full
              rounded-full
              bg-[#0d1a12]
              py-4
              text-sm
              font-medium
              text-[#f2e9d8]
              transition-all
              duration-500
              hover:bg-[#203c27]
              hover:shadow-[0_15px_35px_-15px_rgba(13,26,18,0.5)]
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
