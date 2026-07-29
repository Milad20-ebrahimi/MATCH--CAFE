export type MenuItem = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
};



export const menuItems: MenuItem[] = [

  {
    id: 1,
    name: "ماچا لاته",
    category: "matcha",
    description:
      "ماچای اصیل ژاپنی با شیر تازه و طعم لطیف",
    price: 185000,
    imageUrl: "/images/menu-placeholder.jpg",
  },


  {
    id: 2,
    name: "آیس ماچا",
    category: "matcha",
    description:
      "نوشیدنی خنک ماچا برای روزهای گرم",
    price: 195000,
    imageUrl: "/images/menu-placeholder.jpg",
  },


  {
    id: 3,
    name: "اسپرسو",
    category: "coffee",
    description:
      "قهوه تخصصی با دانه‌های منتخب",
    price: 145000,
    imageUrl: "/images/menu-placeholder.jpg",
  },


  {
    id: 4,
    name: "آمریکانو",
    category: "coffee",
    description:
      "قهوه کلاسیک با عطر و طعم عمیق",
    price: 165000,
    imageUrl: "/images/menu-placeholder.jpg",
  },


  {
    id: 5,
    name: "کلد برو",
    category: "coffee",
    description:
      "قهوه سرد دم شده با عصاره‌گیری طولانی",
    price: 180000,
    imageUrl: "/images/menu-placeholder.jpg",
  },


  {
    id: 6,
    name: "چای ژاپنی",
    category: "tea",
    description:
      "چای خاص با رایحه طبیعی",
    price: 120000,
    imageUrl: "/images/menu-placeholder.jpg",
  },


  {
    id: 7,
    name: "چیزکیک ماچا",
    category: "dessert",
    description:
      "دسر ویژه با طعم ماچای ژاپنی",
    price: 220000,
    imageUrl: "/images/menu-placeholder.jpg",
  },


  {
    id: 8,
    name: "تیرامیسو",
    category: "dessert",
    description:
      "دسر کلاسیک ایتالیایی",
    price: 230000,
    imageUrl: "/images/menu-placeholder.jpg",
  },


  {
    id: 9,
    name: "کروسان",
    category: "breakfast",
    description:
      "کروسان تازه و ترد روزانه",
    price: 150000,
    imageUrl: "/images/menu-placeholder.jpg",
  },


  {
    id: 10,
    name: "صبحانه ویژه",
    category: "breakfast",
    description:
      "صبحانه سبک و اختصاصی کافه",
    price: 320000,
    imageUrl: "/images/menu-placeholder.jpg",
  },

];
