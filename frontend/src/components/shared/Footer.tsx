import Link from "next/link";
import {
  Camera,
  MessageCircle,
  Send,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

import Container from "./Container";

const quickLinks = [
  {
    label: "خانه",
    href: "/",
  },
  {
    label: "منوی کافه",
    href: "/cafe",
  },
  {
    label: "فروشگاه",
    href: "/shop",
  },
  {
    label: "درباره ما",
    href: "/about",
  },
];

const accountLinks = [
  {
    label: "ورود",
    href: "/login",
  },
  {
    label: "سبد خرید",
    href: "/cart",
  },
  {
    label: "رزرو میز",
    href: "/reservation",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-[#203c27] text-white">

      <div className="absolute inset-0 opacity-10">

        <div
          className="
          absolute
          -right-24
          -top-20
          h-72
          w-72
          rounded-full
          bg-green-300
          blur-3xl
          "
        />

        <div
          className="
          absolute
          -left-20
          bottom-0
          h-80
          w-80
          rounded-full
          bg-orange-300
          blur-3xl
          "
        />

      </div>

      <Container>

        <div
          className="
          relative
          z-10
          grid
          gap-12
          py-20
          md:grid-cols-2
          lg:grid-cols-4
          "
        >

          {/* Brand */}

          <div>

            <h3
              className="
              font-serif
              text-3xl
              font-bold
              "
            >
              کافه ماچا
            </h3>

            <p
              className="
              mt-4
              text-sm
              leading-8
              text-white/70
              "
            >
              تجربه‌ای متفاوت از ماچا، قهوه تخصصی و
              محصولات پریمیوم در فضایی آرام و الهام‌گرفته
              از کافه‌های ژاپنی.
            </p>

            <Link
              href="/reservation"
              className="
              mt-6
              inline-flex
              rounded-full
              bg-[#d97706]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:scale-105
              hover:bg-[#b45309]
              "
            >
              رزرو میز
            </Link>

            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/10
                transition
                hover:bg-[#d97706]
                "
              >
                <Camera size={18} />
              </a>

              <a
                href="#"
                className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/10
                transition
                hover:bg-[#d97706]
                "
              >
                <Send size={18} />
              </a>

              <a
                href="#"
                className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/10
                transition
                hover:bg-[#d97706]
                "
              >
                <MessageCircle size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="mb-5 font-semibold">
              دسترسی سریع
            </h4>

            <ul className="space-y-3">

              {quickLinks.map((item) => (

                <li key={item.href}>

                  <Link
                    href={item.href}
                    className="
                    text-sm
                    text-white/70
                    transition
                    hover:text-[#d97706]
                    "
                  >
                    {item.label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>
                    {/* Account */}

          <div>

            <h4 className="mb-5 font-semibold">
              حساب کاربری
            </h4>

            <ul className="space-y-3">

              {accountLinks.map((item) => (

                <li key={item.href}>

                  <Link
                    href={item.href}
                    className="
                    text-sm
                    text-white/70
                    transition
                    hover:text-[#d97706]
                    "
                  >
                    {item.label}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-5 font-semibold">
              اطلاعات تماس
            </h4>

            <ul className="space-y-4 text-sm text-white/70">

              <li className="flex items-start gap-3">

                <MapPin
                  className="
                  mt-1
                  h-4
                  w-4
                  text-[#d97706]
                  "
                />

                <span>
                  تهران، خیابان نمونه، کافه ماچا
                </span>

              </li>

              <li className="flex items-center gap-3">

                <Phone
                  className="
                  h-4
                  w-4
                  text-[#d97706]
                  "
                />

                <span dir="ltr">
                  021-12345678
                </span>

              </li>

              <li className="flex items-center gap-3">

                <Clock
                  className="
                  h-4
                  w-4
                  text-[#d97706]
                  "
                />

                <span>
                  هر روز ۸ صبح تا ۱۰ شب
                </span>

              </li>

            </ul>

          </div>

        </div>

      </Container>

      <div
        className="
        border-t
        border-white/10
        py-5
        text-center
        text-xs
        text-white/50
        "
      >
        © {new Date().getFullYear()} کافه ماچا. تمامی حقوق محفوظ است.
      </div>

    </footer>
  );
}
