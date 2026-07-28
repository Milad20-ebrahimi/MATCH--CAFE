import { eq } from "drizzle-orm";

import { db } from "../database/index.js";

import {
  inventoryTransactions,
} from "../database/schema/inventory.schema.js";



export async function createInventoryTransaction(
  data: {
    productId: string;
    quantity: number;
    type: "IN" | "OUT";
    note?: string;
  }
) {

  const transaction =
    await db
      .insert(inventoryTransactions)
      .values({
        productId:
          data.productId,

        quantity:
          data.quantity,

        type:
          data.type,

        note:
          data.note ?? null,
      })
      .returning();


  return transaction[0];

}



export async function findProductInventoryHistory(
  productId: string
) {

  return await db
    .select()
    .from(inventoryTransactions)
    .where(
      eq(
        inventoryTransactions.productId,
        productId
      )
    );

}