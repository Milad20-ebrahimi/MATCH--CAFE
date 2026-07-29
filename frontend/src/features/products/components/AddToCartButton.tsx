"use client";

import Button from "@/components/ui/Button";
import { useCart } from "@/features/cart/hooks/useCart";
import type { Product } from "@/types/product";
import { useRouter } from "next/navigation";


interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
}


export default function AddToCartButton({
  product,
  quantity = 1,
}: AddToCartButtonProps) {


  const { addToCart } = useCart();

  const router = useRouter();


  function handleClick() {


    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }


    router.push("/cart");

  }



  return (

<Button
  variant="cart"
  onClick={handleClick}
  className="
  w-full
  py-4
  text-base
  font-semibold
  "
>
  افزودن به سبد خرید
</Button>

  );

}
