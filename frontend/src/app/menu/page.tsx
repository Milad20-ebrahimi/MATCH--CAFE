import MenuCategory from "@/components/sections/menu/MenuCategory";
import MenuGrid from "@/components/sections/menu/MenuGrid";
import { Suspense } from "react";

const categories = [
  {
    id: "1",
    name: "ماچا",
    slug: "matcha",
  },
  {
    id: "2",
    name: "قهوه",
    slug: "coffee",
  },
  {
    id: "3",
    name: "چای",
    slug: "tea",
  },
  {
    id: "4",
    name: "دسر",
    slug: "dessert",
  },
  {
    id: "5",
    name: "صبحانه",
    slug: "breakfast",
  },
];


export default function MenuPage() {

  return (

    <main>

<Suspense fallback={null}>
  <MenuCategory />
</Suspense>

<Suspense fallback={null}>
  <MenuGrid />
</Suspense>

    </main>

  );

}
