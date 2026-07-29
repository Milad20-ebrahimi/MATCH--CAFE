import { Router } from "express";

import {
  getReservations,
  getReservation,
  createReservation,
  cancelUserReservation,
  deleteUserReservation,
} from "../controllers/reservation.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

import {
  createReservationSchema,
} from "../validations/reservation.validation.js";

import { validate } from "../middleware/validation.middleware.js";


const router = Router();


router.use(authMiddleware);


router.get(
  "/",
  getReservations
);


router.get(
  "/:id",
  getReservation
);


router.post(
  "/",
  validate(createReservationSchema),
  createReservation
);


router.patch(
  "/:id/cancel",
  cancelUserReservation
);


router.delete(
  "/:id",
  deleteUserReservation
);


export default router;