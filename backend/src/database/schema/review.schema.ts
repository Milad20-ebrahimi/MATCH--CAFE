import {
  pgTable,
  uuid,
  integer,
  text,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

import { users } from "./user.schema.js";
import { products } from "./product.schema.js";
import { orders } from "./order.schema.js";


export const reviews = pgTable(
  "reviews",
  {

    id: uuid("id")
      .defaultRandom()
      .primaryKey(),


    userId:
      uuid("user_id")
      .notNull()
      .references(
        () => users.id,
        {
          onDelete: "cascade",
        }
      ),


    productId:
      uuid("product_id")
      .notNull()
      .references(
        () => products.id,
        {
          onDelete: "cascade",
        }
      ),


    orderId:
      uuid("order_id")
      .notNull()
      .references(
        () => orders.id,
        {
          onDelete: "cascade",
        }
      ),


    rating:
      integer("rating")
      .notNull(),


    comment:
      text("comment"),


    createdAt:
      timestamp("created_at")
      .defaultNow()
      .notNull(),


    updatedAt:
      timestamp("updated_at")
      .defaultNow()
      .notNull(),

  }
);