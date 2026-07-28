import {
  findAllOrdersWithDetails,
  updateOrderStatus,
} from "../repositories/order.repository.js";
import {
  mapOrdersWithDetails,
} from "../mappers/order.mapper.js";
export async function getAllOrders() {

  const orders =
    await findAllOrdersWithDetails();


  return mapOrdersWithDetails(
    orders
  );

}

export async function changeOrderStatus(
  orderId: string,
  status:
    | "pending"
    | "confirmed"
    | "processing"
    | "shipped"
    | "completed"
    | "cancelled"
) {


  const order =
    await updateOrderStatus(
      orderId,
      status
    );


  if (!order) {
    throw new Error(
      "Order not found"
    );
  }


  return order;

}