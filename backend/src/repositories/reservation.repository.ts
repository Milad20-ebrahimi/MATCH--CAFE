import { eq, and } from "drizzle-orm";

import { db } from "../database/index.js";
import { reservations } from "../database/schema/reservation.schema.js";
import { cafeTables } from "../database/schema/cafe-table.schema.js";


export async function findReservationsByUser(
  userId: string
) {
  return await db
    .select({
      id: reservations.id,
      reservationDate: reservations.reservationDate,
      startTime: reservations.startTime,
      endTime: reservations.endTime,
      guestCount: reservations.guestCount,
      status: reservations.status,
      createdAt: reservations.createdAt,

      table: {
        id: cafeTables.id,
        tableNumber: cafeTables.tableNumber,
        capacity: cafeTables.capacity,
      },
    })
    .from(reservations)
    .leftJoin(
      cafeTables,
      eq(reservations.tableId, cafeTables.id)
    )
    .where(
      eq(reservations.userId, userId)
    );
}


export async function findReservationById(
  id: string
) {
  const reservation = await db
    .select({
      id: reservations.id,
      userId: reservations.userId,
      tableId: reservations.tableId,
      reservationDate: reservations.reservationDate,
      startTime: reservations.startTime,
      endTime: reservations.endTime,
      guestCount: reservations.guestCount,
      status: reservations.status,
      createdAt: reservations.createdAt,
      updatedAt: reservations.updatedAt,

      table: {
        id: cafeTables.id,
        tableNumber: cafeTables.tableNumber,
        capacity: cafeTables.capacity,
      },
    })
    .from(reservations)
    .leftJoin(
      cafeTables,
      eq(reservations.tableId, cafeTables.id)
    )
    .where(
      eq(reservations.id, id)
    )
    .limit(1);

  return reservation[0] ?? null;
}


export async function findReservationsByTableAndDate(
  tableId: string,
  reservationDate: string
) {
  return await db
    .select({
      id: reservations.id,
      userId: reservations.userId,
      tableId: reservations.tableId,
      reservationDate: reservations.reservationDate,
      startTime: reservations.startTime,
      endTime: reservations.endTime,
      guestCount: reservations.guestCount,
      status: reservations.status,
    })
    .from(reservations)
    .where(
      and(
        eq(reservations.tableId, tableId),
        eq(
          reservations.reservationDate,
          reservationDate
        )
      )
    );
}


export async function createReservation(
  data: {
    userId: string;
    tableId: string;
    reservationDate: string;
    startTime: string;
    endTime: string;
    guestCount: number;
  }
) {
  const reservation = await db
    .insert(reservations)
    .values(data)
    .returning();

  return reservation[0];
}


export async function updateReservationStatus(
  id: string,
  status:
    | "PENDING"
    | "CONFIRMED"
    | "CANCELLED"
    | "COMPLETED"
) {
  const reservation = await db
    .update(reservations)
    .set({
      status,
    })
    .where(
      eq(reservations.id, id)
    )
    .returning();

  return reservation[0] ?? null;
}


export async function deleteReservation(
  id: string
) {
  const reservation = await db
    .delete(reservations)
    .where(
      eq(reservations.id, id)
    )
    .returning();

  return reservation[0] ?? null;
}