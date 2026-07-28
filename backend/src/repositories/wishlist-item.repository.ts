import { eq, and } from "drizzle-orm";

import { db } from "../database/index.js";

import { wishlistItems } from "../database/schema/wishlist-item.schema.js";

import { products } from "../database/schema/product.schema.js";


export async function findWishlistItems(
  userId: string
) {

  return await db
    .select({

      id: wishlistItems.id,

      createdAt:
        wishlistItems.createdAt,

      product: {

        id: products.id,

        name: products.name,

        slug: products.slug,

        price: products.price,

        imageUrl: products.imageUrl,

      },

    })
    .from(wishlistItems)

    .leftJoin(
      products,
      eq(
        wishlistItems.productId,
        products.id
      )
    )

    .where(
      eq(
        wishlistItems.userId,
        userId
      )
    );

}


export async function findWishlistItem(
  userId: string,
  productId: string
) {

  const item =
    await db
      .select()
      .from(wishlistItems)

      .where(
        and(
          eq(
            wishlistItems.userId,
            userId
          ),

          eq(
            wishlistItems.productId,
            productId
          )
        )
      )

      .limit(1);


  return item[0] ?? null;

}


export async function addWishlistItem(
  data: {
    userId: string;
    productId: string;
  }
) {

  const item =
    await db
      .insert(wishlistItems)

      .values(data)

      .returning();


  return item[0];

}


export async function deleteWishlistItem(
  userId: string,
  productId: string
) {

  const item =
    await db
      .delete(wishlistItems)

      .where(
        and(
          eq(
            wishlistItems.userId,
            userId
          ),

          eq(
            wishlistItems.productId,
            productId
          )
        )
      )

      .returning();


  return item[0] ?? null;

}