import {
  getStorageItem,
  setStorageItem,
} from "@/lib/storage/local-storage";
import type {
  Order,
  OrderStatus,
} from "../types";
const ORDER_KEY = "matcha-orders";
export function getOrders(){
  return getStorageItem<Order[]>(
    ORDER_KEY,
    []
  );
}
export function saveOrder(
  order: Order
){
  const orders = getOrders();
  setStorageItem(
    ORDER_KEY,
    [
      ...orders,
      order
    ]
  );
}
export function updateOrderStatus(
  id:string,
  status:OrderStatus
){
  const orders = getOrders();
  const updated =
    orders.map(order =>
      order.id === id
      ?
      {
        ...order,
        status
      }
      :
      order
    );
  setStorageItem(
    ORDER_KEY,
    updated
  );
}
export function createOrderId(){
  return (
    "MC-" +
    Math.random()
    .toString(36)
    .substring(2,8)
    .toUpperCase()
  );
}
