import { Router } from "express";

import {
  authMiddleware,
} from "../middleware/auth.middleware.js";

import {
  getCart,
  addToCart,
  updateCartItem,
  deleteCartItem,
} from "../controllers/cart.controller.js";


const router = Router();


router.get(
  "/",
  authMiddleware,
  getCart
);


router.post(
  "/items",
  authMiddleware,
  addToCart
);
router.patch(
  "/items/:id",
  authMiddleware,
  updateCartItem
);
router.delete(
  "/items/:id",
  authMiddleware,
  deleteCartItem
);


export default router;