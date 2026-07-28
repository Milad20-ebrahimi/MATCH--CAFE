import { Router } from "express";

import {
  createProductReview,
  getReviewsByProduct,
  getMyReviews,
  getSingleReview,
  deleteProductReview,
} from "../controllers/review.controller.js";

import {
  authMiddleware,
} from "../middleware/auth.middleware.js";


const router = Router();


router.post(
  "/",
  authMiddleware,
  createProductReview
);


router.get(
  "/product/:productId",
  getReviewsByProduct
);


router.get(
  "/my",
  authMiddleware,
  getMyReviews
);


router.get(
  "/:id",
  getSingleReview
);


router.delete(
  "/:id",
  authMiddleware,
  deleteProductReview
);


export default router;