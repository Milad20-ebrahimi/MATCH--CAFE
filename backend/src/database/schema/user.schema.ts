import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";


export const userRoleEnum = pgEnum(
  "user_role",
  [
    "USER",
    "ADMIN",
    "STAFF",
  ]
);


export const users = pgTable("users", {

  id: uuid("id")
    .defaultRandom()
    .primaryKey(),

  name: varchar("name", {
    length: 100,
  }),

  email: varchar("email", {
    length: 255,
  })
    .notNull()
    .unique(),

  password: varchar("password", {
    length: 255,
  })
    .notNull(),

  role: userRoleEnum("role")
    .default("USER")
    .notNull(),

  phone: varchar("phone", {
    length: 20,
  }),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),

});