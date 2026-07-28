import { db } from "../database/index.js";
import {
  findOrderItems,
} from "../repositories/order-item.repository.js";
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
  createOrderPayment,
} from "./payment.service.js";
import {
  deleteCartItemsByCartId,
} from "../repositories/cart-item.repository.js";
import {
  decreaseProductStock,
} from "../repositories/product.repository.js";
import {
  findUserOrders,
  findOrderById,
} from "../repositories/order.repository.js";
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


  return await db.transaction(
    async (tx) => {


      for (const item of cart.items) {

        await decreaseProductStock(
          item.product!.id,
          item.quantity,
          tx
        );

      }


      const order = await createOrder(
        {
          userId,

          totalAmount:
            cart.summary.subtotal,
        },
        tx
      );


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
        orderItems,
        tx
      );
      await createOrderPayment({
        orderId: order.id,
        amount: cart.summary.subtotal,
        method: "online",
        });

      await deleteCartItemsByCartId(
        cart.cart.id,
        tx
      );


      return order;

    }
  );

}
export async function getUserOrders(
  userId: string
) {

  return await findUserOrders(
    userId
  );

}


export async function getOrderById(
  id: string
) {

  const order = await findOrderById(
    id
  );


  if (!order) {
    return null;
  }


  const items = await findOrderItems(
    id
  );


  return {
    order,
    items,
  };

}