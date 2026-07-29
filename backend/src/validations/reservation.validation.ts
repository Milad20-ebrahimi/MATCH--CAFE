import { z } from "zod";


export const createReservationSchema =
  z.object({

    tableId: z
      .string()
      .uuid("Invalid table id"),

    reservationDate: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}$/,
        "Invalid reservation date format"
      ),

    startTime: z
      .string()
      .regex(
        /^\d{2}:\d{2}$/,
        "Invalid start time format"
      ),

    endTime: z
      .string()
      .regex(
        /^\d{2}:\d{2}$/,
        "Invalid end time format"
      ),

    guestCount: z
      .number()
      .int()
      .positive(
        "Guest count must be greater than 0"
      ),

  });


export const updateReservationSchema =
  z.object({

    status: z.enum([
      "PENDING",
      "CONFIRMED",
      "CANCELLED",
      "COMPLETED",
    ]),

  });