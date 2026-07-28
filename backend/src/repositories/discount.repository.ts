import { eq, sql } from "drizzle-orm";
import { db } from "../database/index.js";
import type {
  NodePgDatabase,
} from "drizzle-orm/node-postgres";


type Database = NodePgDatabase<any>;
import {
  discounts,
} from "../database/schema/discount.schema.js";



export async function findDiscountByCode(
  code: string
) {

  const discount =
    await db
      .select()
      .from(discounts)
      .where(
        eq(
          discounts.code,
          code
        )
      )
      .limit(1);


  return discount[0] ?? null;

}



export async function createDiscount(
  data: {
    code: string;
    type:
      | "percentage"
      | "fixed";
    value: number;
    minPurchaseAmount?: number;
    usageLimit?: number;
    startsAt?: Date;
    expiresAt?: Date;
  }
) {


  const [discount] =
    await db
      .insert(discounts)
      .values({

        code:
          data.code,

        type:
          data.type,

        value:
          data.value,

        minPurchaseAmount:
          data.minPurchaseAmount,

        usageLimit:
          data.usageLimit,

        startsAt:
          data.startsAt,

        expiresAt:
          data.expiresAt,

      })
      .returning();



  return discount;

}



export async function findAllDiscounts() {

  return await db
    .select()
    .from(discounts);

}



export async function updateDiscountStatus(
  id: string,
  isActive: boolean
) {


  const [discount] =
    await db
      .update(discounts)
      .set({

        isActive,

        updatedAt:
          new Date(),

      })
      .where(
        eq(
          discounts.id,
          id
        )
      )
      .returning();



  return discount ?? null;

}



export async function deleteDiscount(
  id: string
) {

  const [discount] =
    await db
      .delete(discounts)
      .where(
        eq(
          discounts.id,
          id
        )
      )
      .returning();



  return discount ?? null;

}
export async function increaseDiscountUsage(
  id: string,
  tx: Database = db
) {

  const discount =
    await tx
      .update(discounts)
      .set({
        usedCount:
          sql`${discounts.usedCount} + 1`,

        updatedAt:
          new Date(),
      })
      .where(
        eq(
          discounts.id,
          id
        )
      )
      .returning();


  return discount[0] ?? null;

}