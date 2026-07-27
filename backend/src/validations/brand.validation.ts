import { z } from "zod";

export const createBrandSchema = z.object({
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

  logoUrl: z
    .string()
    .url("Invalid logo url")
    .nullable()
    .optional(),
});

export const updateBrandSchema =
  createBrandSchema.partial();