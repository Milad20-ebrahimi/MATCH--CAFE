import type { HeroSlide } from "@/components/sections/home/hero/types";


export const heroSlides: HeroSlide[] = [

  {
    id: "slide-1",
media: {
  type: "image",
  src: "/images/matcha-hero-2.JPG",
},
    eyebrow: "فصل تازه",

    title:
      "دانه‌هایی که تازه رسیدن",

    description:
      "برشته‌کاری تازه، هر روز صبح؛ طعمی که فرقشو حس می‌کنی.",

    ctaLabel:
      "مشاهده منو",

    ctaHref:
      "/menu",

    offer: {
      label: "تخفیف افتتاحیه تا",
      endsAt: "2026-08-01T20:00:00",
    },

  },


  {
    id: "slide-2",

    media: {
      type: "video",
      src: "/112.mp4",
poster: "/images/cafe-interior.jpg",
    },

    eyebrow:
      "پشت صحنه",

    title:
      "هر فنجان، یک روایت",

    description:
      "از دم‌کردن تا سرو، هر مرحله با دقت انجام می‌شود.",

    ctaLabel:
      "داستان ما",

    ctaHref:
      "/about",

  },


  {
    id: "slide-3",

    media: {
      type: "image",
      src: "/11452.jpg",
    },

    eyebrow:
      "فضای کافه",

    title:
      "جایی برای ماندن، نه فقط عبور",

    description:
      "فضایی آرام برای لحظه‌های خاص شما.",

    ctaLabel:
      "رزرو میز",

    ctaHref:
      "/reserve",

  },

];
