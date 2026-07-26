import {
  pgTable,
  uuid,
  varchar,
  integer,
  timestamp,
  text,
} from "drizzle-orm/pg-core";


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

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),

});