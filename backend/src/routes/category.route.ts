import { Router } from "express";

import {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";


import { validate } from "../middleware/validation.middleware.js";
import {
  createCategorySchema,
  updateCategorySchema,
} from "../validations/category.validation.js";


const router = Router();


router.get(
  "/",
  getAllCategories
);


router.get(
  "/:id",
  getCategory
);


router.post(
  "/",
  validate(createCategorySchema),
  createCategory
);
router.patch(
  "/:id",
  validate(updateCategorySchema),
  updateCategory
);
router.delete(
  "/:id",
  deleteCategory
);

export default router;