import {
  pgTable,
  uuid,
  varchar,
  integer,
  timestamp,
  text,
} from "drizzle-orm/pg-core";
import { categories } from "./category.schema.js";
import { brands } from "./brand.schema.js";

export const products = pgTable("products", {

  id: uuid("id")
    .defaultRandom()
    .primaryKey(),

  name: varchar("name", {
    length: 255,
  })
    .notNull(),

  slug: varchar("slug", {
    length: 255,
  })
    .notNull()
    .unique(),

  description: text("description"),

  price: integer("price")
    .notNull(),

  stock: integer("stock")
    .default(0)
    .notNull(),

  imageUrl: varchar("image_url", {
    length: 500,
  }),
  categoryId: uuid("category_id")
  .notNull()
  .references(() => categories.id),

brandId: uuid("brand_id")
  .notNull()
  .references(() => brands.id),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),

});