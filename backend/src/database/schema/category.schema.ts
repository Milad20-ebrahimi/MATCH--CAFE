import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";


export const categoryTypeEnum = pgEnum(
  "category_type",
  [
    "CAFE",
    "STORE",
  ]
);


export const categories = pgTable(
  "categories",
  {

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


    type: categoryTypeEnum("type")
      .notNull(),


    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull(),


    updatedAt: timestamp("updated_at")
      .defaultNow()
      .notNull(),

  }
);