import { Router } from "express";

import {
  getCafeTables,
  getCafeTable,
  createCafeTable,
  updateCafeTable,
  deleteCafeTable,
} from "../controllers/cafe-table.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";
import { requireRole } from "../middleware/role.middleware.js";


const router = Router();


router.get(
  "/",
  getCafeTables
);


router.get(
  "/:id",
  getCafeTable
);


router.post(
  "/",
  authMiddleware,
  requireRole("ADMIN", "STAFF"),
  createCafeTable
);


router.patch(
  "/:id",
  authMiddleware,
  requireRole("ADMIN", "STAFF"),
  updateCafeTable
);


router.delete(
  "/:id",
  authMiddleware,
  requireRole("ADMIN"),
  deleteCafeTable
);


export default router;