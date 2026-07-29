import type { Product } from "@/types/product";


export const products: Product[] = [

{
  id: "1",
  name: "Premium Japanese Matcha",
  slug: "premium-japanese-matcha",
  price: 850000,
  oldPrice: 980000,
  rating: 5,
  image: "/images/matcha.jpg",
  category: "Matcha",
  badge: "BEST SELLER",

  shortDescription:
    "ماچا اصیل ژاپنی با طعم لطیف و کیفیت پریمیوم.",

  description:
    "ماچای پریمیوم MATCH--CAFE از بهترین برگ‌های چای سبز ژاپن تهیه شده است. این محصول دارای رنگ سبز طبیعی، عطر آرامش‌بخش و بافتی نرم برای تهیه نوشیدنی‌های تخصصی ماچا می‌باشد. مناسب برای علاقه‌مندان به سبک زندگی سالم و تجربه کافه‌ای اصیل ژاپنی.",

  features:[
    "100% ژاپنی",
    "بدون افزودنی مصنوعی",
    "مناسب لاته و نوشیدنی سرد",
    "بافت نرم و یکدست"
  ],

},


{
  id: "2",
  name: "Specialty Coffee Beans",
  slug: "specialty-coffee-beans",
  price: 650000,
  oldPrice: 760000,
  rating: 4.8,
  image: "/images/coffee.jpg",
  category: "Coffee",
  badge: "NEW",

  shortDescription:
    "دانه قهوه تخصصی با رست حرفه‌ای.",

  description:
    "دانه‌های قهوه تخصصی MATCH--CAFE با انتخاب دقیق از مزارع منتخب تهیه شده‌اند. رست متعادل این محصول باعث ایجاد عطر عمیق، طعم شکلاتی و تجربه‌ای حرفه‌ای برای دوستداران قهوه می‌شود.",

  features:[
    "رست تخصصی",
    "عطر قوی",
    "مناسب اسپرسو و دمی"
  ],

},


{
  id: "3",
  name: "Organic Green Tea",
  slug: "organic-green-tea",
  price: 420000,
  rating: 4.7,
  image: "/images/tea.jpg",
  category: "Tea",

  shortDescription:
    "چای سبز ارگانیک با طعم طبیعی.",

  description:
    "چای سبز ارگانیک با برگ‌های تازه و فرآوری طبیعی، انتخابی مناسب برای لحظات آرامش و نوشیدن یک فنجان چای سبک ژاپنی.",

  features:[
    "ارگانیک",
    "طعم ملایم",
    "مناسب مصرف روزانه"
  ],

},


{
  id: "4",
  name: "Matcha Whisk Set",
  slug: "matcha-whisk-set",
  price: 380000,
  oldPrice: 450000,
  rating: 4.9,
  image: "/images/tools.jpg",
  category: "Accessories",
  badge: "SALE",

  shortDescription:
    "ست کامل ابزار سنتی آماده‌سازی ماچا.",

  description:
    "ست دم‌آوری ماچا شامل ابزارهای ضروری برای تهیه نوشیدنی به سبک سنتی ژاپنی است. طراحی شده برای ایجاد کف نرم و تجربه‌ای حرفه‌ای در خانه.",

  features:[
    "طراحی سنتی ژاپنی",
    "مناسب مبتدی و حرفه‌ای",
    "کیفیت ساخت بالا"
  ],

},

];
