import {
  pgTable,
  uuid,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";
import {
  unique,
} from "drizzle-orm/pg-core";
import { carts } from "./cart.schema.js";
import { products } from "./product.schema.js";

export const cartItems = pgTable(
  "cart_items",
  {

    id: uuid("id")
      .defaultRandom()
      .primaryKey(),

    cartId: uuid("cart_id")
      .notNull()
      .references(() => carts.id),

    productId: uuid("product_id")
      .notNull()
      .references(() => products.id),

    quantity: integer("quantity")
      .default(1)
      .notNull(),

    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull(),

    updatedAt: timestamp("updated_at")
      .defaultNow()
      .notNull(),

  },
  (table) => ({
    uniqueProductInCart:
      unique().on(
        table.cartId,
        table.productId
      ),
  })
);