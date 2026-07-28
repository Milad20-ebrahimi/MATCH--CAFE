import type {
  Response,
} from "express";

import type {
  AuthRequest,
} from "../middleware/auth.middleware.js";


import {
  getAllOrders,
  changeOrderStatus,
} from "../services/admin-order.service.js";



export async function getOrders(
  req: AuthRequest,
  res: Response
) {

  const orders =
    await getAllOrders();


  res.json({
    orders,
  });

}



export async function updateOrderStatusController(
  req: AuthRequest,
  res: Response
) {

  const {
    status,
  } = req.body;

const order =
  await changeOrderStatus(
    String(req.params.id),
    status
  );


  res.json({
    message:
      "Order status updated",
    order,
  });

}