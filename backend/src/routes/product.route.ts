import { Router } from "express";
import {
  requireRole,
} from "../middleware/role.middleware.js";

import {
  validate,
} from "../middleware/validation.middleware.js";

import {
  authMiddleware,
} from "../middleware/auth.middleware.js";



import {
  createProductSchema,
  updateProductSchema,
} from "../validations/product.validation.js";


import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProductController,
  deleteProductController,
} from "../controllers/product.controller.js";


const router = Router();


// Public
router.get(
  "/",
  getAllProducts
);


router.get(
  "/:id",
  getProduct
);


// Admin only
router.post(
  "/",
authMiddleware,
requireRole("ADMIN"),
  validate(createProductSchema),
  createProduct
);


router.patch(
  "/:id",
authMiddleware,
requireRole("ADMIN"),
  validate(updateProductSchema),
  updateProductController
);


router.delete(
  "/:id",
authMiddleware,
requireRole("ADMIN"),
  deleteProductController
);


export default router;