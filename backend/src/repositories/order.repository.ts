import {
  eq,
  desc,
} from "drizzle-orm";

import { db } from "../database/index.js";

import { orders } from "../database/schema/order.schema.js";
import { users } from "../database/schema/user.schema.js";
import { orderItems } from "../database/schema/order-item.schema.js";
import { products } from "../database/schema/product.schema.js";
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
export async function findAllOrders() {

  return await db
    .select()
    .from(orders)
    .orderBy(
      desc(orders.createdAt)
    );

}
export async function updateOrderStatus(
  id: string,
  status:
    | "pending"
    | "confirmed"
    | "processing"
    | "shipped"
    | "completed"
    | "cancelled"
) {

  const order = await db
    .update(orders)
    .set({
      status,
      updatedAt: new Date(),
    })
    .where(
      eq(orders.id, id)
    )
    .returning();


  return order[0] ?? null;

}
export async function findAllOrdersWithDetails() {

  return await db
    .select({

      order: {
        id: orders.id,
        status: orders.status,
        totalAmount: orders.totalAmount,
        createdAt: orders.createdAt,
      },

      user: {
        id: users.id,
        name: users.name,
        email: users.email,
      },

      item: {
        id: orderItems.id,
        quantity: orderItems.quantity,
        price: orderItems.price,
      },

      product: {
        id: products.id,
        name: products.name,
        slug: products.slug,
        imageUrl: products.imageUrl,
      },

    })

    .from(orders)

    .leftJoin(
      users,
      eq(
        orders.userId,
        users.id
      )
    )

    .leftJoin(
      orderItems,
      eq(
        orders.id,
        orderItems.orderId
      )
    )

    .leftJoin(
      products,
      eq(
        orderItems.productId,
        products.id
      )
    )

    .orderBy(
      desc(orders.createdAt)
    );

}