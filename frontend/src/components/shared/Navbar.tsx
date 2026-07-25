"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ShoppingBag,
  Menu,
  X,
  Leaf,
  User,
} from "lucide-react";


const navLinks = [
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
  {
    label: "تماس",
    href: "/contact",
  },
];


export default function Navbar(){

  const [open,setOpen]=useState(false);


  return (

<header
className="
fixed
top-4
left-4
right-4
z-[999]
rounded-[3rem]
border
border-white/20
bg-white/20
backdrop-blur-xl
shadow-xl
"
>


<div
className="
mx-auto
flex
max-w-7xl
items-center
justify-between
px-6
py-3
"
>


{/* Logo */}

<Link
href="/"
className="
flex
items-center
gap-3
"
>


<div
className="
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-[#355e3b]
text-white
shadow-lg
"
>

<Leaf size={22}/>

</div>


<div>

<h1
className="
font-serif
text-xl
font-bold
text-white
"
>
MATCH--CAFE
</h1>

<p
className="
text-xs
text-white/70
"
>
Cafe & Matcha Store
</p>


</div>


</Link>





{/* Desktop */}

<nav
className="
hidden
items-center
gap-8
md:flex
"
>

{
navLinks.map(item=>(

<Link
key={item.href}
href={item.href}
className="
text-sm
font-medium
text-white/90
transition
hover:text-amber
"
>

{item.label}

</Link>

))
}


</nav>





{/* Actions */}

<div
className="
flex
items-center
gap-3
"
>


<Link
href="/login"
className="
hidden
h-11
w-11
items-center
justify-center
rounded-full
bg-amber
text-white
md:flex
"
>

<User size={18}/>

</Link>




<Link
href="/reservation"
className="
hidden
rounded-full
bg-[#355e3b]
px-5
py-3
text-sm
font-medium
text-white
md:flex
"
>

رزرو میز

</Link>




<Link
href="/cart"
className="
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-amber
text-white
"
>

<ShoppingBag size={20}/>

</Link>




<button
onClick={()=>setOpen(!open)}
className="
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-white
text-[#355e3b]
md:hidden
"
>

{
open ? <X/> : <Menu/>
}

</button>


</div>



</div>





{/* Mobile */}

{
open && (

<nav
className="
rounded-b-[3rem]
bg-[#f8f5ed]
px-5
py-4
md:hidden
"
>

{
navLinks.map(item=>(

<Link
key={item.href}
href={item.href}
onClick={()=>setOpen(false)}
className="
block
rounded-xl
px-4
py-3
text-[#355e3b]
hover:bg-orange-100
"
>

{item.label}

</Link>

))
}


</nav>

)

}



</header>


  );

}
