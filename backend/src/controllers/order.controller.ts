import type {
  Response,
} from "express";

import type {
  AuthRequest,
} from "../middleware/auth.middleware.js";


import {
  checkout,
  getUserOrders,
  getOrderById,
} from "../services/order.service.js";



export const createOrder = async (
  req: AuthRequest,
  res: Response
) => {


  const userId = req.user!.id;


  const order = await checkout(
    userId
  );


  return res.status(201).json({

    message:
      "Order created successfully",

    order,

  });


};
export const getOrders = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;


  const orders = await getUserOrders(
    userId
  );


  return res.json({
    orders,
  });

};


export const getOrder = async (
  req: AuthRequest,
  res: Response
) => {

  const order = await getOrderById(
    req.params.id as string
  );


  if (!order) {

    return res.status(404).json({
      message: "Order not found",
    });

  }


  return res.json(order);

};