import { eq } from "drizzle-orm";

import { db } from "../database/index.js";
import { carts } from "../database/schema/cart.schema.js";


export async function findCartByUserId(
  userId: string
) {

  const cart = await db
    .select()
    .from(carts)
    .where(
      eq(carts.userId, userId)
    )
    .limit(1);


  return cart[0] ?? null;

}


export async function createCart(
  userId: string
) {

  const cart = await db
    .insert(carts)
    .values({
      userId,
    })
    .returning();


  return cart[0];

}