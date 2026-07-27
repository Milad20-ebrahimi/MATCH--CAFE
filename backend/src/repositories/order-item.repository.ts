import { eq } from "drizzle-orm";

import { db } from "../database/index.js";
import { orderItems } from "../database/schema/order-item.schema.js";


export async function createOrderItem(
  data: {
    orderId: string;
    productId: string;
    quantity: number;
    price: number;
  }
) {

  const item = await db
    .insert(orderItems)
    .values(data)
    .returning();


  return item[0];

}



export async function createManyOrderItems(
  items: {
    orderId: string;
    productId: string;
    quantity: number;
    price: number;
  }[]
) {

  const result = await db
    .insert(orderItems)
    .values(items)
    .returning();


  return result;

}



export async function findOrderItems(
  orderId: string
) {

  return await db
    .select()
    .from(orderItems)
    .where(
      eq(orderItems.orderId, orderId)
    );

}
