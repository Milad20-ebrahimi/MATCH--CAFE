import {
  pgTable,
  uuid,
  integer,
  varchar,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

export const cafeTableStatusEnum = pgEnum(
  "cafe_table_status",
  [
    "AVAILABLE",
    "INACTIVE",
    "MAINTENANCE",
  ]
);

export const cafeTables = pgTable("cafe_tables", {
  id: uuid("id")
    .defaultRandom()
    .primaryKey(),

  tableNumber: integer("table_number")
    .notNull()
    .unique(),

  capacity: integer("capacity")
    .notNull(),

  status: cafeTableStatusEnum("status")
    .default("AVAILABLE")
    .notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),
});