import { z } from "zod";


export const createDiscountSchema =
  z.object({

    code: z
      .string()
      .min(
        3,
        "Discount code must be at least 3 characters"
      )
      .max(
        50
      ),


    type: z.enum([
      "percentage",
      "fixed",
    ]),


    value: z
      .number()
      .positive(
        "Discount value must be positive"
      ),


    minPurchaseAmount:
      z.number()
      .positive()
      .optional(),


    usageLimit:
      z.number()
      .positive()
      .optional(),


    startsAt:
      z.coerce.date()
      .optional(),


    expiresAt:
      z.coerce.date()
      .optional(),

  });



export const updateDiscountSchema =
  z.object({

    isActive:
      z.boolean(),

  });