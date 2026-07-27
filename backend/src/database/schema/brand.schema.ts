import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const brands = pgTable("brands", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: varchar("name", {
    length: 100,
  }).notNull(),

  slug: varchar("slug", {
    length: 120,
  }).notNull().unique(),

  description: text("description"),

  logoUrl: text("logo_url"),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});