"use client";

import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ProductCard from "@/components/ui/cards/product/ProductCard";
import { useState } from "react";
import useProducts from "@/features/products/hooks/useProducts";

const categories = [
  "همه",
  "Matcha",
  "Coffee",
  "Tea",
  "Accessories",
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


        <SectionTitle
          title="فروشگاه ماچا"
          description="انتخابی از بهترین ماچا، قهوه و محصولات پریمیوم"
        />


        {/* Search */}

        <div className="mt-10">

          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="جستجوی محصول..."
            className="
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-white
            px-5
            py-4
            outline-none
            focus:border-[#355e3b]
            "
          />

        </div>



        {/* Categories */}

        <div className="mt-8 flex flex-wrap gap-3">

          {categories.map((item)=>(

            <button
              key={item}
              onClick={()=>setCategory(item)}
              className={`
              rounded-full
              px-5
              py-2
              text-sm
              transition
              ${
                category===item
                ?
                "bg-[#355e3b] text-white"
                :
                "bg-white text-[#355e3b]"
              }
              `}
            >

              {item}

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
            filteredProducts.map((product)=>(

              <ProductCard
                key={product.id}
                product={product}
              />

            ))
          }


        </div>



      </Container>

    </main>

  );

}
