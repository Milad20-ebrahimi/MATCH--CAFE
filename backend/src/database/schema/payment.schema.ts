import {
  pgTable,
  uuid,
  integer,
  timestamp,
  pgEnum,
  text,
} from "drizzle-orm/pg-core";

import {
  orders,
} from "./order.schema.js";


export const paymentStatusEnum =
  pgEnum(
    "payment_status",
    [
      "pending",
      "paid",
      "failed",
      "refunded",
    ]
  );


export const payments =
pgTable(
  "payments",
  {

    id: uuid("id")
      .defaultRandom()
      .primaryKey(),


    orderId:
      uuid("order_id")
      .references(
        () => orders.id,
        {
          onDelete:
            "cascade",
        }
      )
      .notNull(),


    amount:
      integer("amount")
      .notNull(),


    status:
      paymentStatusEnum(
        "status"
      )
      .default("pending")
      .notNull(),


    method:
      text("method"),


    transactionId:
      text("transaction_id"),


    createdAt:
      timestamp(
        "created_at"
      )
      .defaultNow()
      .notNull(),


    updatedAt:
      timestamp(
        "updated_at"
      )
      .defaultNow()
      .notNull(),

  }
);