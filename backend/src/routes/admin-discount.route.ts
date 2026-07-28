import { Router } from "express";

import {
  authMiddleware,
} from "../middleware/auth.middleware.js";

import {
  requireRole,
} from "../middleware/role.middleware.js";
import {
  createDiscountSchema,
  updateDiscountSchema,
} from "../validations/discount.validation.js";

import {
  validate,
} from "../middleware/validation.middleware.js";


import {
  createDiscountController,
  getDiscountsController,
  updateDiscountController,
  deleteDiscountController,
} from "../controllers/admin-discount.controller.js";


const router = Router();



router.get(
  "/",
  authMiddleware,
  requireRole("ADMIN"),
  getDiscountsController
);


router.post(
  "/",
  authMiddleware,
  requireRole("ADMIN"),
  validate(createDiscountSchema),
  createDiscountController
);

router.patch(
  "/:id",
  authMiddleware,
  requireRole("ADMIN"),
  validate(updateDiscountSchema),
  updateDiscountController
);



router.delete(
  "/:id",
  authMiddleware,
  requireRole("ADMIN"),
  deleteDiscountController
);



export default router;