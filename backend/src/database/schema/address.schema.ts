import {
  pgTable,
  uuid,
  varchar,
  boolean,
  timestamp,
  text,
} from "drizzle-orm/pg-core";

import { users } from "./user.schema.js";


export const addresses = pgTable(
  "addresses",
  {
    id: uuid("id")
      .defaultRandom()
      .primaryKey(),

    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, {
        onDelete: "cascade",
      }),

    title: varchar("title", {
      length: 100,
    })
      .notNull(),

    recipientName: varchar("recipient_name", {
      length: 100,
    })
      .notNull(),

    recipientPhone: varchar("recipient_phone", {
      length: 20,
    })
      .notNull(),

    province: varchar("province", {
      length: 100,
    })
      .notNull(),

    city: varchar("city", {
      length: 100,
    })
      .notNull(),

    address: text("address")
      .notNull(),

    postalCode: varchar("postal_code", {
      length: 20,
    })
      .notNull(),

    buildingNumber: varchar("building_number", {
      length: 20,
    }),

    unit: varchar("unit", {
      length: 20,
    }),

    isDefault: boolean("is_default")
      .default(false)
      .notNull(),

    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull(),

    updatedAt: timestamp("updated_at")
      .defaultNow()
      .notNull(),
  }
);