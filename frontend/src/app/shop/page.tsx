"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ProductCard from "@/components/ui/cards/product/ProductCard";
import { useState } from "react";
import useProducts from "@/features/products/hooks/useProducts";

const categories = [
  {
    label: "همه",
    value: "همه",
  },
  {
    label: "ماچا",
    value: "Matcha",
  },
  {
    label: "قهوه",
    value: "Coffee",
  },
  {
    label: "چای",
    value: "Tea",
  },
  {
    label: "ابزار دم‌آوری",
    value: "Accessories",
  },
];


export default function ShopPage() {


const {
  products,
} = useProducts();


  const [category,setCategory] = useState("همه");


  const [search,setSearch] = useState("");


const filteredProducts = products.filter((product)=>{

    const matchCategory =
      category === "همه" ||
      product.category === category;


    const matchSearch =
      product.name
      .toLowerCase()
      .includes(search.toLowerCase());


    return matchCategory && matchSearch;

  });


  return (

    <main className="bg-[#f8f5ed] py-32">

      <Container>


<section 
  className="
  relative
  mb-14
  overflow-hidden
  rounded-[36px]
  bg-[#0d1a12]
  px-8
  py-14
  text-right
  text-[#f2e9d8]
  "
>

  <div
    className="
    absolute
    -right-20
    -top-20
    h-64
    w-64
    rounded-full
    bg-[#b9d19a]/20
    blur-3xl
    "
  />

  <div
    className="
    absolute
    -left-20
    bottom-0
    h-52
    w-52
    rounded-full
    bg-[#d97706]/10
    blur-3xl
    "
  />


  <div className="relative z-10">

    <p
      className="
      text-xs
      tracking-[0.35em]
      text-[#b9d19a]
      "
    >
      MATCHA COLLECTION
    </p>


    <h1
      className="
      mt-4
      text-3xl
      font-light
      leading-relaxed
      sm:text-4xl
      "
    >
      فروشگاه ماچا
    </h1>


    <p
      className="
      mt-4
      max-w-xl
      text-sm
      leading-8
      text-[#f2e9d8]/60
      "
    >
      انتخابی از ماچاهای اصیل، قهوه تخصصی،
      چای و ابزارهای دم‌آوری پریمیوم.
    </p>

  </div>


</section>


        {/* Search */}

        <div className="mt-10">

          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="جستجوی محصول..."
className="
w-full
rounded-[28px]
border
border-[#0d1a12]/10
bg-white/70
px-6
py-4
text-sm
text-[#0d1a12]
shadow-[0_20px_50px_-30px_rgba(13,26,18,0.35)]
backdrop-blur-md
outline-none
transition-all
duration-300
placeholder:text-[#0d1a12]/40
focus:border-[#b9d19a]
focus:bg-white
focus:ring-4
focus:ring-[#b9d19a]/20
"
          />

        </div>



        {/* Categories */}

        <div className="mt-8 flex flex-wrap gap-3">

          {categories.map((item)=>(

  <button
    key={item.value}
    onClick={()=>setCategory(item.value)}
className={`
rounded-full
border
px-6
py-3
text-sm
font-light
transition-all
duration-500
backdrop-blur-md

${
  category === item.value

  ?

  `
  border-[#b9d19a]
  bg-[#0d1a12]
  text-[#f2e9d8]
  shadow-[0_12px_30px_-12px_rgba(13,26,18,0.5)]
  `

  :

  `
  border-[#0d1a12]/10
  bg-white/70
  text-[#0d1a12]/70
  hover:border-[#b9d19a]/70
  hover:bg-white
  hover:text-[#0d1a12]
  `

}
`}
  >

    {item.label}

  </button>

))}

        </div>




        {/* Products */}

        <div
          className="
          mt-12
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-4
          "
        >

{
  filteredProducts.length > 0 ? (

    filteredProducts.map((product)=>(
      <ProductCard
        key={product.id}
        product={product}
      />
    ))

  ) : (

    <div
      className="
      col-span-full
      rounded-3xl
      border
      border-[#0d1a12]/10
      bg-white/60
      px-6
      py-16
      text-center
      backdrop-blur-md
      "
    >

      <h3
        className="
        text-xl
        font-light
        text-[#0d1a12]
        "
      >
        محصولی پیدا نشد
      </h3>


      <p
        className="
        mt-3
        text-sm
        font-light
        text-[#0d1a12]/60
        "
      >
        لطفاً جستجو را تغییر دهید یا دسته‌بندی دیگری انتخاب کنید.
      </p>


    </div>

  )
}


        </div>



      </Container>
    </main>

  );

}
