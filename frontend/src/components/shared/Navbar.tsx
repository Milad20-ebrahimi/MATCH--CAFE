"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  usePathname,
} from "next/navigation";

import Link from "next/link";

import {
  ShoppingBag,
  Menu,
  X,
  Leaf,
  User,
} from "lucide-react";

import {
  useAuth,
} from "@/features/auth/hooks/useAuth";

import {
  useCart,
} from "@/features/cart/hooks/useCart";



const navLinks = [

{
label:"خانه",
href:"/",
},

{
label:"فروشگاه",
href:"/shop",
},

{
label:"منوی کافه",
href:"/menu",
},

{
label:"درباره ما",
href:"/about",
},

{
label:"رزرو میز",
href:"/reservation",
},
];




export default function Navbar(){


const [open,setOpen] =
useState(false);


const [scrolled,setScrolled] =
useState(false);



const pathname =
usePathname();



const {
user,
logout,
}=useAuth();



const {
items,
}=useCart();



const cartCount =
items.reduce(
(total,item)=>
total + item.quantity,
0
);



useEffect(()=>{


const onScroll=()=>{

setScrolled(
window.scrollY > 50
);

};


window.addEventListener(
"scroll",
onScroll
);


return ()=>{

window.removeEventListener(
"scroll",
onScroll
);

};


},[]);





return (


<header

className={`
fixed
left-5
right-5
top-4
z-[999]

rounded-[2.5rem]

border

transition-all
duration-500

${
scrolled

?

"bg-white/90 backdrop-blur-xl shadow-xl border-[#355e3b]/10"

:

"bg-black/20 backdrop-blur-md border-white/20"

}

`}

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
h-12
w-12
items-center
justify-center
rounded-full

bg-[#355e3b]

text-white

shadow-lg

transition

hover:rotate-12

"

>

<Leaf size={24}/>

</div>



<div>


<h1

className="
font-serif
text-xl
font-bold
text-[#203c27]
"

>

کافه ماچا

</h1>


<p

className={`
text-xs

${
scrolled
?
"text-[#355e3b]"
:
"text-white"
}

`}

>

Matcha & Coffee Experience

</p>


</div>



</Link>







{/* Desktop menu */}


<nav

className="
hidden
items-center
gap-8
md:flex
"

>


{
navLinks.map(link=>(


<Link

key={link.href}

href={link.href}

className={`

relative

text-sm
font-semibold

transition

hover:text-[#d97706]

${

pathname===link.href

?

"text-[#d97706]"

:

scrolled

?

"text-[#355e3b]"

:

"text-white"

}

`}

>


{link.label}



</Link>


))
}



</nav>









<div

className="
flex
items-center
gap-3
"

>




{/* User */}


{
user

?

<Link

href="/account"

className="
hidden
rounded-full
bg-[#355e3b]
px-5
py-2

text-sm

text-white

md:block

"

>

{user.name}

</Link>


:

<Link

href="/login"

className="
hidden
h-11
w-11
items-center
justify-center
rounded-full

bg-[#d97706]

text-white

md:flex

"

>

<User size={18}/>

</Link>


}








{/* Cart */}


<Link

href="/cart"

className="

relative

flex

h-11

w-11

items-center

justify-center

rounded-full

bg-[#d97706]

text-white

shadow-lg

transition

hover:scale-110

"

>


<ShoppingBag size={20}/>



{
cartCount>0 &&

<span

className="
absolute
-right-1
-top-1

flex
h-5
w-5
items-center
justify-center

rounded-full

bg-[#203c27]

text-xs

text-white

"

>

{cartCount}

</span>

}


</Link>







{/* Mobile */}


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
open
?
<X/>
:
<Menu/>
}

</button>



</div>



</div>






{/* Mobile menu */}



{

open &&

(

<div

className="
mx-4
mb-4

rounded-3xl

bg-white

p-5

shadow-xl

md:hidden

"

>


{

navLinks.map(link=>(


<Link

key={link.href}

href={link.href}

onClick={()=>setOpen(false)}

className="
block

rounded-2xl

px-4

py-3

font-semibold

text-[#355e3b]

transition

hover:bg-[#f8f5ed]

"

>

{link.label}

</Link>


))

}



</div>


)

}



</header>



);

}
