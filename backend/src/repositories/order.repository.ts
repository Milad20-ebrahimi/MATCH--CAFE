import { eq } from "drizzle-orm";

import { db } from "../database/index.js";
import { orders } from "../database/schema/order.schema.js";
import type {
  NodePgDatabase,
} from "drizzle-orm/node-postgres";
type Database = NodePgDatabase<any>;
export async function createOrder(
  data: {
    userId: string;
    totalAmount: number;
  },
  tx: Database = db
) {

  const order = await tx
    .insert(orders)
    .values({
      userId: data.userId,
      totalAmount: data.totalAmount,
    })
    .returning();


  return order[0];

}



export async function findOrderById(
  id: string
) {

  const order = await db
    .select()
    .from(orders)
    .where(
      eq(orders.id, id)
    )
    .limit(1);


  return order[0] ?? null;

}



export async function findUserOrders(
  userId: string
) {

  return await db
    .select()
    .from(orders)
    .where(
      eq(orders.userId, userId)
    );

}