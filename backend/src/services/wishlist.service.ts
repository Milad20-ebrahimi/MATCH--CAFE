import {
  findWishlistItems,
  findWishlistItem,
  addWishlistItem,
  deleteWishlistItem,
} from "../repositories/wishlist-item.repository.js";


export async function getWishlist(
  userId: string
) {

  return await findWishlistItems(
    userId
  );

}


export async function addToWishlist(
  userId: string,
  productId: string
) {

  const existing =
    await findWishlistItem(
      userId,
      productId
    );


  if (existing) {

    throw new Error(
      "Product is already in wishlist"
    );

  }


  return await addWishlistItem({

    userId,

    productId,

  });

}


export async function removeFromWishlist(
  userId: string,
  productId: string
) {

  const existing =
    await findWishlistItem(
      userId,
      productId
    );


  if (!existing) {

    throw new Error(
      "Product is not in wishlist"
    );

  }


  return await deleteWishlistItem(
    userId,
    productId
  );

}