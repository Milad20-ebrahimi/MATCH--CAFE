import { Router } from "express";

import {
  getMe,
} from "../controllers/user.controller.js";

import {
  authMiddleware,
} from "../middleware/auth.middleware.js";

console.log("USER ROUTE LOADED");
const router = Router();


router.get(
  "/me",
  authMiddleware,
  getMe
);


export default router;