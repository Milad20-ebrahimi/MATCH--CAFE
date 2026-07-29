import {
  findReservationsByUser,
  findReservationById,
  findReservationsByTableAndDate,
  createReservation,
  updateReservationStatus,
  deleteReservation,
} from "../repositories/reservation.repository.js";

import { findCafeTableById } from "../repositories/cafe-table.repository.js";


export async function getUserReservations(
  userId: string
) {
  return await findReservationsByUser(
    userId
  );
}


export async function getReservationById(
  id: string
) {
  const reservation =
    await findReservationById(id);

  if (!reservation) {
    throw new Error(
      "Reservation not found"
    );
  }

  return reservation;
}


export async function createNewReservation(
  data: {
    userId: string;
    tableId: string;
    reservationDate: string;
    startTime: string;
    endTime: string;
    guestCount: number;
  }
) {

  if (data.guestCount <= 0) {
    throw new Error(
      "Guest count must be greater than 0"
    );
  }


  if (data.startTime >= data.endTime) {
    throw new Error(
      "Start time must be before end time"
    );
  }


  const table =
    await findCafeTableById(
      data.tableId
    );


  if (!table) {
    throw new Error(
      "Cafe table not found"
    );
  }


  if (table.status !== "AVAILABLE") {
    throw new Error(
      "Cafe table is not available"
    );
  }


  if (
    data.guestCount >
    table.capacity
  ) {
    throw new Error(
      "Guest count exceeds table capacity"
    );
  }


  const existingReservations =
    await findReservationsByTableAndDate(
      data.tableId,
      data.reservationDate
    );


  const hasConflict =
    existingReservations.some(
      (reservation) => {

        if (
          reservation.status ===
            "CANCELLED" ||
          reservation.status ===
            "COMPLETED"
        ) {
          return false;
        }


        return (
          data.startTime <
            reservation.endTime &&
          data.endTime >
            reservation.startTime
        );

      }
    );


  if (hasConflict) {
    throw new Error(
      "Cafe table is already reserved for this time"
    );
  }


  return await createReservation(
    data
  );
}


export async function cancelReservation(
  id: string,
  userId: string
) {

  const reservation =
    await findReservationById(id);


  if (!reservation) {
    throw new Error(
      "Reservation not found"
    );
  }


  if (
    reservation.userId !== userId
  ) {
    throw new Error(
      "You are not allowed to cancel this reservation"
    );
  }


  if (
    reservation.status ===
      "CANCELLED"
  ) {
    throw new Error(
      "Reservation is already cancelled"
    );
  }


  if (
    reservation.status ===
      "COMPLETED"
  ) {
    throw new Error(
      "Completed reservation cannot be cancelled"
    );
  }


  return await updateReservationStatus(
    id,
    "CANCELLED"
  );
}


export async function removeReservation(
  id: string,
  userId: string
) {

  const reservation =
    await findReservationById(id);


  if (!reservation) {
    throw new Error(
      "Reservation not found"
    );
  }


  if (
    reservation.userId !== userId
  ) {
    throw new Error(
      "You are not allowed to delete this reservation"
    );
  }


  return await deleteReservation(
    id
  );
}