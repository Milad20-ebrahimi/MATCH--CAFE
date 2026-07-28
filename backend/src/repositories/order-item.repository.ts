import { eq } from "drizzle-orm";

import { db } from "../database/index.js";
import { orderItems } from "../database/schema/order-item.schema.js";
import { products } from "../database/schema/product.schema.js";
import type {
  NodePgDatabase,
} from "drizzle-orm/node-postgres";
type Database = NodePgDatabase<any>;
export async function createOrderItem(
  data: {
    orderId: string;
    productId: string;
    quantity: number;
    price: number;
  },
   tx: Database = db
) {

  const item = await tx
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
  }[],
   tx: Database = db
) {

  const result = await tx
    .insert(orderItems)
    .values(items)
    .returning();


  return result;

}


export async function findOrderItems(
  orderId: string
) {

  return await db
    .select({

      id: orderItems.id,

      quantity:
        orderItems.quantity,

      price:
        orderItems.price,


      product: {

        id: products.id,

        name:
          products.name,

        slug:
          products.slug,

        imageUrl:
          products.imageUrl,

      },

    })
    .from(orderItems)
    .leftJoin(
      products,
      eq(
        orderItems.productId,
        products.id
      )
    )
    .where(
      eq(orderItems.orderId, orderId)
    );

}