import { Router } from "express";
import { validate } from "../middleware/validation.middleware.js";

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

router.get("/", getAllProducts);

router.post(
  "/",
  validate(createProductSchema),
  createProduct
);
router.patch(
  "/:id",
  validate(updateProductSchema),
  updateProductController
);
router.delete(
  "/:id",
  deleteProductController
);

router.get("/:id", getProduct);

export default router;