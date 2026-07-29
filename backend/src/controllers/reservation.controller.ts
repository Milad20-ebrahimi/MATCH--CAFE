import type {
  Response,
} from "express";

import type {
  AuthRequest,
} from "../middleware/auth.middleware.js";

import {
  getUserReservations,
  getReservationById,
  createNewReservation,
  cancelReservation,
  removeReservation,
} from "../services/reservation.service.js";


export const getReservations = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;

  const reservations =
    await getUserReservations(userId);

  return res.json({
    reservations,
  });

};


export const getReservation = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;
  const reservationId =
    req.params.id as string;

  const reservation =
    await getReservationById(
      reservationId
    );

  if (
    reservation.userId !== userId
  ) {
    return res.status(403).json({
      message:
        "You are not allowed to view this reservation",
    });
  }

  return res.json({
    reservation,
  });

};


export const createReservation = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;

  const reservation =
    await createNewReservation({
      userId,

      tableId:
        req.body.tableId,

      reservationDate:
        req.body.reservationDate,

      startTime:
        req.body.startTime,

      endTime:
        req.body.endTime,

      guestCount:
        req.body.guestCount,
    });

  return res.status(201).json({
    message:
      "Reservation created successfully",
    reservation,
  });

};


export const cancelUserReservation = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;

  const reservationId =
    req.params.id as string;

  const reservation =
    await cancelReservation(
      reservationId,
      userId
    );

  return res.json({
    message:
      "Reservation cancelled successfully",
    reservation,
  });

};


export const deleteUserReservation = async (
  req: AuthRequest,
  res: Response
) => {

  const userId = req.user!.id;

  const reservationId =
    req.params.id as string;

  const reservation =
    await removeReservation(
      reservationId,
      userId
    );

  return res.json({
    message:
      "Reservation deleted successfully",
    reservation,
  });

};