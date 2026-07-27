import {
  pgTable,
  uuid,
  varchar,
  boolean,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

import { products } from "./product.schema.js";


export const productImages = pgTable(
  "product_images",
  {

    id: uuid("id")
      .defaultRandom()
      .primaryKey(),

    productId: uuid("product_id")
      .notNull()
      .references(() => products.id, {
        onDelete: "cascade",
      }),


    imageUrl: varchar("image_url", {
      length: 500,
    })
      .notNull(),


    isPrimary: boolean("is_primary")
      .default(false)
      .notNull(),


    sortOrder: integer("sort_order")
      .default(0)
      .notNull(),


    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull(),

  }
);