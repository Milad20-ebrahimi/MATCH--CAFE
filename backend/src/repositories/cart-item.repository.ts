import { eq, and } from "drizzle-orm";

import { db } from "../database/index.js";
import { cartItems } from "../database/schema/cart-item.schema.js";
import { products } from "../database/schema/product.schema.js";

export async function findCartItems(
  cartId: string
) {

  return await db
    .select({
      id: cartItems.id,
      quantity: cartItems.quantity,

      product: {
        id: products.id,
        name: products.name,
        slug: products.slug,
        price: products.price,
        imageUrl: products.imageUrl,
      },

    })
    .from(cartItems)
    .leftJoin(
      products,
      eq(cartItems.productId, products.id)
    )
    .where(
      eq(cartItems.cartId, cartId)
    );

}


export async function findCartItem(
  cartId: string,
  productId: string
) {

  const item = await db
    .select()
    .from(cartItems)
    .where(
      and(
        eq(cartItems.cartId, cartId),
        eq(cartItems.productId, productId)
      )
    )
    .limit(1);


  return item[0] ?? null;

}


export async function addCartItem(
  data: {
    cartId: string;
    productId: string;
    quantity: number;
  }
) {

  const item = await db
    .insert(cartItems)
    .values(data)
    .returning();


  return item[0];

}


export async function updateCartItemQuantity(
  id: string,
  quantity: number
) {

  const item = await db
    .update(cartItems)
    .set({
      quantity,
    })
    .where(
      eq(cartItems.id, id)
    )
    .returning();


  return item[0] ?? null;

}
export async function deleteCartItem(
  id: string
) {

  const item = await db
    .delete(cartItems)
    .where(
      eq(cartItems.id, id)
    )
    .returning();


  return item[0] ?? null;

}