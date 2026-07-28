import {
  pgTable,
  uuid,
  timestamp,
  unique,
} from "drizzle-orm/pg-core";

import { users } from "./user.schema.js";
import { products } from "./product.schema.js";


export const wishlistItems = pgTable(
  "wishlist_items",
  {

    id: uuid("id")
      .defaultRandom()
      .primaryKey(),

    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, {
        onDelete: "cascade",
      }),

    productId: uuid("product_id")
      .notNull()
      .references(() => products.id, {
        onDelete: "cascade",
      }),

    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull(),

  },

  (table) => ({
    userProductUnique:
      unique(
        "wishlist_user_product_unique"
      ).on(
        table.userId,
        table.productId
      ),
  })
);