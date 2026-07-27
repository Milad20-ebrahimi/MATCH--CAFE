import type {
  Response,
} from "express";

import type {
  AuthRequest,
} from "../middleware/auth.middleware.js";

import {
  getUserCart,
  addProductToCart,
  updateUserCartItem,
  removeCartItem,
} from "../services/cart.service.js";

export const getCart = async (
  req: AuthRequest,
  res: Response
) => {

  // فعلاً موقت
  // بعد از اضافه کردن Auth از req.user می‌گیریم
const userId = req.user!.id;

  const cart = await getUserCart(
    userId
  );


return res.json(cart);

};



export const addToCart = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;


  const item = await addProductToCart(
    userId,
    {
      productId: req.body.productId,
      quantity: req.body.quantity,
    }
  );


  return res.status(201).json({
    message:
      "Product added to cart successfully",
    item,
  });

};
export const updateCartItem = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;


  const item = await updateUserCartItem(
    userId,
    {
      itemId: req.params.id as string,
      quantity: req.body.quantity,
    }
  );


  return res.json({
    message: "Cart item updated successfully",
    item,
  });

};
export const deleteCartItem = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;


  const item = await removeCartItem(
    userId,
    req.params.id as string
  );


  return res.json({
    message: "Cart item removed successfully",
    item,
  });

};