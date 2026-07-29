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
},

{
  id: "3",
  name: "Organic Green Tea",
  slug: "organic-green-tea",
  price: 420000,
  rating: 4.7,
  image: "/images/tea.jpg",
  category: "Tea",
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
},
];
