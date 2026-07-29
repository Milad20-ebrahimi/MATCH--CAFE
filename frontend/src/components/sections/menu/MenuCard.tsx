import Image from "next/image";


export default function MenuCard({
  item,
}: {
  item: any;
}) {


  return (

    <article
      dir="rtl"
      className="
      group
      overflow-hidden
      rounded-[32px]
      bg-white
      border
      border-[#eadfc9]
      shadow-sm
      transition-all
      duration-500
      hover:-translate-y-3
      hover:shadow-2xl
      "
    >



      {/* Image */}

      <div
        className="
        relative
        h-72
        overflow-hidden
        "
      >

        <Image

          src={
            item.imageUrl ||
            "/images/menu-placeholder.jpg"
          }

          alt={item.name}

          fill

          className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "

        />



        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#203C27]/50
          via-transparent
          to-transparent
          "
        />


      </div>





      {/* Content */}

      <div
        className="
        p-6
        text-center
        "
      >



        <h2
          className="
          font-serif
          text-2xl
          font-black
          text-[#203C27]
          "
        >
          {item.name}
        </h2>




        <p
          className="
          mt-3
          min-h-[56px]
          text-sm
          leading-7
          text-[#203C27]/60
          "
        >
          {item.description}
        </p>





        <div
          className="
          mt-5
          flex
          items-center
          justify-center
          gap-1
          text-xl
          font-black
          text-[#C6A664]
          "
        >

          {Number(item.price).toLocaleString("fa-IR")}


          <span
            className="
            text-xs
            font-normal
            text-[#203C27]/60
            "
          >
            تومان
          </span>


        </div>




        <div
          className="
          mx-auto
          mt-5
          h-1
          w-12
          rounded-full
          bg-[#C6A664]
          transition-all
          duration-500
          group-hover:w-20
          "
        />


      </div>



    </article>

  );

}
