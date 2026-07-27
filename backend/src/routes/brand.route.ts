import { Router } from "express";

import {
  getAllBrands,
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
} from "../controllers/brand.controller.js";

import { validate } from "../middleware/validation.middleware.js";

import {
  createBrandSchema,
  updateBrandSchema,
} from "../validations/brand.validation.js";

const router = Router();

router.get(
  "/",
  getAllBrands
);

router.get(
  "/:id",
  getBrand
);

router.post(
  "/",
  validate(createBrandSchema),
  createBrand
);

router.patch(
  "/:id",
  validate(updateBrandSchema),
  updateBrand
);

router.delete(
  "/:id",
  deleteBrand
);

export default router;