import type {
  Response,
} from "express";

import type {
  AuthRequest,
} from "../middleware/auth.middleware.js";
import {
  removeStock,
} from "../services/inventory.service.js";

import {
  addStock,
} from "../services/inventory.service.js";



export const addInventory = async (
  req: AuthRequest,
  res: Response
) => {


  const transaction =
    await addStock({

      productId:
        req.body.productId,

      quantity:
        req.body.quantity,

      note:
        req.body.note,

    });


  return res.status(201).json({

    message:
      "Stock added successfully",

    transaction,

  });

};

export const removeInventory = async (
  req: AuthRequest,
  res: Response
) => {


  const transaction =
    await removeStock({

      productId:
        req.body.productId,

      quantity:
        req.body.quantity,

      note:
        req.body.note,

    });


  return res.status(201).json({

    message:
      "Stock removed successfully",

    transaction,

  });

};