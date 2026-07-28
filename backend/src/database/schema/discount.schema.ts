import {
  pgTable,
  uuid,
  text,
  integer,
  timestamp,
  boolean,
  pgEnum,
} from "drizzle-orm/pg-core";


export const discountTypeEnum = pgEnum(
  "discount_type",
  [
    "percentage",
    "fixed",
  ]
);


export const discounts = pgTable(
  "discounts",
  {

    id: uuid("id")
      .defaultRandom()
      .primaryKey(),


    code: text("code")
      .notNull()
      .unique(),


    type: discountTypeEnum(
      "type"
    )
      .notNull(),


    value: integer(
      "value"
    )
      .notNull(),


    minPurchaseAmount: integer(
      "min_purchase_amount"
    ),


    usageLimit: integer(
      "usage_limit"
    ),


    usedCount: integer(
      "used_count"
    )
      .default(0)
      .notNull(),


    isActive: boolean(
      "is_active"
    )
      .default(true)
      .notNull(),


    startsAt: timestamp(
      "starts_at"
    ),


    expiresAt: timestamp(
      "expires_at"
    ),


    createdAt: timestamp(
      "created_at"
    )
      .defaultNow()
      .notNull(),


    updatedAt: timestamp(
      "updated_at"
    )
      .defaultNow()
      .notNull(),

  }
);