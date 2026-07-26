import { z } from "zod";


export const createCategorySchema = z.object({

  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),


  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters"),


  description: z
    .string()
    .nullable()
    .optional(),


  type: z
    .enum([
      "CAFE",
      "STORE",
    ]),

});


export const updateCategorySchema =
  createCategorySchema.partial();