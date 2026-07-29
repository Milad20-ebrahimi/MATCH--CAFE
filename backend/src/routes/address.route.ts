import { Router } from "express";

import {
  getAddresses,
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
  setDefault,
} from "../controllers/address.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validation.middleware.js";

import {
  createAddressSchema,
  updateAddressSchema,
} from "../validations/address.validation.js";


const router = Router();


// تمام Addressها فقط برای کاربر لاگین‌شده
router.use(authMiddleware);


// GET /api/v1/addresses
router.get(
  "/",
  getAddresses
);


// GET /api/v1/addresses/:id
router.get(
  "/:id",
  getAddress
);


// POST /api/v1/addresses
router.post(
  "/",
  validate(createAddressSchema),
  createAddress
);


// PATCH /api/v1/addresses/:id
router.patch(
  "/:id",
  validate(updateAddressSchema),
  updateAddress
);


// DELETE /api/v1/addresses/:id
router.delete(
  "/:id",
  deleteAddress
);


// POST /api/v1/addresses/:id/default
router.post(
  "/:id/default",
  setDefault
);


export default router;