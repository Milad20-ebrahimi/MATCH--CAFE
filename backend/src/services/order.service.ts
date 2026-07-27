import {
  getUserCart,
} from "./cart.service.js";


import {
  createOrder,
} from "../repositories/order.repository.js";


import {
  createManyOrderItems,
} from "../repositories/order-item.repository.js";


import {
  deleteCartItemsByCartId,
} from "../repositories/cart-item.repository.js";



export async function checkout(
  userId: string
) {


  const cart = await getUserCart(
    userId
  );


  if (
    cart.items.length === 0
  ) {

    throw new Error(
      "Cart is empty"
    );

  }



  const order = await createOrder({

    userId,

    totalAmount:
      cart.summary.subtotal,

  });



  const orderItems =
    cart.items.map(
      (item) => ({

        orderId: order.id,

        productId:
          item.product!.id,

        quantity:
          item.quantity,

        price:
          item.product!.price,

      })
    );



  await createManyOrderItems(
    orderItems
  );



  await deleteCartItemsByCartId(
    cart.cart.id
  );



  return order;

}