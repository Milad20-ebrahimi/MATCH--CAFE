import { Router } from "express";

import {
  authMiddleware,
} from "../middleware/auth.middleware.js";


import {
  createOrder,
} from "../controllers/order.controller.js";


const router = Router();


router.post(
  "/checkout",
  authMiddleware,
  createOrder
);


export default router;