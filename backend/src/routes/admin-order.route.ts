import { Router } from "express";

import {
  authMiddleware,
} from "../middleware/auth.middleware.js";

import {
  requireRole,
} from "../middleware/role.middleware.js";


import {
  getOrders,
  updateOrderStatusController,
} from "../controllers/admin-order.controller.js";


const router = Router();


router.get(
  "/",
  authMiddleware,
  requireRole("ADMIN"),
  getOrders
);


router.patch(
  "/:id/status",
  authMiddleware,
  requireRole("ADMIN"),
  updateOrderStatusController
);


export default router;