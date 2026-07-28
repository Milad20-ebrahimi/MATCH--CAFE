import {
  pgTable,
  uuid,
  integer,
  timestamp,
  pgEnum,
  text,
} from "drizzle-orm/pg-core";

import {
  products,
} from "./product.schema.js";


export const inventoryTypeEnum =
pgEnum(
  "inventory_type",
  [
    "IN",
    "OUT",
  ]
);


export const inventoryTransactions =
pgTable(
  "inventory_transactions",
  {

    id: uuid("id")
      .defaultRandom()
      .primaryKey(),


    productId:
      uuid("product_id")
      .references(
        () => products.id,
        {
          onDelete:
          "cascade",
        }
      )
      .notNull(),


    quantity:
      integer("quantity")
      .notNull(),


    type:
      inventoryTypeEnum(
        "type"
      )
      .notNull(),


    note:
      text("note"),


    createdAt:
      timestamp(
        "created_at"
      )
      .defaultNow()
      .notNull(),

  }
);