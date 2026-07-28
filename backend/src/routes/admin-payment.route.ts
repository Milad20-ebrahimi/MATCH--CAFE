import { Router } from "express";

import {
  authMiddleware,
} from "../middleware/auth.middleware.js";

import {
  requireRole,
} from "../middleware/role.middleware.js";


import {
  getAllPaymentsController,
  updatePaymentStatusController,
} from "../controllers/admin-payment.controller.js";


const router = Router();


// Admin only

router.get(
  "/",
  authMiddleware,
  requireRole("ADMIN"),
  getAllPaymentsController
);



router.patch(
  "/:id/status",
  authMiddleware,
  requireRole("ADMIN"),
  updatePaymentStatusController
);



export default router;