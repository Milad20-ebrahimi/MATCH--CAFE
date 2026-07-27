import {
  pgTable,
  uuid,
  timestamp,
} from "drizzle-orm/pg-core";
import {
  unique,
} from "drizzle-orm/pg-core";

import { users } from "./user.schema.js";


export const carts = pgTable(
  "carts",
  {

    id: uuid("id")
      .defaultRandom()
      .primaryKey(),

    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),

    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull(),

    updatedAt: timestamp("updated_at")
      .defaultNow()
      .notNull(),

  },
  (table) => ({
    userCartUnique:
      unique().on(table.userId),
  })
);
