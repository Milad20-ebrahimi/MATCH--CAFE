import {
  findCartByUserId,
  createCart,
} from "../repositories/cart.repository.js";

import {
  findCartItems,
  findCartItem,
  addCartItem,
  updateCartItemQuantity,
  deleteCartItem,
} from "../repositories/cart-item.repository.js";


async function getOrCreateCart(
  userId: string
) {

  let cart = await findCartByUserId(
    userId
  );


  if (!cart) {

    cart = await createCart(
      userId
    );

  }


  return cart;

}



export async function getUserCart(
  userId: string
) {

  const cart = await getOrCreateCart(
    userId
  );


  const items = await findCartItems(
    cart.id
  );


  const cartItemsWithSubtotal = items.map(
    (item) => ({
      ...item,
     subtotal:
  item.product
    ? item.product.price * item.quantity
    : 0,
    })
  );


  const totalItems =
    cartItemsWithSubtotal.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );


  const subtotal =
    cartItemsWithSubtotal.reduce(
      (sum, item) =>
        sum + item.subtotal,
      0
    );


  return {
    cart,

    items: cartItemsWithSubtotal,

    summary: {
      totalItems,
      subtotal,
    },

  };

}

export async function addProductToCart(
  userId: string,
  data: {
    productId: string;
    quantity: number;
  }
) {

  const cart = await getOrCreateCart(
    userId
  );


  const existingItem = await findCartItem(
    cart.id,
    data.productId
  );


  if (existingItem) {

    return await updateCartItemQuantity(
      existingItem.id,
      existingItem.quantity + data.quantity
    );

  }


  return await addCartItem({
    cartId: cart.id,
    productId: data.productId,
    quantity: data.quantity,
  });

}
export async function updateUserCartItem(
  userId: string,
  data: {
    itemId: string;
    quantity: number;
  }
) {

  const cart = await getOrCreateCart(
    userId
  );


  const item = await updateCartItemQuantity(
    data.itemId,
    data.quantity
  );


  return item;

}
export async function removeCartItem(
  userId: string,
  itemId: string
) {

  const cart = await getOrCreateCart(
    userId
  );


  const item = await deleteCartItem(
    itemId
  );


  return item;

}