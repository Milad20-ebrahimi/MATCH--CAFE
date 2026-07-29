import {
  pgTable,
  uuid,
  integer,
  date,
  time,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

import { users } from "./user.schema.js";
import { cafeTables } from "./cafe-table.schema.js";

export const reservationStatusEnum = pgEnum(
  "reservation_status",
  [
    "PENDING",
    "CONFIRMED",
    "CANCELLED",
    "COMPLETED",
  ]
);

export const reservations = pgTable("reservations", {
  id: uuid("id")
    .defaultRandom()
    .primaryKey(),

  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, {
      onDelete: "cascade",
    }),

  tableId: uuid("table_id")
    .notNull()
    .references(() => cafeTables.id, {
      onDelete: "restrict",
    }),

  reservationDate: date("reservation_date")
    .notNull(),

  startTime: time("start_time")
    .notNull(),

  endTime: time("end_time")
    .notNull(),

  guestCount: integer("guest_count")
    .notNull(),

  status: reservationStatusEnum("status")
    .default("PENDING")
    .notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),
});