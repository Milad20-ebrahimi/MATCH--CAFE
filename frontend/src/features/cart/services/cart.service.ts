import {
  getStorageItem,
  setStorageItem,
} from "@/lib/storage/local-storage";
import type { CartItem } from "../types";
const CART_KEY = "matcha-cart";
export function getCart(){
  return getStorageItem<CartItem[]>(
    CART_KEY,
    []
  );}
export function saveCart(
  items: CartItem[]
){
  setStorageItem(
    CART_KEY,
    items
  );}
