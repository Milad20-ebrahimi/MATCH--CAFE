import type {
  Response,
} from "express";

import type {
  AuthRequest,
} from "../middleware/auth.middleware.js";


import {
  getOrderPayment,
  payOrder,
} from "../services/payment.service.js";



export const getPayment = async (
  req: AuthRequest,
  res: Response
) => {


  const payment =
    await getOrderPayment(
      req.params.orderId as string
    );


  if (!payment) {

    return res.status(404).json({
      message:
        "Payment not found",
    });

  }


  return res.json(payment);

};



export const confirmPayment = async (
  req: AuthRequest,
  res: Response
) => {


  const payment =
    await payOrder(
      req.params.id as string,
      req.body.transactionId
    );


  return res.json({
    message:
      "Payment completed successfully",

    payment,
  });

};