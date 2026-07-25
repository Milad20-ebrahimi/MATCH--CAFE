import {
  Leaf,
  Coffee,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Container from "@/components/shared/Container";


const features = [
  {
    icon: Leaf,
    title: "ماچای اصیل ژاپنی",
    desc: "انتخاب شده از بهترین مزارع ماچا",
  },
  {
    icon: Coffee,
    title: "قهوه تخصصی",
    desc: "دانه‌های تازه و برشته شده",
  },
  {
    icon: ShieldCheck,
    title: "کیفیت تضمین شده",
    desc: "تجربه‌ای که به آن اعتماد دارید",
  },
  {
    icon: Truck,
    title: "ارسال سریع",
    desc: "دریافت سفارش در کوتاه‌ترین زمان",
  },
];


export default function FeaturesSection(){

  return (

<section
className="
border-b
border-forest/10
bg-white
py-16
"
>


<Container>

<div
className="
grid
grid-cols-2
gap-8
md:grid-cols-4
"
>


{
features.map((item)=>{

const Icon=item.icon;

return (

<div
key={item.title}
className="
flex
flex-col
items-center
gap-3
text-center
"
>


<div
className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-[#355e3b]/10
text-[#355e3b]
"
>

<Icon size={24}/>

</div>


<h3
className="
font-semibold
text-forest
"
>
{item.title}
</h3>


<p
className="
text-sm
text-forest/60
"
>
{item.desc}
</p>


</div>

);

})
}


</div>


</Container>


</section>

  );

}
