import { Router } from "express";
import {
  getWishlistController,
  addToWishlistController,
  removeFromWishlistController,
} from "../controllers/wishlist.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", authMiddleware, getWishlistController);

router.post("/", authMiddleware, addToWishlistController);

router.delete(
  "/:productId",
  authMiddleware,
  removeFromWishlistController
);

export default router;