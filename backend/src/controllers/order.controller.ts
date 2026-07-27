import type {
  Response,
} from "express";

import type {
  AuthRequest,
} from "../middleware/auth.middleware.js";


import {
  checkout,
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