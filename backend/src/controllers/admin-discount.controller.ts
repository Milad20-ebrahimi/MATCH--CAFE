import type { Request, Response } from "express";

import {
  createNewDiscount,
  getDiscounts,
  toggleDiscount,
  removeDiscount,
} from "../services/discount.service.js";



export async function createDiscountController(
  req: Request,
  res: Response
) {

  const discount =
    await createNewDiscount(
      req.body
    );


  res.status(201).json({
    message:
      "Discount created successfully",

    discount,
  });

}



export async function getDiscountsController(
  req: Request,
  res: Response
) {

  const discounts =
    await getDiscounts();


  res.json({
    discounts,
  });

}



export async function updateDiscountController(
  req: Request,
  res: Response
) {

  const {
    isActive,
  } = req.body;


  const discount =
    await toggleDiscount(
      req.params.id as string,
      isActive
    );


  res.json({

    message:
      "Discount status updated",

    discount,

  });

}



export async function deleteDiscountController(
  req: Request,
  res: Response
) {

  const discount =
    await removeDiscount(
      req.params.id as string
    );


  res.json({

    message:
      "Discount deleted",

    discount,

  });

}