"use client";

import {
  useState
} from "react";

import {
  useRouter
} from "next/navigation";

import Container from "@/components/shared/Container";

import {
  addProduct
} from "@/features/products/services/product.service";



export default function NewProductPage(){

  const router = useRouter();


  const [name,setName] = useState("");
  const [category,setCategory] = useState("");
  const [price,setPrice] = useState("");
  const [rating,setRating] = useState("");
const [oldPrice,setOldPrice] = useState("");
const [badge,setBadge] = useState("");

const [error,setError] = useState("");

function submit(){

  setError("");


  if(
    !name ||
    !category ||
    !price
  ){

    setError(
      "لطفاً اطلاعات ضروری را کامل کنید"
    );

    return;

  }


  const numericRating =
  Number(rating || 0);


  if(
    numericRating < 0 ||
    numericRating > 5
  ){

    setError(
      "امتیاز باید بین ۰ تا ۵ باشد"
    );

    return;

  }



  addProduct({

    id:
    Date.now().toString(),


    name,


    slug:
    name
    .trim()
    .toLowerCase()
    .replaceAll(" ","-"),


    category,


    price:
    Number(price),


    oldPrice:
    oldPrice
    ? Number(oldPrice)
    : undefined,


    rating:
    numericRating,


    badge:
    badge || undefined,


    image:
    "/images/product-placeholder.jpg",

  });


  router.push(
    "/admin/products"
  );

}

return (

<main
className="
min-h-screen
bg-[#f8f5ed]
py-32
"
>

<Container>

<div
className="
rounded-3xl
bg-white
p-8
shadow-xl
max-w-xl
"
>

<h1
className="
text-3xl
font-bold
text-[#203c27]
"
>
افزودن محصول
</h1>


<div
className="
mt-8
space-y-5
"
>


<input
value={name}
onChange={
e=>setName(e.target.value)
}
placeholder="نام محصول"
className="
w-full
rounded-2xl
border
px-5
py-4
"
/>



<input
value={category}
onChange={
e=>setCategory(e.target.value)
}
placeholder="دسته بندی"
className="
w-full
rounded-2xl
border
px-5
py-4
"
/>



<input
value={price}
onChange={
e=>setPrice(e.target.value)
}
placeholder="قیمت"
className="
w-full
rounded-2xl
border
px-5
py-4
"
/>

<input
value={oldPrice}
onChange={
 e=>setOldPrice(e.target.value)
}
placeholder="قیمت قبلی"
className="
w-full
rounded-2xl
border
px-5
py-4
"
/>

<input
value={rating}
onChange={
e=>setRating(e.target.value)
}
placeholder="امتیاز"
className="
w-full
rounded-2xl
border
px-5
py-4
"
/>

<input
value={badge}
onChange={
 e=>setBadge(e.target.value)
}
placeholder="برچسب (مثلاً جدید)"
className="
w-full
rounded-2xl
border
px-5
py-4
"
/>
{
error && (
<p
className="
text-red-600
text-sm
"
>
{error}
</p>
)
}
<button
onClick={submit}
className="
w-full
rounded-full
bg-[#d97706]
py-4
text-white
font-bold
"
>
ثبت محصول
</button>


</div>


</div>


</Container>


</main>

);

}
