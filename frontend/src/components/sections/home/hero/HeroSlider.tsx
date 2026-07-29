"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  CafeContact,
  HeroSlide,
} from "./types";

import SlideMediaLayer from "./SlideMediaLayer";

import { useCountdown } from "./useCountdown";
import { useOpenStatus } from "./useOpenStatus";

import { heroSlides } from "@/data/heroSlides";

interface HeroSliderProps {
  slides?: HeroSlide[];
  autoPlayMs?: number;
  contact?: CafeContact;
}

const defaultContact: CafeContact = {
  phone: "021-12345678",
  address: "تهران، خیابان ولیعصر",
};

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides = heroSlides,
  autoPlayMs = 6000,
  contact = defaultContact,
}) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const [isHovering, setIsHovering] = useState(false);

  const [isPlaying, setIsPlaying] = useState(true);

  const [isMuted, setIsMuted] = useState(true);


  const [scrollY, setScrollY] = useState(0);

  const videoRefs =
    useRef<Array<HTMLVideoElement | null>>([]);

  const timeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const touchStartX =
    useRef<number | null>(null);

  const sectionRef =
    useRef<HTMLElement | null>(null);

  const isPaused =
    isHovering || !isPlaying;

  const activeSlide =
    slides[activeIndex];

  const openStatus =
    useOpenStatus();

  const countdown =
    useCountdown(activeSlide.offer?.endsAt);

  const goTo = useCallback(

    (index:number)=>{

      const next =
        (index + slides.length) % slides.length;

      setActiveIndex(next);

    },

    [slides.length]

  );

  const goNext = useCallback(
    ()=>goTo(activeIndex+1),
    [activeIndex,goTo]
  );

  const goPrev = useCallback(
    ()=>goTo(activeIndex-1),
    [activeIndex,goTo]
  );

  /* پخش و توقف ویدئوها */
  useEffect(() => {

  videoRefs.current.forEach((video, index) => {

    if (!video) return;

    if (index === activeIndex) {

      video.currentTime = 0;

      video.muted = true;

      video.play().catch(() => undefined);

    } else {

      video.pause();

    }

  });

}, [activeIndex]);


  /* اسلاید خودکار */

  useEffect(() => {

    if (isPaused) return;

    if (timeoutRef.current) {

      clearTimeout(timeoutRef.current);

    }

    timeoutRef.current = setTimeout(
      goNext,
      autoPlayMs
    );

    return () => {

      if (timeoutRef.current) {

        clearTimeout(timeoutRef.current);

      }

    };

  }, [

    activeIndex,

    isPaused,

    autoPlayMs,

    goNext,
  ]);



  /* کیبورد */

  useEffect(() => {

    const handleKeyDown = (
      e: KeyboardEvent
    ) => {

      if (e.key === "ArrowLeft") {

        goNext();

      }

      if (e.key === "ArrowRight") {

        goPrev();

      }

      if (e.key === " ") {

        e.preventDefault();

        setIsPlaying((p) => !p);

      }

    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

  }, [goNext, goPrev]);



  /* پارالاکس */

  useEffect(() => {

    const handleScroll = () => {

      setScrollY(window.scrollY);

    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);




  /* Swipe */

  const handleTouchStart = (
    e: React.TouchEvent
  ) => {

    touchStartX.current =
      e.touches[0].clientX;

  };



  const handleTouchEnd = (
    e: React.TouchEvent
  ) => {

    if (
      touchStartX.current === null
    )
      return;

    const delta =
      e.changedTouches[0].clientX -
      touchStartX.current;

    if (delta < -50) {

      goNext();

    }

    if (delta > 50) {

      goPrev();

    }

    touchStartX.current = null;

  };



  const heroHeight =
    sectionRef.current?.offsetHeight ??
    800;

  const parallaxProgress =
    Math.min(
      Math.max(
        scrollY / heroHeight,
        0
      ),
      1
    );

  const parallaxOffset =
    parallaxProgress * 30;

  const parallaxOpacity = 1;



  return (

    <section

      ref={sectionRef}

      dir="rtl"

      onMouseEnter={() =>
        setIsHovering(true)
      }

      onMouseLeave={() =>
        setIsHovering(false)
      }

      onTouchStart={
        handleTouchStart
      }

      onTouchEnd={
        handleTouchEnd
      }

      className="
      relative
      isolate
      h-screen
      min-h-[700px]
      overflow-hidden
      bg-stone-950
      "
    >
{/* Screen Reader */}

<div
  className="sr-only"
  aria-live="polite"
>
  {`اسلاید ${activeIndex + 1} از ${slides.length}: ${activeSlide.title}`}
</div>



{/* Media */}

{slides.map((slide, index) => {

  const nextIndex =
    (activeIndex + 1) % slides.length;

  const shouldLoad =
    index === activeIndex ||
    index === nextIndex;

  return (

    <div

      key={slide.id}

      id={`hero-slide-${index}`}

      role="tabpanel"

      aria-hidden={
        index !== activeIndex
      }

      className={`
      absolute
      inset-0
      transition-opacity
      duration-700

      ${
        index === activeIndex

          ? "z-10 opacity-100"

          : "z-0 opacity-0"

      }

      `}

    >

      <SlideMediaLayer

        domId={`hero-media-${index}`}

        media={slide.media}

        isActive={
          index === activeIndex
        }

        shouldLoad={shouldLoad}

        isMuted={isMuted}

        registerVideoRef={(el) => {

          videoRefs.current[index] = el;

        }}

      />



      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/90
        via-black/50
        to-black/10
        "
      />

    </div>

  );

})}



{/* Contact */}

<div
  className="
  absolute
  top-28
  right-6
  z-30
  hidden
  flex-col
  items-end
  gap-2
  sm:flex
  "
>

  <span

    className={`
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    px-3
    py-1
    text-xs
    backdrop-blur-sm

    ${
      openStatus.isOpen

        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"

        : "border-red-400/30 bg-red-400/10 text-red-300"

    }

    `}

  >

    <span

      className={`
      h-2
      w-2
      rounded-full

      ${
        openStatus.isOpen

          ? "bg-emerald-400"

          : "bg-red-400"

      }

      `}

    />

    {openStatus.label}

  </span>



  <a

    href={`tel:${contact.phone}`}

    className="
    text-xs
    text-stone-200
    hover:text-amber-300
    "

  >

    {contact.phone}

  </a>



  <span
    className="
    text-xs
    text-stone-400
    "
  >

    {contact.address}

  </span>

</div>



{/* Content */}

<div

  className="
  relative
  z-20
  flex
  h-full
  items-end
  pb-32
  "

  style={{

    transform:
      `translateY(${parallaxOffset}px)`,

    opacity:
      parallaxOpacity,

  }}

>

  <div
    className="
    mx-auto
    w-full
    max-w-7xl
    px-6
    "
  >

<div
  key={activeSlide.id}
  className="
    max-w-xl
    animate-heroContent
  "
>
<span
  className="
  inline-flex
  items-center
  gap-2
  rounded-full
  border
  border-amber-400/30
  bg-amber-400/10
  px-4
  py-2
  text-xs
  font-semibold
  text-amber-300
  "
>
  {activeSlide.eyebrow}
</span>



<h1
  className="
  mt-5
  text-4xl
  font-extrabold
  leading-tight
  text-white
  sm:text-5xl
  lg:text-6xl
  "
>
  {activeSlide.title}
</h1>



<p
  className="
  mt-5
  max-w-md
  text-base
  leading-8
  text-stone-300
  sm:text-lg
  "
>
  {activeSlide.description}
</p>
</div>



{activeSlide.offer && !countdown.isExpired && (

  <div
    className="
    mt-6
    inline-flex
    items-center
    gap-3
    rounded-2xl
    border
    border-amber-400/20
    bg-black/40
    px-4
    py-3
    backdrop-blur-md
    "
  >

    <span
      className="
      text-xs
      text-stone-300
      "
    >

      {activeSlide.offer.label}

    </span>



    <span
      className="
      font-mono
      text-sm
      font-bold
      text-amber-300
      "
    >

      {countdown.days}d :

      {countdown.hours}h :

      {countdown.minutes}m :

      {countdown.seconds}s

    </span>


  </div>

)}




<a

href={activeSlide.ctaHref}

className="
mt-8
inline-flex
items-center
rounded-full
bg-[#d97706]
px-8
py-4
font-bold
text-black
transition
hover:scale-105
"

>

{activeSlide.ctaLabel}

</a>



    </div>

  </div>






{/* Controls */}

<div

className="
absolute
bottom-6
left-6
right-6
z-20
flex
items-center
justify-between
"

>


<div
className="
flex
gap-3
"
>


<button

type="button"

onClick={goPrev}

className="
h-10
w-10
rounded-full
border
border-white/30
text-white
backdrop-blur
"

>

‹

</button>




<button

type="button"

onClick={goNext}

className="
h-10
w-10
rounded-full
border
border-white/30
text-white
backdrop-blur
"

>

›

</button>




<button

type="button"

onClick={() =>
  setIsPlaying((p)=>!p)
}

className="
h-10
w-10
rounded-full
border
border-white/30
text-white
backdrop-blur
"

>

{isPlaying ? "Ⅱ" : "▶"}

</button>



</div>





{activeSlide.media.type === "video" && (

<button

type="button"

onClick={() =>
  setIsMuted((m)=>!m)
}

className="
h-10
w-10
rounded-full
border
border-white/30
text-white
backdrop-blur
"

>

{isMuted ? "🔇" : "🔊"}

</button>

)}



</div>



    </section>

  );

};



export default HeroSlider;
