import Image from "next/image";
import Link from "next/link";
import { Clock3 } from "lucide-react";

import Container from "@/components/shared/Container";


export default function AboutSection(){

  return (

<section
className="
py-24
bg-white
"
>


<Container>

<div
className="
grid
items-center
gap-12
lg:grid-cols-2
"
>


{/* Image */}

<div
className="
relative
aspect-[4/5]
overflow-hidden
rounded-[3rem]
shadow-2xl
"
>

<Image
src="/images/matcha-hero.jpg"
alt="Matcha Cafe"
fill
className="
object-cover
"
/>

</div>





{/* Content */}

<div
className="
text-right
"
>


<span
className="
text-sm
font-semibold
tracking-widest
text-amber
"
>
درباره ما
</span>



<h2
className="
mt-4
font-serif
text-4xl
font-bold
leading-[1.5]
text-forest
md:text-5xl
"
>

داستان کافه ماچا
از عشق به چای شروع شد

</h2>



<p
className="
mt-6
leading-8
text-forest/70
"
>

ما در MATCH--CAFE تلاش می‌کنیم تجربه‌ای متفاوت
از ماچای اصیل، قهوه تخصصی و فضای آرام کافه‌ای
را برای شما فراهم کنیم.

محصولات ما با دقت انتخاب می‌شوند تا کیفیت واقعی
را در هر فنجان تجربه کنید.

</p>




<div
className="
mt-6
flex
items-center
gap-3
text-forest/70
"
>

<Clock3
className="text-amber"
/>

<span>
هر روز ۸ صبح تا ۱۰ شب
</span>

</div>




<Link
href="/about"
className="
mt-8
inline-block
rounded-full
bg-forest
px-8
py-3.5
text-white
transition
hover:bg-forest/90
"
>

داستان ما را بخوانید

</Link>



</div>


</div>


</Container>


</section>


  );

}
