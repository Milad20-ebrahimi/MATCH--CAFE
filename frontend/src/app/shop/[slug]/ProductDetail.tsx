"use client";

import { useState } from "react";
import Image from "next/image";

import Container from "@/components/shared/Container";
import AddToCartButton from "@/features/products/components/AddToCartButton";

import type { Product } from "@/types/product";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({
  product,
}: ProductDetailProps) {

  const [quantity, setQuantity] = useState(1);

  function increase() {
    setQuantity((q) => q + 1);
  }

  function decrease() {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  }

  return (
    <main className="bg-[#f8f5ed] py-32">

      <Container>

        <div className="grid gap-14 md:grid-cols-2">

          <div className="relative h-[520px] overflow-hidden rounded-[2rem]">

            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />

            {product.badge && (
              <span
                className="
                absolute
                left-6
                top-6
                rounded-full
                bg-[#d97706]
                px-5
                py-2
                text-sm
                font-bold
                text-white
                "
              >
                {product.badge}
              </span>
            )}

          </div>

          <div className="flex flex-col justify-center">

            <span className="text-sm font-semibold uppercase tracking-wider text-[#d97706]">
              {product.category}
            </span>

            <h1
              className="
              mt-4
              font-serif
              text-5xl
              font-bold
              text-[#203c27]
              "
            >
              {product.name}
            </h1>

            <div className="mt-5 text-xl text-yellow-500">
              ★ {product.rating}
            </div>

            <p
              className="
              mt-8
              leading-8
              text-slate-600
              "
            >
              محصول پریمیوم مجموعه MATCH--CAFE با کیفیت بالا و انتخاب شده برای
              تجربه‌ای متفاوت از نوشیدنی‌های تخصصی.
            </p>

            <div className="mt-8 flex items-end gap-5">

              <span
                className="
                text-4xl
                font-bold
                text-[#203c27]
                "
              >
                {product.price.toLocaleString()} تومان
              </span>

              {product.oldPrice && (
                <span
                  className="
                  text-xl
                  text-slate-400
                  line-through
                  "
                >
                  {product.oldPrice.toLocaleString()} تومان
                </span>
              )}

            </div>

            <div className="mt-6 space-y-2 text-sm text-slate-600">

              <p>✔ ارسال رایگان</p>

              <p>✔ موجود در انبار</p>

            </div>

            <div
              className="
              mt-10
              flex
              items-center
              gap-4
              "
            >

              <button
                onClick={decrease}
                className="
                h-12
                w-12
                rounded-full
                border
                text-xl
                transition
                hover:bg-[#203c27]
                hover:text-white
                "
              >
                −
              </button>

              <span
                className="
                text-2xl
                font-bold
                text-[#203c27]
                "
              >
                {quantity}
              </span>

              <button
                onClick={increase}
                className="
                h-12
                w-12
                rounded-full
                border
                text-xl
                transition
                hover:bg-[#203c27]
                hover:text-white
                "
              >
                +
              </button>

            </div>

            <p
              className="
              mt-4
              text-sm
              text-slate-500
              "
            >
              تعداد انتخاب‌شده: {quantity}
            </p>

            <AddToCartButton
              product={product}
              quantity={quantity}
            />

          </div>

        </div>

      </Container>

    </main>
  );

}
