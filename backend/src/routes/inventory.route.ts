import { Router } from "express";
import {
  requireRole,
} from "../middleware/role.middleware.js";

import {
  authMiddleware,
} from "../middleware/auth.middleware.js";


import {
  addInventory,
  removeInventory,
} from "../controllers/inventory.controller.js";


const router = Router();
router.post(
  "/add",
 authMiddleware,
requireRole("ADMIN"),
  addInventory
);


router.post(
  "/remove",
 authMiddleware,
requireRole("ADMIN"),
  removeInventory
);

export default router;