import { Router } from "express";

import {
  authMiddleware,
} from "../middleware/auth.middleware.js";
import {
  createOrder,
  getOrders,
  getOrder,
} from "../controllers/order.controller.js";


const router = Router();


router.post(
  "/checkout",
  authMiddleware,
  createOrder
);
router.get(
  "/",
  authMiddleware,
  getOrders
);


router.get(
  "/:id",
  authMiddleware,
  getOrder
);

export default router;