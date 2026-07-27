import {
  pgTable,
  uuid,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

import { orders } from "./order.schema.js";
import { products } from "./product.schema.js";


export const orderItems = pgTable(
  "order_items",
  {

    id: uuid("id")
      .defaultRandom()
      .primaryKey(),


    orderId: uuid("order_id")
      .notNull()
      .references(() => orders.id),


    productId: uuid("product_id")
      .notNull()
      .references(() => products.id),


    quantity: integer(
      "quantity"
    )
      .notNull(),


    price: integer(
      "price"
    )
      .notNull(),


    createdAt: timestamp(
      "created_at"
    )
      .defaultNow()
      .notNull(),

  }
);