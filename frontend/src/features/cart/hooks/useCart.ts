import {
  useCart as useCartContext,
} from "../context/CartContext";
export function useCart() {
  return useCartContext();
}
export {
  useCart as default
}
from "@/features/cart/context/CartContext";
