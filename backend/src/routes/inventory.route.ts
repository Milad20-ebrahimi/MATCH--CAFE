import { Router } from "express";

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
  addInventory
);
router.post(
  "/remove",
  authMiddleware,
  removeInventory
);

export default router;